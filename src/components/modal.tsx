"use client";

import React from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}

const defaultModalClass =
  "modal-content border-2 border-white shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300/20 p-5 rounded-lg w-auto";
const defaultOverlayClass =
  "modal-overlay flex justify-center items-center bg-black bg-opacity-50";

// Komponen CustomModal dengan tampilan yang clean dan opsi kustomisasi kelas
const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
  className,
  overlayClassName,
}) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className={className || defaultModalClass}
      overlayClassName={overlayClassName || defaultOverlayClass}
    >
      {/* Elemen dekoratif background (opsional) */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-slate-300/55 blur-3xl p-5 rounded-lg"></div>
      </div>
      {children}
    </Modal>
  );
};

export default CustomModal;
