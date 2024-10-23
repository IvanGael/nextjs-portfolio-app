import React, { FC, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

interface IframeLoaderProps {
    url: string;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
}

const IframeLoader: FC<IframeLoaderProps> = ({ url, modalOpen, setModalOpen }) => {
    const [loading, setLoading] = useState(true);

    return (
        <Transition show={modalOpen} as={Fragment}>
            <Dialog onClose={() => setModalOpen(false)}>
                {/* Modal backdrop */}
                <Transition.Child
                    className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    aria-hidden="true"
                />

                {/* Modal dialog */}
                <Transition.Child
                    className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-out duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="max-w-6xl mx-auto h-full flex items-center">
                        <Dialog.Panel className="w-full max-h-[150vh] aspect-video bg-white overflow-hidden relative">
                            {loading && (
                                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80">
                                    <p>Loading...</p>
                                </div>
                            )}
                            <div className="w-full h-full overflow-auto p-30">
                                <iframe
                                    src={url}
                                    onLoad={() => setLoading(false)}
                                    style={{ width: '150vh', height: '150vh', border: 'none' }}
                                    title="iframe-content"
                                />
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default IframeLoader;