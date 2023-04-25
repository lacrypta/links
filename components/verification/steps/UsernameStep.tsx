import { BoltIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";
import Button from "../button";
import { useState } from "react";

interface UsernameStepProps {
  next: (_username: string) => void;
}

export const UsernameStep = ({ next }: UsernameStepProps) => {
  const [username, setUsername] = useState<string>("");
  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          <h4 className='mt-3 mb-4 text-2xl text-center'>
            Seleccioná el usuario
          </h4>

          <div className='mb-6'>
            <input
              type='text'
              onChange={(e) => setUsername(e.target.value)}
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
                <BoltIcon width={20} height={20} className='text-yellow-300' />
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
          onClick={() => next(username)}
          label='Registrar'
          prefix={
            <CheckBadgeIcon
              className='text-blue-900/50'
              width={20}
              height={20}
            />
          }
        />
      </div>
    </>
  );
};

export default UsernameStep;
