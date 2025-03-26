"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TambahOperasi from "../JadwalOperasiUi/DoctorForm"; // Sesuaikan path jika diperlukan

const ModalFormInputDokter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button 
        onClick={openModal} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full"
      >
        Tambah Operasi
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative bg-slate-900 rounded-lg shadow-lg p-6 w-full max-w-4xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Mencegah penutupan modal saat mengklik konten
            >
              <TambahOperasi />
              <button 
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl font-bold"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalFormInputDokter;
