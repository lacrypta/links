import { useEffect, useState } from "react";
import Spinner from "../spinner";
import { createUser } from "../../../lib/users";
import { useConfig } from "../../../contexts/Config";
import { useVerification } from "../../../contexts/Verification";
import { useAccount } from "../../../contexts/Account";

interface UserSignupStepProps {
  next: () => void;
}

export const UserSignupStep = ({ next }: UserSignupStepProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const { setOtToken } = useVerification();
  const { setUserData } = useAccount();

  const { provider } = useConfig();

  useEffect(() => {
    if (!provider) {
      setError("No provider");
      setIsLoading(false);
      return;
    }

    setError(undefined);
    createUser(provider.getUsername(), provider.getType())
      .then((data) => {
        setUserData(data as any);
        setOtToken(data.nextOtToken as string);
        next();
      })
      .catch((e) => {
        setError((e as Error).message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          {error && <div>{error}</div>}
          {isLoading && (
            <div className='flex flex-col justify-center items-center space-y-5'>
              <Spinner className='w-32 h-32' />
              <div>Se esta creando tu usuario...</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserSignupStep;
