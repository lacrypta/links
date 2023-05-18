import React, { useState } from "react";
import { UserData } from "../types/request";

interface IAccountContext {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
}

const AccountContext = React.createContext<IAccountContext>({
  userData: null,
  setUserData: () => {},
});

interface AccountProviderProps {
  children: React.ReactNode;
}

export const AccountProvider = ({ children }: AccountProviderProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);

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
