import { CheckIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { createWallet } from "../../../lib/users";
import LndHubUrl from "./WalletSteps/LndHubUrl";
import Button from "../button";
import { useAccount } from "../../../contexts/Account";
import { useVerification } from "../../../contexts/Verification";
import { Wallet as WalletType } from "../../../types/wallet";
import CreationSpinner from "./WalletSteps/CreationSpinner";

interface WalletConfigStepProps {
  next: () => void;
}

export const WalletConfigStep = ({ next }: WalletConfigStepProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [walletData, setWalletData] = useState<WalletType | undefined>();
  const { userData: user } = useAccount();
  const { otToken } = useVerification();

  useEffect(() => {
    if (window.webln) {
      next();
      return;
    }
    setError(undefined);
    createWallet(user?.id as string, otToken as string)
      .then(setWalletData)
      .catch((e) => {
        setError((e as Error).message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.webln]);

  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          {error && <div>{error}</div>}
          {isLoading ? (
            <CreationSpinner />
          ) : (
            walletData && <LndHubUrl data={walletData} />
          )}
        </div>
      </div>

      {walletData && (
        <div className='mt-4 text-center relative'>
          <Button
            label='Finalizar'
            type='button'
            prefix={
              <CheckIcon className='text-blue-900/50' width={20} height={20} />
            }
            onClick={() => next()}
          />
        </div>
      )}
    </>
  );
};

export default WalletConfigStep;
