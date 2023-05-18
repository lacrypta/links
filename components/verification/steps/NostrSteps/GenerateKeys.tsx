import Image from "next/image";
import picture5 from "../../../../public/images/screencaps/alby/5.png";
import picture6 from "../../../../public/images/screencaps/alby/6.png";
import Button from "../../button";

export const GenerateKeys = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <div>Hacé click en generar claves</div>
      <div>
        <Image src={picture5} alt='wallet' />
      </div>

      <div>Confirmá</div>
      <div>
        <Image src={picture6} alt='wallet' />
      </div>

      <Button
        onClick={() => {
          window.location.reload();
        }}
        label='Refrescar'
      />
    </div>
  );
};

export default GenerateKeys;
