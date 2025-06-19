"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SheetSelector from "./JadwalOperasiUi/SheetSelector";
import { X } from "lucide-react"; // Pastikan kamu sudah install lucide-react

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-500"
              aria-label="Tutup modal"
            >
              <X size={20} />
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ExampleComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 text-center">
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full shadow transition duration-300"
      >
        Edit Jadwal Operasi
      </button>

      <MyModal isOpen={isModalOpen} onClose={closeModal}>
        <SheetSelector />
      </MyModal>
    </div>
  );
};

export default ExampleComponent;
