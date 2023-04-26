import React, { useCallback, useState } from "react";
import VerificationModal from "../components/verification/VerificationModal";

const VerificationContext = React.createContext({
  showModal: (_step?: number) => {},
});

interface VerificationProviderProps {
  children: React.ReactNode;
}

export const VerificationProvider = ({
  children,
}: VerificationProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startingStep, setStartingStep] = useState(0);

  const showModal = useCallback((step: number = 0) => {
    console.info("STEP: ", step);
    setStartingStep(step);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <VerificationContext.Provider value={{ showModal }}>
      {children}
      <VerificationModal
        isOpen={isOpen}
        onClose={closeModal}
        startingStep={startingStep}
      />
    </VerificationContext.Provider>
  );
};

export const useVerification = () => React.useContext(VerificationContext);
