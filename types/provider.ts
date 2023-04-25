import { Config } from "./config";

export type ProviderType = "github" | "local";

export interface ConfigProvider {
  type: ProviderType;
  get: (username: string) => Promise<Config>;
}
