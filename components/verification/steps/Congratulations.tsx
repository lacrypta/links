import { LockOpenIcon } from "@heroicons/react/20/solid";
import { useCallback } from "react";
import Button from "../button";
import { useVerification } from "../../../contexts/Verification";

interface CongratulationsStepProps {
  username: string;
}

const domain = process.env.NEXT_PUBLIC_DOMAIN_REDIRECT || "localhost:3001";
export const CongratulationsStep = ({ username }: CongratulationsStepProps) => {
  const { otToken } = useVerification();
  const redirect = useCallback(() => {
    window.location.href = `//${username}.${domain}/verify/${otToken}`;
  }, [username, otToken]);

  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          <h4 className='mt-3 mb-4 text-2xl text-center'>Felicitaciones</h4>

          <div>Ya tenes listo tu usuario</div>
        </div>
      </div>

      <div className='mt-4 text-center relative'>
        <Button
          onClick={redirect}
          label='Ir a mi página'
          prefix={
            <LockOpenIcon className='text-blue-900/50' width={20} height={20} />
          }
        />
      </div>
    </>
  );
};

export default CongratulationsStep;
