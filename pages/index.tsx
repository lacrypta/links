import { useEffect } from "react";
import { parseUrl, readLocalConfig } from "../lib/utils";
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
import { ConfigProviderSerialized, ProviderType } from "../types/provider";
import { ConfigProvider } from "../providers/abstract";
import GitHubProvider from "../providers/github";
import LocalProvider from "../providers/local";
import { User } from "../types/user";
import { useAccount } from "../contexts/Account";

interface HomeProps {
  config: Config;
  provider: ConfigProviderSerialized;
  userData: User;
  error?: string | null;
}

// Register Config Providers
GitHubProvider.register();
LocalProvider.register();

const supportedProviders = ConfigProvider.supportedProviders;

export default function Home({ config, provider, userData, error }: HomeProps) {
  const { setConfig, setProvider } = useConfig();
  const { setUserData } = useAccount();

  // Sets config for provider
  useEffect(() => {
    setConfig(config);
    setUserData(userData);
    setProvider(ConfigProvider.fromJSON(provider) as ConfigProvider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <MenuButton />
              </motion.div>
              <Cover />
              <Paper>
                {config.verified && (
                  <div className='absolute right-3 top-3'>
                    <CheckBadgeIcon
                      stroke='white'
                      strokeWidth={0.8}
                      className='h-7 w-7 text-blue-500 drop-shadow-md'
                    />
                  </div>
                )}

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
  let provider: ConfigProvider = LocalProvider.createInstance("");
  let userData: User | null = null;

  if (process.env.DOMAIN_MATCH) {
    try {
      // Get config from provider (expected USERNAME.PROVIDER.hodl.ar)
      if (process.env.CONFIG_FROM_PROVIDER) {
        const urlConfig = parseUrl(context.req.headers.host);
        if (!urlConfig) {
          throw new Error("Invalid url pattern");
        }

        const ProviderConstructor = supportedProviders.get(
          urlConfig.provider as ProviderType
        );

        if (!ProviderConstructor) {
          throw new Error(`Provider "${urlConfig.provider}" not supported`);
        }

        const subdomain = urlConfig.username;
        let githubUser = subdomain;
        const domain = urlConfig.host;
        if (domain !== process.env.DOMAIN_MATCH) {
          throw new Error("Invalid DOMAIN_MATCH in .env");
        }

        provider = ProviderConstructor.createInstance(githubUser);

        config = await provider.get();
      } else if (process.env.VERIFIED) {
        console.info("VERIFAIDO!");
        // Subdomain is HODL user
        const hostname = context.req.headers.host.split(".");
        const subdomain = hostname.shift();

        // TODO: Query single user
        const users = await getUsers();

        userData = users.find((user: any) => user.id === subdomain);
        if (!userData) {
          throw new Error("User not found on HODL.ar");
        }

        const githubUser = userData.github as string;

        provider = GitHubProvider.createInstance(githubUser);
        config = await provider.get();
      }
    } catch (e: any) {
      console.warn("Invalid username or subdomain: " + e.message);
      error = e.message;
    }
  }

  // Fallback to local config
  if (!config) {
    config = await readLocalConfig();
  }

  (config as Config).verified = !!process.env.VERIFIED;

  return {
    props: {
      config,
      provider: provider.toJSON(),
      userData: userData,
      error,
    },
  };
}
