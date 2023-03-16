import { Block } from "./block";

export interface Config {
  version?: string;
  core?: {
    github_fetch?: true;
  };
  html: {
    title: string;
  };
  main: {
    title: string;
  };
  blocks: Block[];
}
