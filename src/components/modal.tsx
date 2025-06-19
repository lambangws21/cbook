"use client";

import React from "react";
import Modal from "react-modal";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}

const defaultModalClass =
  "relative border border-white shadow-xl bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl p-6 w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto";

const defaultOverlayClass =
  "fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50";

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
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      ariaHideApp={false}
      className={className || defaultModalClass}
      overlayClassName={overlayClassName || defaultOverlayClass}
    >
      {/* Tombol keluar (kanan atas) */}
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-500 transition-colors"
        aria-label="Close modal"
      >
        <X size={20} />
      </button>

      {/* Konten modal */}
      {children}
    </Modal>
  );
};

export default CustomModal;
