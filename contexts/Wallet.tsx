import React, { useCallback, useState } from "react";
import { Wallet } from "../types/wallet";
import useLocalStorage from "use-local-storage";

interface IWalletContext {
  walletData: Wallet | undefined;
  getBalance: () => Promise<number>;
  setWalletData: React.Dispatch<React.SetStateAction<Wallet | undefined>>;
}

const WalletContext = React.createContext<IWalletContext>({
  walletData: undefined,
  getBalance: () => Promise.resolve(0),
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

  const getBalance = useCallback(async () => {
    console.info("walletData: ");
    console.dir(walletData);
    const endpoint = walletData?.endpoint + "/api/v1/wallet";

    // fetch with api-key on header
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": walletData?.lndhub.password as string,
      },
    });

    if (!response.ok) {
      return 999;
    }

    const res = await response.json();
    console.dir(res);

    return res.balance;
  }, [walletData]);

  return (
    <WalletContext.Provider
      value={{
        walletData,
        getBalance,
        setWalletData,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => React.useContext(WalletContext);
