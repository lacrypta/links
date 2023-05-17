import React, { useCallback, useState } from "react";
import VerificationModal from "../components/verification/VerificationModal";
import useLocalStorage from "use-local-storage";

interface VerificationContextProps {
  step: number;
  otToken?: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  showModal: (step?: number) => void;
  setOtToken: (_str: string | undefined) => void;
}

const VerificationContext = React.createContext<VerificationContextProps>({
  step: 0,
  setStep: () => {},
  showModal: (_step?: number) => {},
  setOtToken: () => {},
});

interface VerificationProviderProps {
  children: React.ReactNode;
}

export const VerificationProvider = ({
  children,
}: VerificationProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startingStep, setStartingStep] = useState(0);
  const [otToken, setOtToken] = useLocalStorage<string | undefined>(
    "otToken",
    undefined
  );

  const [step, setStep] = useState(startingStep);

  const showModal = useCallback((step: number = 0) => {
    setStartingStep(step);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <VerificationContext.Provider
      value={{
        step,
        otToken,
        setStep,
        showModal,
        setOtToken,
      }}
    >
      {children}
      <VerificationModal
        isOpen={isOpen}
        startingStep={startingStep}
        onClose={closeModal}
      />
    </VerificationContext.Provider>
  );
};

export const useVerification = () => React.useContext(VerificationContext);
