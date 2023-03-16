import YAML from "yaml";
import fs from "fs";
import { Config } from "../types/config";

export async function fetchFileContents(url: string): Promise<string> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("File not found");
  }

  const blob = await res.blob();
  return await blob.text();
}

export async function fetchConfig(url: string): Promise<Config> {
  let res = await fetchFileContents(url);
  return YAML.parse(res);
}

export async function readLocalFileContents(filename: string): Promise<string> {
  return fs.readFileSync("./public/data/config.yml", "utf8");
}

export async function readLocalConfig() {
  let res;
  try {
    res = await readLocalFileContents(`./public/data/config.yml`);
    console.info("Using custom config.yml");
  } catch (e) {
    console.warn("config.yml not found, using config.sample.yml instead");
    res = await readLocalFileContents(`./public/data/config.sample.yml`);
  }
  return YAML.parse(res);
}
