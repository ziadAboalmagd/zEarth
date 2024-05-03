import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Rimage(props: {
  fullC: React.JSX.Element;
  component: React.JSX.Element;
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal(e: any) {
    if (e.target.tagName !== "IMG") {
      setIsOpen(false);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div onClick={openModal}>{props.component}</div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-f-backgroud/70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto" dir="rtl">
            <div
              className="flex w-full min-h-full items-center justify-center p-4 text-center"
              dir="rtl"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform text-left align-middle transition-all">
                  <div className="relative -rotate-90" onClick={closeModal}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
                      {props.fullC}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
