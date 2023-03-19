import { ThemeConfig } from "../types/theme";

const defaultTheme = {
  background_color: "#f9fafb",
  cover_color: "#dddddd",
};

export const generateTheme = (theme: ThemeConfig) => {
  return Object.assign(defaultTheme, theme);
};
