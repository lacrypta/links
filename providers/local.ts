import { readLocalConfig } from "../lib/utils";
import { Config } from "../types/config";
import { ConfigProvider } from "../types/provider";

export const LocalProvider: ConfigProvider = {
  type: "local",
  async get(_username: string): Promise<Config> {
    return await readLocalConfig();
  },
};

export default LocalProvider;
