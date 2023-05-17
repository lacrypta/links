import { readLocalConfig } from "../lib/utils";
import { Config } from "../types/config";
import { ConfigProvider } from "./abstract";
import { ProviderType } from "../types/provider";

export class LocalProvider extends ConfigProvider {
  static type: ProviderType = "local";

  constructor(username: string) {
    super(LocalProvider.type, username);
  }

  async get(): Promise<Config> {
    return await readLocalConfig();
  }

  public static createInstance(username: string): LocalProvider {
    return new LocalProvider(username);
  }

  // Update the static register method to pass the class itself
  public static register(): void {
    ConfigProvider.registerProvider(LocalProvider.type, LocalProvider);
  }
}

export default LocalProvider;
