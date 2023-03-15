import YAML from "yaml";
import { Config } from "../types/config";

export async function fetchFileContents(filename: string): Promise<string> {
  const res = await fetch(filename);

  if (!res.ok) {
    throw "File not found";
  }

  const blob = await res.blob();
  return await blob.text();
}

export async function fetchConfig(): Promise<Config> {
  console.info("Fetching config...");
  let res;
  try {
    res = await fetchFileContents("/data/config.yml");
    console.info("Using custom config.yml");
  } catch (e) {
    console.warn("config.yml not found, using config.sample.yml instead");
    res = await fetchFileContents("/data/config.sample.yml");
  }
  const config = YAML.parse(res);

  return config;
}
