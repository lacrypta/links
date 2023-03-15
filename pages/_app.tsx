import "../styles/fonts.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "../contexts/config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
