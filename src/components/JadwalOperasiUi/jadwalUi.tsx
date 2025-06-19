"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import CardUi from "../JadwalOperasiUi/AvatarStaff";
import CombinedStaffDataCard from "../JadwalOperasiUi/OperationRecaordCard";
import TambahOperasi from "../JadwalOperasiUi/ModalTambahOperasi";
import EditOperasi from "../ModalComponent";
import { OperationRecord } from "@/types/mobile";
import ModalFormInputDokter from "../JadwalOperasiUi/ModalButton";

interface FetchResponse {
  status: string;
  data?: Record<string, OperationRecord[]>;
}

const UiPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, OperationRecord[]>>({});

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/dataDokter/dokter");
      const json = (await res.json()) as FetchResponse;
      if (json.status === "success" && json.data) {
        setData(json.data);
      } else {
        setData({});
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData({});
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen bg-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-12 w-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          <p className="mt-4 text-white text-sm">Memuat data operasi...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-slate-900 text-white py-6 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-full mx-auto">
        {/* Tombol Aksi */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center text-base">
          <div className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg shadow-md transition-all">
            <ModalFormInputDokter />
          </div>
          <div className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg shadow-md transition-all">
            <TambahOperasi />
          </div>
          <div className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg shadow-md transition-all">
            <EditOperasi />
          </div>
        </div>

        {/* Konten */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Konten Utama */}
          <motion.div
            className="w-full md:w-3/4 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CombinedStaffDataCard data={data} />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="w-full md:w-1/4 space-y-6 md:sticky md:top-6 h-fit"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardUi />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UiPage;