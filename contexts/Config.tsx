import React, { useCallback, useState } from "react";
import { Config } from "../types/config";
import { ConfigProvider as ConfigProviderType } from "../providers/abstract";
import { User } from "../types/user";

interface IConfigContext {
  config?: Config;
  provider?: ConfigProviderType;
  userData?: User;
  setConfig: React.Dispatch<React.SetStateAction<Config | undefined>>;
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>;
  refresh: () => Promise<Config | null>;
  setProvider: React.Dispatch<
    React.SetStateAction<ConfigProviderType | undefined>
  >;
}

const ConfigContext = React.createContext<IConfigContext>({
  setConfig: () => {},
  refresh: () => Promise.resolve(null),
  setProvider: () => {},
  setUserData: () => {},
});

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<Config>();
  const [provider, setProvider] = useState<ConfigProviderType>();
  const [userData, setUserData] = useState<User>();

  const refresh = useCallback(async (): Promise<Config | null> => {
    if (!provider) {
      return null;
    }
    const _config = await provider.get();
    setConfig(_config);
    return _config;
  }, [provider]);

  return (
    <ConfigContext.Provider
      value={{
        config,
        provider,
        userData,
        setConfig,
        setProvider,
        refresh,
        setUserData,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => React.useContext(ConfigContext);
