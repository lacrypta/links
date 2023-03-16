import YAML from "yaml";
import fs from "fs";
import path from "path";

import { Config } from "../types/config";

const CONFIG_DIRECTORY = path.join(process.cwd(), "public/config");

export async function fetchFileContents(url: string): Promise<string> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Remove file not found (${url})`);
  }

  const blob = await res.blob();
  return await blob.text();
}

export async function fetchConfig(url: string): Promise<Config> {
  let res = await fetchFileContents(url);
  return YAML.parse(res);
}

export async function readLocalFileContents(filename: string): Promise<string> {
  // get local path with fs path

  return fs.readFileSync(filename, "utf8");
}

export async function readLocalConfig() {
  let res;
  try {
    res = await readLocalFileContents(`${CONFIG_DIRECTORY}/config.yml`);
    console.info("Using custom config.yml");
  } catch (e) {
    console.warn("config.yml not found, using config.sample.yml instead");
    res = await readLocalFileContents(`${CONFIG_DIRECTORY}/config.sample.yml`);
  }
  return YAML.parse(res);
}
