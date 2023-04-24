import { LockOpenIcon } from "@heroicons/react/20/solid";
import { useCallback } from "react";

interface CongratulationsStepProps {
  username: string;
}

export const CongratulationsStep = ({ username }: CongratulationsStepProps) => {
  const redirect = useCallback(() => {
    alert("Yendooo");
  }, []);

  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          <h4 className='mt-3 mb-4 text-2xl text-center'>Felicitaciones</h4>

          <div>Ya tenes listo tu usuario</div>
        </div>
      </div>

      <div className='mt-4 text-center relative'>
        <button
          type='button'
          className='my-4 inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-blue-100 px-6 py-4 text-md font-medium text-blue-900/50 hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          onClick={redirect}
        >
          <LockOpenIcon className='text-blue-900/50' width={20} height={20} />
          <span>Ir a mi página</span>
        </button>
      </div>
    </>
  );
};

export default CongratulationsStep;
