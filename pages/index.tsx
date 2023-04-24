import { useEffect } from "react";
import { fetchConfig, parseUrl, readLocalConfig } from "../lib/utils";
import { Config } from "../types/config";

// Components
import Head from "next/head";
import Footer from "../components/footer/Footer";
import Container from "../components/layout/Container";
import Paper from "../components/content/Paper";
import Title from "../components/header/Title";
import PaperBody from "../components/content/PaperBody";
import BlockList from "../components/content/BlockList";
import Logo from "../components/header/Logo";
import Cover from "../components/header/Cover";

// Types
import { Block } from "../types/block";

// Google Tag manager
import TagManager from "react-gtm-module";
import { motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { generateTheme } from "../lib/theme";
import { getUsers } from "../lib/users";
import MenuButton from "../components/header/menu/MenuButton";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { useConfig } from "../contexts/Config";
import GitHubProvider from "../providers/github";

interface HomeProps {
  config: Config;
  verified: boolean;
  error?: string | null;
}

const supportedProviders = process.env.CONFIG_PROVIDERS
  ? process.env.CONFIG_PROVIDERS.split(",")
  : [];

export default function Home({ config, verified, error }: HomeProps) {
  const { setConfig } = useConfig();

  // Sets config for provider
  useEffect(() => {
    setConfig(config);
  }, []);

  // Google Tag Manager
  useEffect(() => {
    if (!config?.html?.google_analytics) {
      return;
    }
    TagManager.initialize({
      gtmId: config.html.google_analytics,
    });
  }, [config?.html?.google_analytics]);

  const { blocks, html, main } = config;
  return (
    <div>
      <Head>
        <title>{html?.title}</title>
        <meta
          name='description'
          content={html?.description || "HTML Link Description"}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ThemeProvider theme={generateTheme(config.theme || {})}>
        <Container>
          <motion.div
            initial={{ rotate: 180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className='sm:w-[800px] relative sm:mx-auto sm:max-w-lg'>
              <motion.div
                className={"absolute top-5 right-2 z-50"}
                initial={{ marginTop: 50, opacity: 0 }}
                animate={{ marginTop: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                {verified ? (
                  <CheckBadgeIcon
                    stroke='white'
                    strokeWidth={0.8}
                    className='h-7 w-7 text-blue-500 drop-shadow-lg'
                  />
                ) : (
                  <MenuButton />
                )}
              </motion.div>
              <Cover />
              <Paper>
                <Logo title={main.title} picture={main.picture} />
                <Title>{main?.title}</Title>
                <div className='divide-y divide-gray-300/50'>
                  <PaperBody>
                    <BlockList blocks={blocks as Block[]} />
                  </PaperBody>

                  {error && <div>{error}</div>}
                </div>
              </Paper>
              <Footer />
            </div>
          </motion.div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  let config: Config | null = null;
  let error = null;
  if (process.env.DOMAIN_MATCH) {
    try {
      if (supportedProviders.length === 0) {
        const urlConfig = parseUrl(context.req.headers.host);
        if (!urlConfig) {
          throw new Error("Invalid url pattern");
        }

        if (!supportedProviders.includes(urlConfig.provider)) {
          throw new Error(`Provider "${urlConfig.provider}" not supported`);
        }

        const subdomain = urlConfig.username;
        let githubUser = subdomain;
        const domain = urlConfig.host;
        if (domain !== process.env.DOMAIN_MATCH) {
          throw new Error("Invalid DOMAIN_MATCH in .env");
        }

        config = await GitHubProvider.get(githubUser);
      } else {
        // Subdomain is HODL user
        const hostname = context.req.headers.host.split(".");
        const subdomain = hostname.shift();
        let githubUser = subdomain;

        if (process.env.USERS_API_URL) {
          const users = await getUsers();

          const found = users.find((user: any) => user.id === subdomain);
          if (found) {
            githubUser = found.github;
          }
        }
      }
    } catch (e: any) {
      console.warn("Invalid username or subdomain: " + e.message);
      error = e.message;
    }
  }

  if (!config) {
    config = await readLocalConfig();
  }

  return {
    props: { config, verified: !!process.env.VERIFIED, error },
  };
}
