import { AccountProvider } from "../contexts/Account";
import { ConfigProvider } from "../contexts/Config";
import { VerificationProvider } from "../contexts/Verification";
import { WalletProvider } from "../contexts/Wallet";
import "../styles/fonts.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <WalletProvider>
        <AccountProvider>
          <VerificationProvider>
            <Component {...pageProps} />
          </VerificationProvider>
        </AccountProvider>
      </WalletProvider>
    </ConfigProvider>
  );
}
