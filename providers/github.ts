import YAML from "yaml";
import { fetchFileContents } from "../lib/utils";
import { Config, ConfigProvider } from "../types/config";

interface IGitHubProvider extends ConfigProvider {
  getProfile: (username: string) => Promise<any>;
}

export const GitHubProvider: IGitHubProvider = {
  async get(username: string): Promise<Config> {
    const url = `https://raw.githubusercontent.com/${username}/.hodl.ar/main/config.yml`;
    let res = await fetchFileContents(url);
    let config = YAML.parse(res);

    if (!config.main.picture) {
      config.main.picture = (
        await GitHubProvider.getProfile(username)
      ).avatar_url;
    }

    config.raw = res;

    return config;
  },

  getProfile: async (username: string) => {
    return fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((profile) => {
        if (profile.message) {
          throw new Error(profile.message);
        }
        return profile;
      });
  },
};

export default GitHubProvider;
