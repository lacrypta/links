import React, { useState } from "react";
import { Config } from "../types/config";

interface IConfigContext {
  config?: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config | undefined>>;
}

const ConfigContext = React.createContext<IConfigContext>({
  setConfig: () => {},
});

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<Config>();

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => React.useContext(ConfigContext);
