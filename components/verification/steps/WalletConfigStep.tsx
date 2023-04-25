import { LockOpenIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import Spinner from "../spinner";
import { createUser } from "../../../lib/users";
import { useConfig } from "../../../contexts/Config";
import { ConfigProvider } from "../../../providers/abstract";
import { ProviderType } from "../../../types/provider";
import { UserData } from "../../../types/request";
import Wallet from "../widgets/wallet";

interface WalletConfigStepProps {
  username: string;
  next: (_username: string) => void;
}

export const WalletConfigStep = ({ next }: WalletConfigStepProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [userData, setUserData] = useState<UserData | undefined>();

  const { provider } = useConfig();

  useEffect(() => {
    if (!provider) {
      setError("No provider");
      setIsLoading(false);
      return;
    }

    setError(undefined);
    createUser(provider.getUsername(), provider.getType())
      .then(setUserData)
      .catch((e) => {
        setError((e as Error).message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [provider]);

  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          <h4 className='mt-3 mb-4 text-2xl text-center'>Creación de Wallet</h4>
          {error && <div>{error}</div>}
          {isLoading ? (
            <div className='flex flex-col justify-center items-center space-y-5'>
              <Spinner className='w-32 h-32' />
              <div>Se esta creando tu wallet</div>
            </div>
          ) : (
            userData && <Wallet user={userData} />
          )}
        </div>
      </div>

      {userData && (
        <div className='mt-4 text-center relative'>
          <button
            type='button'
            className='my-4 inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-blue-100 px-6 py-4 text-md font-medium text-blue-900/50 hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            onClick={() => next}
          >
            <LockOpenIcon className='text-blue-900/50' width={20} height={20} />
            <span>Finalizar</span>
          </button>
        </div>
      )}
    </>
  );
};

export default WalletConfigStep;
