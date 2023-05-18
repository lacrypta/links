import React, { useState } from "react";
import { Wallet } from "../types/wallet";
import useLocalStorage from "use-local-storage";

interface IWalletContext {
  walletData: Wallet | undefined;
  setWalletData: React.Dispatch<React.SetStateAction<Wallet | undefined>>;
}

const WalletContext = React.createContext<IWalletContext>({
  walletData: undefined,
  setWalletData: () => {},
});

interface WalletProviderProps {
  children: React.ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [walletData, setWalletData] = useLocalStorage<Wallet | undefined>(
    "walletData",
    undefined
  );

  return (
    <WalletContext.Provider
      value={{
        walletData,
        setWalletData,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => React.useContext(WalletContext);
