import { CheckIcon } from "@heroicons/react/20/solid";
import { useCallback, useEffect, useState } from "react";
import { createWallet } from "../../../lib/users";
import LndHubUrl from "./WalletSteps/LndHubUrl";
import { useAccount } from "../../../contexts/Account";
import { useVerification } from "../../../contexts/Verification";
import { Wallet as WalletType } from "../../../types/wallet";
import CreationSpinner from "./WalletSteps/CreationSpinner";
import ChooseConector from "./WalletSteps/ChooseConnector";
import ChooseLndHub from "./WalletSteps/ChooseLndHub";
import { useWallet } from "../../../contexts/Wallet";
import Button from "../button";

interface WalletConfigStepProps {
  next: () => void;
}

export const WalletConfigStep = ({ next }: WalletConfigStepProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const { walletData, setWalletData } = useWallet();
  const { userData: user } = useAccount();
  const { otToken, setOtToken } = useVerification();
  const [albyStep, setAlbyStep] = useState<number>(0);

  useEffect(() => {
    if (window.webln) {
      next();
      return;
    }
    setError(undefined);
    createWallet(otToken as string)
      .then((_walletData) => {
        setWalletData(_walletData);
        setOtToken(_walletData.nextOtToken);
      })
      .catch((e) => {
        setError((e as Error).message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.webln]);

  const nextAlbyStep = useCallback(() => {
    setAlbyStep((c) => ++c);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderStepComponent = useCallback(() => {
    switch (albyStep) {
      case 0:
        return <ChooseConector next={nextAlbyStep} />;
      case 1:
        return <ChooseLndHub next={nextAlbyStep} />;
      case 2:
        return (
          <LndHubUrl next={nextAlbyStep} data={walletData as WalletType} />
        );
      case 3:
        return (
          <Button label='Refrescar' onClick={() => window.location.reload()} />
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albyStep, walletData]);

  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          {error && <div>{error}</div>}
          {isLoading ? (
            <CreationSpinner />
          ) : (
            walletData && renderStepComponent()
          )}
        </div>
      </div>
    </>
  );
};

export default WalletConfigStep;
