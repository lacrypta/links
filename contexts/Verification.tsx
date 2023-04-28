import React, { useCallback, useState } from "react";
import VerificationModal from "../components/verification/VerificationModal";
import { UserData } from "../types/request";

interface VerificationContextProps {
  step: number;
  userData?: UserData;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  showModal: (step?: number) => void;
  setUserData: React.Dispatch<React.SetStateAction<UserData | undefined>>;
}

const VerificationContext = React.createContext<VerificationContextProps>({
  step: 0,
  setStep: () => {},
  showModal: (_step?: number) => {},
  setUserData: () => {},
});

interface VerificationProviderProps {
  children: React.ReactNode;
}

export const VerificationProvider = ({
  children,
}: VerificationProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startingStep, setStartingStep] = useState(0);

  const [step, setStep] = useState(startingStep);

  const [userData, setUserData] = useState<UserData | undefined>();

  const showModal = useCallback((step: number = 0) => {
    setStartingStep(step);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <VerificationContext.Provider
      value={{ step, userData, setStep, showModal, setUserData }}
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
