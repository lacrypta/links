import { Dialog, Transition } from "@headlessui/react";
import { CheckBadgeIcon, LockOpenIcon } from "@heroicons/react/20/solid";
import { Fragment, useCallback, useState } from "react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationModal = ({
  isOpen,
  onClose,
}: VerificationModalProps) => {
  const closeModal = useCallback(() => {
    onClose();
  }, []);

  const next = useCallback(() => {
    alert("En construcción");
    onClose();
  }, []);

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
                  className='font-medium text-3xl leading-6 text-gray-900 text-center mb-5 mt-6'
                >
                  Verificación
                </Dialog.Title>
                <div className='mt-2 relative'>
                  <p className='text-gray-500'>
                    <h4 className='mt-3 mb-4 text-2xl text-center'>
                      Vas a recibir
                    </h4>

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
                  </p>
                </div>

                <div className='mt-4 text-center relative'>
                  <button
                    type='button'
                    className='my-4 inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-blue-100 px-6 py-4 text-md font-medium text-blue-900/50 hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={next}
                  >
                    <LockOpenIcon
                      className='text-blue-900/50'
                      width={20}
                      height={20}
                    />
                    <span>Reclamar Verificación</span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VerificationModal;
