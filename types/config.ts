import { Block } from "./block";
import { NostrConfig } from "./nostr";
import { ThemeConfig } from "./theme";

export interface Config {
  version?: string;
  username?: string;
  html: {
    title: string;
    google_analytics?: string;
    description?: string;
  };
  nostr?: NostrConfig;
  theme?: ThemeConfig;
  main: {
    title: string;
    picture?: string;
  };
  blocks: Block[];
}

export interface UrlConfig {
  username: string;
  provider: string;
  host: string;
}
