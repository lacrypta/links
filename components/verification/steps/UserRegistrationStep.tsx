import { CheckIcon, LockOpenIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import Spinner from "../spinner";
import { createUser } from "../../../lib/users";
import { useConfig } from "../../../contexts/Config";
import { UserData } from "../../../types/request";
import Wallet from "../widgets/wallet";
import Button from "../button";
import { useVerification } from "../../../contexts/Verification";

interface UserRegistrationStepProps {
  next: () => void;
}

export const UserRegistrationStep = ({ next }: UserRegistrationStepProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const { userData, setUserData } = useVerification();

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

export default UserRegistrationStep;
