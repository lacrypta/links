import YAML from "yaml";
import { fetchFileContents } from "../lib/utils";
import { Config } from "../types/config";
import { ConfigProvider } from "./abstract";
import { ProviderType } from "../types/provider";

export class GitHubProvider extends ConfigProvider {
  static type: ProviderType = "github";

  constructor(username: string) {
    super(GitHubProvider.type, username);
  }

  async get(): Promise<Config> {
    const url = `https://raw.githubusercontent.com/${this.username}/.hodl.ar/main/config.yml`;
    let res = await fetchFileContents(url);
    let config = YAML.parse(res);

    if (!config.main.picture) {
      config.main.picture = (await this.getProfile()).avatar_url;
    }

    return config;
  }

  async getProfile(): Promise<any> {
    return fetch(`https://api.github.com/users/${this.username}`, {
      cache: "reload",
    })
      .then((res) => res.json())
      .then((profile) => {
        if (profile.message) {
          throw new Error(profile.message);
        }
        return profile;
      });
  }

  public static createInstance(username: string): GitHubProvider {
    return new GitHubProvider(username);
  }

  // Update the static register method to pass the class itself
  public static register(): void {
    ConfigProvider.registerProvider(GitHubProvider.type, GitHubProvider);
  }
}

export default GitHubProvider;
