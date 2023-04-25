import { Config } from "../types/config";
import {
  ConfigProviderConstructor,
  ConfigProviderSerialized,
  ProviderType,
} from "../types/provider";

export abstract class ConfigProvider {
  protected type: string;
  protected username: string;

  // supportedProviders map with ConfigProvider constructors
  public static supportedProviders: Map<
    ProviderType,
    ConfigProviderConstructor<any>
  > = new Map();

  constructor(type: string, username: string) {
    this.type = type;
    this.username = username;
  }

  public abstract get(): Promise<Config>;

  public getType(): ProviderType {
    return this.type as ProviderType;
  }

  public getUsername(): string {
    return this.username;
  }

  // Serialize
  public toJSON(): ConfigProviderSerialized {
    return {
      type: this.type as ProviderType,
      username: this.username,
    };
  }

  // Unserialize
  public static fromJSON(
    json: ConfigProviderSerialized
  ): ConfigProvider | null {
    const providerClass = this.supportedProviders.get(json.type);
    if (!providerClass) {
      return null;
    }

    return new providerClass(json.username);
  }

  // Update the registerProvider method to accept a ConfigProviderConstructor
  protected static registerProvider<T extends ConfigProvider>(
    type: ProviderType,
    providerClass: ConfigProviderConstructor<T>
  ): void {
    this.supportedProviders.set(type, providerClass);
  }
}
