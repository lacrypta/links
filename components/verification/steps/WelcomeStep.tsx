import { StarIcon } from "@heroicons/react/20/solid";
import Button from "../button";

interface WelcomeStepProps {
  next: () => void;
}

export const WelcomeStep = ({ next }: WelcomeStepProps) => {
  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          <h4 className='mt-3 mb-4 text-2xl text-center'>Vas a recibir</h4>

          <ul className='flex flex-col space-y-5 text-lg'>
            <li>- Una wallet de Lightning Network (Custodial)</li>
            <li>- Un usuario de NOSTR (Si no tenes uno ya)</li>
            <li>
              - Tu subdominio <b>.hodl.ar</b>
            </li>
            <li>
              <b>- TUNOMBRE</b>@hodl.ar para recibir sats
            </li>
            <li>
              <b>- TUNOMBRE</b>@hodl.ar como usuario en NOSTR
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-4 text-center relative'>
        <Button
          onClick={next}
          label='Reclamar Verificación'
          prefix={
            <StarIcon className='text-blue-900/50' width={20} height={20} />
          }
        />
      </div>
    </>
  );
};

export default WelcomeStep;
