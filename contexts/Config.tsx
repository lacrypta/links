import React, { useState } from "react";
import { Config } from "../types/config";
import { ConfigProvider as ConfigProviderType } from "../types/provider";

interface IConfigContext {
  config?: Config;
  provider?: ConfigProviderType;
  setConfig: React.Dispatch<React.SetStateAction<Config | undefined>>;
  setProvider: React.Dispatch<
    React.SetStateAction<ConfigProviderType | undefined>
  >;
}

const ConfigContext = React.createContext<IConfigContext>({
  setConfig: () => {},
  setProvider: () => {},
});

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<Config>();
  const [provider, setProvider] = useState<ConfigProviderType>();

  return (
    <ConfigContext.Provider
      value={{ config, setConfig, provider, setProvider }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => React.useContext(ConfigContext);
