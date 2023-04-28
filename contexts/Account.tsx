import React, { useState } from "react";
import { User } from "../types/user";

interface IAccountContext {
  userData: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

const AccountContext = React.createContext<IAccountContext>({
  userData: null,
  setUserData: () => {},
});

interface AccountProviderProps {
  children: React.ReactNode;
}

export const AccountProvider = ({ children }: AccountProviderProps) => {
  const [userData, setUserData] = useState<User | null>(null);

  return (
    <AccountContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => React.useContext(AccountContext);
