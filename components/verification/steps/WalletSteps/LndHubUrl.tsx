import { Wallet as WalletType } from "../../../../types/wallet";
import Button from "../../button";
import Image from "next/image";
import picture from "../../../../public/images/screencaps/alby/3.png";

interface WalletProps {
  data: WalletType;
  next: () => void;
}

export const LndHubUrl = ({ data, next }: WalletProps) => {
  const { lndhub } = data;

  const lnhubUrl = `lndhub://${lndhub.login}:${lndhub.password}@${lndhub.url}`;
  return (
    <div className='flex flex-col justify-center mt-4'>
      <div>Copiá y pegá esta dirección</div>
      <textarea
        className='w-full border-gray-500 border text-sm p-2'
        value={lnhubUrl}
      />
      <Image src={picture} alt='wallet' />

      <Button onClick={next} label='Siguiente' />
    </div>
  );
};

export default LndHubUrl;
