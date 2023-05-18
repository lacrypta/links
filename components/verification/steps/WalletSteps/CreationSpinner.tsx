import Spinner from "../../spinner";

export const CreationSpinner = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <Spinner className='w-32 h-32' />
      <div>Se esta creando tu wallet</div>
    </div>
  );
};

export default CreationSpinner;
