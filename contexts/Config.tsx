import React, { useCallback, useState } from "react";
import { Config } from "../types/config";
import { ConfigProvider as ConfigProviderType } from "../providers/abstract";

interface IConfigContext {
  config?: Config;
  provider?: ConfigProviderType;
  setConfig: React.Dispatch<React.SetStateAction<Config | undefined>>;
  refresh: () => void;
  setProvider: React.Dispatch<
    React.SetStateAction<ConfigProviderType | undefined>
  >;
}

const ConfigContext = React.createContext<IConfigContext>({
  setConfig: () => {},
  refresh: () => {},
  setProvider: () => {},
});

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<Config>();
  const [provider, setProvider] = useState<ConfigProviderType>();

  const refresh = useCallback(() => {}, []);

  return (
    <ConfigContext.Provider
      value={{ config, provider, setConfig, setProvider, refresh }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => React.useContext(ConfigContext);
