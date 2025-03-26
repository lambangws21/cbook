"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SheetSelector from "./JadwalOperasiUi/SheetSelector";

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Klik di luar modal untuk menutup
        >
          <motion.div 
            className="relative bg-white rounded-lg p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Mencegah klik dalam konten modal menutup modal
          >
            {children}
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
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
    <div className="p-4">
      <button 
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full"
      >
        Edit Operasi
      </button>

      <MyModal isOpen={isModalOpen} onClose={closeModal}>
        <SheetSelector />
      </MyModal>
    </div>
  );
};

export default ExampleComponent;
