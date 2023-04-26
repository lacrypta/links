import { Dialog, Transition } from "@headlessui/react";
import { CheckBadgeIcon, LockOpenIcon } from "@heroicons/react/20/solid";
import { Fragment, useCallback, useEffect, useState } from "react";
import { WelcomeStep } from "./steps/WelcomeStep";
import UsernameStep from "./steps/UsernameStep";
import InstructionsStep from "./steps/InstructionsStep";
import CongratulationsStep from "./steps/Congratulations";
import WalletConfigStep from "./steps/WalletConfigStep";
import ExtensionSetupStep from "./steps/ExtensionSetup";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  startingStep: number;
}

export const VerificationModal = ({
  isOpen,
  onClose,
  startingStep,
}: VerificationModalProps) => {
  const [step, setStep] = useState(startingStep);
  const [username, setUsername] = useState("");

  const closeModal = useCallback(() => {
    setTimeout(() => {
      setStep(startingStep);
    }, 300);

    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = useCallback(() => {
    setStep((c) => ++c);
  }, []);

  const assignUsername = useCallback((username: string) => {
    setUsername(username);
    next();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStep(startingStep);
  }, [startingStep]);

  const renderStepComponent = useCallback(() => {
    switch (step) {
      case 0:
        return <WelcomeStep next={next} />;
      case 1:
        return <UsernameStep next={assignUsername} />;
      case 2:
        return <InstructionsStep username={username} next={next} />;
      case 3:
        return <WalletConfigStep next={next} />;
      case 4:
        return <CongratulationsStep username={username} />;
      case 5:
        return <ExtensionSetupStep />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, step, next]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center z-20 rleative'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-14 py-3 text-left align-middle shadow-xl transition-all'>
                <div className='absolute -top-1/4 left-1/3 opacity-5 text-blue-900'>
                  <CheckBadgeIcon width={400} height={400} />
                </div>
                <Dialog.Title
                  as='h3'
                  className='font-medium text-3xl leading-6 text-gray-900 text-center mb-5 mt-6 relative'
                >
                  Verificación
                </Dialog.Title>
                {renderStepComponent()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VerificationModal;
