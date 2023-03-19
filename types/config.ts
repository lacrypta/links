import { Block } from "./block";
import { ThemeConfig } from "./theme";

export interface Config {
  version?: string;
  html: {
    title: string;
    google_analytics?: string;
  };
  theme: ThemeConfig;
  main: {
    title: string;
    picture?: string;
  };
  blocks: Block[];
}
