"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TambahOperasi from "../JadwalOperasiUi/DoctorForm";

const ModalFormInputDokter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="text-center">
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-md"
      >
        + Tambah Operasi
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-2xl w-full max-w-sm mx-4 p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol close */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl font-bold"
                aria-label="Tutup"
              >
                &times;
              </button>

              {/* Header */}
              <h2 className="text-xl font-semibold mb-4 text-center">
                Tambah Jadwal Operasi
              </h2>

              {/* Isi form */}
              <TambahOperasi />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalFormInputDokter;
