import Image from "next/image";
import picture from "../../../../public/images/screencaps/alby/1.png";
import Button from "../../button";

interface ChooseConectorProps {
  next: () => void;
}

export const ChooseConector = ({ next }: ChooseConectorProps) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <div>Instalá la extensión ALBY</div>

      <Button
        onClick={() =>
          window.open(
            "https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe",
            "_blank"
          )
        }
        label='Instalar Alby'
      />

      <Image src={picture} alt='wallet' />

      <Button onClick={next} label='Siguiente' />
    </div>
  );
};

export default ChooseConector;
