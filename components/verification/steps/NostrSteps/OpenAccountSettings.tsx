import Image from "next/image";
import picture from "../../../../public/images/screencaps/alby/4.png";
import Button from "../../button";

interface OpenAccountSettingsProps {
  next: () => void;
}

export const OpenAccountSettings = ({ next }: OpenAccountSettingsProps) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <div>Hacé click en el rincón arriba a la derecha</div>
      <Image src={picture} alt='wallet' />

      <Button onClick={next} label='Siguiente' />
    </div>
  );
};

export default OpenAccountSettings;
