import { ConfigProvider } from "../providers/abstract";
import { Config } from "./config";

export type ProviderType = "github" | "local";

export interface ConfigProviderSerialized {
  type: ProviderType;
  username: string;
}

export type ConfigProviderConstructor<T extends ConfigProvider> = {
  createInstance(githubUser: string): ConfigProvider;
  new (username: string): T;
  type: ProviderType;
};
