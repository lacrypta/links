interface ExtensionSetupStepProps {
  //   username: string;
}

const domain = process.env.NEXT_PUBLIC_DOMAIN_REDIRECT || "localhost:3001";
export const ExtensionSetupStep = ({}: ExtensionSetupStepProps) => {
  return (
    <>
      <div className='mt-2 relative'>
        <div className='text-gray-500'>
          <h4 className='mt-3 mb-4 text-2xl text-center'>Extensión</h4>

          <div>Bajate Alby</div>
        </div>
      </div>
    </>
  );
};

export default ExtensionSetupStep;
