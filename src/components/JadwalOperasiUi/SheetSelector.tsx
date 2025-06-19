"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DataCard from "../JadwalOperasiUi/DataCard";
import DataCardSingle from "../JadwalOperasiUi/DataCardSingle";
import EditRecordForm from "../JadwalOperasiUi/EditRecordForm";
import { OperationRecord } from "@/types/mobile";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmModal from "../JadwalOperasiUi/ConfirmModal";

interface FetchResponse {
  status: string;
  data: Record<string, OperationRecord[]>;
  error?: string;
}

const SheetSelector: React.FC = () => {
  const [selectedSheet, setSelectedSheet] = useState("all");
  const [data, setData] = useState<Record<string, OperationRecord[]>>({});
  const [loading, setLoading] = useState(true);
  const [editingRecord, setEditingRecord] = useState<OperationRecord | null>(null);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState<OperationRecord | null>(null);

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

  const handleSheetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSheet(e.target.value);
  };

  const handleEdit = (record: OperationRecord) => {
    if (selectedSheet === "all") {
      toast.error("Pilih sheet spesifik untuk melakukan edit.");
      return;
    }
    setEditingRecord(record);
  };

  const handleDelete = (record: OperationRecord) => {
    if (selectedSheet === "all") {
      toast.error("Pilih sheet spesifik untuk melakukan delete.");
      return;
    }
    setRecordToDelete(record);
    setConfirmModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!recordToDelete) return;
    try {
      const res = await fetch("/api/dataDokter/delput", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          methodOverride: "DELETE",
          no: recordToDelete.no,
          targetSheet: selectedSheet,
        }),
      });
      const text = (await res.text()).trim();
      const result = text ? JSON.parse(text) : {};
      if (result.status === "success") {
        toast.success(`Berhasil menghapus ${recordToDelete.namaPasien} dari dokter ${recordToDelete.namaDokter}.`);
        fetchData();
      } else {
        toast.error(`Gagal menghapus: ${result.error || result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Error deleting record");
    } finally {
      setConfirmModalOpen(false);
      setRecordToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setConfirmModalOpen(false);
    setRecordToDelete(null);
  };

  if (loading) return <p className="text-center py-4">Loading data...</p>;

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="mb-4">
        <label htmlFor="sheetSelect" className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Pilih Sheet:</label>
        <select
          id="sheetSelect"
          value={selectedSheet}
          onChange={handleSheetChange}
          className="border p-2 rounded w-full sm:w-64 bg-white dark:bg-slate-800 text-black dark:text-white"
        >
          <option value="all">Semua Sheet</option>
          <option value="Sheet1">Sheet1</option>
          <option value="Sheet2">Sheet2</option>
          <option value="Sheet3">Sheet3</option>
          <option value="Sheet4">Sheet4</option>
        </select>
      </div>

      {selectedSheet === "all" ? (
        <DataCard data={data} />
      ) : (
        <div className="overflow-x-auto">
          <DataCardSingle sheetName={selectedSheet} records={data[selectedSheet] || []} />
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Aksi Update & Delete (Sheet: {selectedSheet})</h2>
            <motion.table className="w-full table-auto border-collapse" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <thead className="bg-gray-100 dark:bg-slate-700 text-sm">
                <tr>
                  <th className="border px-2 py-1">Date</th>
                  <th className="border px-2 py-1">Nama Pasien</th>
                  <th className="border px-2 py-1">No RM</th>
                  <th className="border px-2 py-1">Jaminan</th>
                  <th className="border px-2 py-1">Dokter</th>
                  <th className="border px-2 py-1">Bius</th>
                  <th className="border px-2 py-1">Ruang</th>
                  <th className="border px-2 py-1">Operasi</th>
                  <th className="border px-2 py-1">Team</th>
                  <th className="border px-2 py-1">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {(data[selectedSheet] || []).map((rec, index) => (
                  <motion.tr
                    key={`sheet-specific-${rec.no}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                  >
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.date}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.namaPasien}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.nomorRekamMedis}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.jaminanOperasi}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.namaDokter}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.jenisBius}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.tindakanOperasi}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.ruangOperasi}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{rec.teamOperasi}</td>
                    <td className="border px-2 py-1 flex gap-2 justify-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded" onClick={() => handleEdit(rec)}>Edit</button>
                      <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded" onClick={() => handleDelete(rec)}>Hapus</button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      )}

      <AnimatePresence>
        {editingRecord && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-2">
            <motion.div
              className="relative bg-white dark:bg-slate-900 p-4 rounded-lg shadow-lg w-full max-w-xl mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EditRecordForm
                record={editingRecord}
                targetSheet={selectedSheet}
                onUpdate={fetchData}
                onClose={() => setEditingRecord(null)}
              />
              <button
                onClick={() => setEditingRecord(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              >
                &times;
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ConfirmModal
        isOpen={confirmModalOpen}
        title="Konfirmasi Hapus"
        message={`Apakah Anda yakin akan menghapus ${recordToDelete?.namaPasien || ""} pasien ${recordToDelete?.namaDokter || ""}?`}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

      <ToastContainer />
    </div>
  );
};

export default SheetSelector;