import {
  LockOpenIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useCallback } from "react";
import type { ProviderType } from "../../../types/provider";
import UsernameSetup from "../providers/github/UsernameSetup";

interface InstructionsStepProps {
  username: string;
  next: () => void;
}

const providerComponents: { [key in ProviderType]: any } = {
  github: () => UsernameSetup,
};

export const InstructionsStep = ({ username, next }: InstructionsStepProps) => {
  const ProviderInstructions = providerComponents["github"]({});

  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          <h4 className='mt-3 mb-4 text-2xl text-center'>
            Completá la verificación
          </h4>

          <ProviderInstructions username={username} />
        </div>
      </div>

      <div className='mt-4 text-center relative'>
        <button
          type='button'
          className='my-4 inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-blue-100 px-6 py-4 text-md font-medium text-blue-900/50 hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          onClick={next}
        >
          <MagnifyingGlassIcon
            className='text-blue-900/50'
            width={20}
            height={20}
          />
          <span>Verificar</span>
        </button>
      </div>
    </>
  );
};

export default InstructionsStep;
