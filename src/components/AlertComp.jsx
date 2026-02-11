
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";

import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function AlertComp({ openModal, handleClose }) {
    return (
        <>
            <Modal dismissible show={openModal} onClose={handleClose}>
                <ModalHeader />
                <ModalBody>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-green-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-green-500 dark:text-gray-400">
                            Pembayaran Berhasil Dilakukan!
                        </h3>
                        <div className="flex justify-center gap-4">
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}