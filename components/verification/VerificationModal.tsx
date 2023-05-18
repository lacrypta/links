import { Dialog, Transition } from "@headlessui/react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { Fragment, useCallback, useEffect, useState } from "react";
import { WelcomeStep } from "./steps/WelcomeStep";
import UsernameStep from "./steps/UsernameStep";
import NostrConfigStep from "./steps/NostrConfigStep";
import CongratulationsStep from "./steps/Congratulations";
import WalletConfigStep from "./steps/WalletConfigStep";
import ExtensionSetupStep from "./steps/ExtensionSetup";
import { useVerification } from "../../contexts/Verification";
import NostrStep from "./steps/NostrStep";
import UserSignupStep from "./steps/UserSignupStep";

interface VerificationModalProps {
  isOpen: boolean;
  startingStep: number;
  onClose: () => void;
}

export const VerificationModal = ({
  isOpen,
  startingStep,
  onClose,
}: VerificationModalProps) => {
  const [username, setUsername] = useState("");
  const { step, setStep } = useVerification();

  const closeModal = useCallback(() => {
    setTimeout(() => {
      setStep(startingStep);
    }, 300);

    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startingStep]);

  const next = useCallback(() => {
    setStep((c) => ++c);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const assignUsername = useCallback((username: string) => {
    setUsername(username);
    next();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStep(startingStep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startingStep]);

  const renderStepComponent = useCallback(() => {
    switch (step) {
      case 0:
        return <WelcomeStep next={next} />;
      case 1:
        return <UsernameStep next={assignUsername} />;
      case 2:
        return <NostrConfigStep username={username} next={next} />;
      case 3:
        return <UserSignupStep next={next} />;
      case 4:
        return <CongratulationsStep username={username} />;
      case 5:
        return <WalletConfigStep next={next} />;
      case 6:
        return <ExtensionSetupStep />;
      case 7:
        return <NostrStep />;
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
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-4 py-3 text-left align-middle shadow-xl transition-all'>
                <div className='absolute -top-1/4 left-1/3 opacity-5 text-blue-900'>
                  <CheckBadgeIcon width={400} height={400} />
                </div>
                <Dialog.Title
                  as='h3'
                  className='font-medium text-3xl leading-6 text-gray-900 text-center mb-5 mt-6 relative z-10'
                >
                  Verificación
                </Dialog.Title>
                <div className='relative z-10'>{renderStepComponent()}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VerificationModal;
