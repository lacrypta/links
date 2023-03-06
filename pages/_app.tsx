import "../styles/fonts.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import getConfig from "next/config";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
