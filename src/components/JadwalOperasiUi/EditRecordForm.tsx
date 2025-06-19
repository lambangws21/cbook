"use client";

import React, { useState } from "react";
import { OperationRecord } from "@/types/mobile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface EditRecordFormProps {
  record: OperationRecord;
  targetSheet: string;
  onUpdate: () => void;
  onClose: () => void;
}

const EditRecordForm: React.FC<EditRecordFormProps> = ({
  record,
  targetSheet,
  onUpdate,
  onClose,
}) => {
  const [formData, setFormData] = useState<OperationRecord>(record);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/dataDokter/dokter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          methodOverride: "PUT",
          targetSheet,
          ...formData,
        }),
      });
      const result = await res.json();
      setLoading(false);

      if (result.success) {
        toast.success(`Record no ${formData.no} berhasil diperbarui.`);
        onUpdate();
        onClose();
      } else {
        toast.error(`Gagal update: ${result.error}`);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error updating record:", error);
      toast.error("Error updating record");
    }
  };

  const inputClass =
    "bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-sm rounded px-3 py-2 w-full text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="p-4 rounded-lg shadow-md bg-white dark:bg-slate-900">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Edit Record</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {[
          { label: "Date", name: "date" },
          { label: "Nama Pasien", name: "namaPasien" },
          { label: "Nomor Rekam Medis", name: "nomorRekamMedis" },
          { label: "Nama Dokter", name: "namaDokter" },
          { label: "Jenis Bius", name: "jenisBius" },
          { label: "Jaminan Operasi", name: "jaminanOperasi" },
          { label: "Tindakan Operasi", name: "tindakanOperasi" },
          { label: "Team Operasi", name: "teamOperasi" },
          { label: "Ruang Operasi", name: "ruangOperasi" },
          { label: "Status", name: "status" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              {field.label}:
            </label>
            <input
              type="text"
              name={field.name}
              value={(formData as any)[field.name] || ""}
              onChange={handleChange}
              className={inputClass}
              placeholder={field.label}
            />
          </div>
        ))}

        <div className="flex justify-end gap-2 mt-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded shadow"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecordForm;