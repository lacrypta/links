import React, { useCallback, useState } from "react";
import VerificationModal from "../components/modals/VerificationModal";

const VerificationContext = React.createContext({
  showModal: () => {},
});

interface VerificationProviderProps {
  children: React.ReactNode;
}

export const VerificationProvider = ({
  children,
}: VerificationProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <VerificationContext.Provider value={{ showModal }}>
      {children}
      <VerificationModal isOpen={isOpen} onClose={closeModal} />
    </VerificationContext.Provider>
  );
};

export const useVerification = () => React.useContext(VerificationContext);
