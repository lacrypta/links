const fs = require("fs");
const path = require("path");

// Utils functions
function getJSONFile(filename) {
  const json = fs.readFileSync(
    path.resolve(__dirname, `data/${filename}.json`),
    "utf8"
  );
  return JSON.parse(json);
}

function getConfig(filename) {
  try {
    return getJSONFile(filename);
  } catch (e) {
    return getJSONFile(`${filename}.example`);
  }
}

const nextConfig = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    publicRuntimeConfig: {
      // Will be available on both server and client
      settings: getConfig("settings"),
      blocks: getConfig("blocks"),
    },
  };
  return nextConfig;
};
module.exports = nextConfig;
