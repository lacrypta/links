import { Block } from "./block";

export interface Config {
  version?: string;
  html: {
    title: string;
  };
  main: {
    title: string;
    picture?: string;
  };
  blocks: Block[];
}
