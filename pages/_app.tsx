import { AccountProvider } from "../contexts/Account";
import { ConfigProvider } from "../contexts/Config";
import { VerificationProvider } from "../contexts/Verification";
import "../styles/fonts.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <AccountProvider>
        <VerificationProvider>
          <Component {...pageProps} />
        </VerificationProvider>
      </AccountProvider>
    </ConfigProvider>
  );
}
