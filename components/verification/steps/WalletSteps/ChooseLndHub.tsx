import Image from "next/image";
import picture from "../../../../public/images/screencaps/alby/2.png";
import Button from "../../button";

interface ChooseLndHubProps {
  next: () => void;
}

export const ChooseLndHub = ({ next }: ChooseLndHubProps) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <div>Seleccioná el ícono de LNDHUB</div>
      <Image src={picture} alt='wallet' />

      <Button onClick={next} label='Siguiente' />
    </div>
  );
};

export default ChooseLndHub;
