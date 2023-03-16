import "../styles/fonts.css";
import "../styles/globals.css";
import { Config } from "../types/config";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
