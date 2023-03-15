import { createContext, useEffect, useState } from "react";
import { fetchConfig } from "../lib/utils";
import { Config } from "../types/config";

// Context Interface
interface ConfigContextType {
  config?: Config;
  isLoading: boolean;
}

// Context Provider
interface ConfigProviderType {
  children: React.ReactNode;
}

// Context
export const ConfigContext = createContext<ConfigContextType>({
  isLoading: true,
});

// Provider
export const ConfigProvider = ({ children }: ConfigProviderType) => {
  const [config, setConfig] = useState<Config>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchConfig().then((config) => {
      setConfig(config);
      setIsLoading(false);
    });
  }, []);

  return (
    <ConfigContext.Provider value={{ isLoading, config }}>
      {children}
    </ConfigContext.Provider>
  );
};
