import { BoltIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";
import Button from "../button";
import { useCallback, useEffect, useState } from "react";
import { isUsernameAvailable } from "../../../lib/users";

interface UsernameStepProps {
  next: (_username: string) => void;
}

export const UsernameStep = ({ next }: UsernameStepProps) => {
  const [username, setUsername] = useState<string>("");
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [isValid, setIsValid] = useState<boolean>(false);

  const updateUsername = useCallback(
    (value: string) => {
      setUsername(value);
      timer && clearTimeout(timer);
      setIsValid(false);
      const _timer = setTimeout(() => {
        checkValidUsername(value);
      }, 500);

      setTimer(_timer);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [timer]
  );

  const checkValidUsername = useCallback(async (username: string) => {
    setIsValid(await isUsernameAvailable(username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      <form onSubmit={() => next(username)}>
        <div className='mt-2 relative'>
          <div className='text-gray-500'>
            <h4 className='mt-3 mb-4 text-2xl text-center'>
              Seleccioná el usuario
            </h4>

            <div className='mb-6'>
              <input
                type='text'
                onChange={(e) => updateUsername(e.target.value)}
                value={username}
                className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            {username.length > 0 && (
              <div className='flex flex-col justify-center items-center space-y-3'>
                <div className='flex flex-row items-center space-x-1'>
                  <CheckBadgeIcon
                    width={20}
                    height={20}
                    className='text-blue-400'
                  />
                  <span>
                    <b>{username}</b>.hodl.ar{" "}
                  </span>
                </div>
                <div className='flex flex-row items-center space-x-1'>
                  <BoltIcon
                    width={20}
                    height={20}
                    className='text-yellow-300'
                  />
                  <span>
                    <b>{username}</b>@hodl.ar{" "}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='mt-4 flex flex-row space-x-2 justify-center relative'>
          <Button
            label='Registrar'
            type='submit'
            disabled={!isValid}
            prefix={
              <CheckBadgeIcon
                className='text-blue-900/50'
                width={20}
                height={20}
              />
            }
          />
        </div>
      </form>
    </>
  );
};

export default UsernameStep;
