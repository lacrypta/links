import { ThemeConfig } from "../types/theme";

const defaultTheme = {
  background_color: "#f9fafb",
};

export const generateTheme = (theme: ThemeConfig) => {
  return Object.assign(defaultTheme, theme);
};
