"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "../Badge";
import { OperationRecord } from "@/types/mobile";

interface DataCardProps {
  data: Record<string, OperationRecord[]>;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  return isNaN(date.getTime())
    ? dateString
    : `${String(date.getDate()).padStart(2, "0")} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

const DataCard: React.FC<DataCardProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
    >
      {Object.entries(data).map(([sheetName, records]) => (
        <div key={sheetName} className="w-full">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{sheetName}</h2>
          <div className="flex flex-col gap-4">
            {records.map((item, index) => (
              <motion.div
                key={`${sheetName}-${item.no}-${index}`}
                className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Badge text={`Tanggal: ${formatDate(item.date)}`} color="bg-green-500" className="mb-3" />
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p><span className="font-semibold">Pasien:</span> {item.namaPasien}</p>
                  <p><span className="font-semibold">Rekam Medis:</span> {item.nomorRekamMedis}</p>
                  <p><span className="font-semibold">Dokter:</span> {item.namaDokter}</p>
                  <p><span className="font-semibold">Bius:</span> {item.jenisBius}</p>
                  <p><span className="font-semibold">Tindakan:</span> {item.tindakanOperasi}</p>
                  <p><span className="font-semibold">Perawat:</span> {item.teamOperasi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default DataCard;
