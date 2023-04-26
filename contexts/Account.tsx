import React, { useState } from "react";
import { User } from "../types/user";

interface IAccountContext {
  userData?: User;
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const AccountContext = React.createContext<IAccountContext>({
  setUserData: () => {},
});

interface AccountProviderProps {
  children: React.ReactNode;
}

export const AccountProvider = ({ children }: AccountProviderProps) => {
  const [userData, setUserData] = useState<User>();

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
