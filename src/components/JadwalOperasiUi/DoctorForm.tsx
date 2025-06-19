"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../InputField";
import AnimatedSelect from "../AnimatedSelect";

interface DoctorOption {
  id: number;
  name: string;
}

interface OperationFormData {
  date: string;
  namaPasien: string;
  nomorRekamMedis: string;
  namaDokter: string;
  jenisBius: string;
  jaminanOperasi: string;
  tindakanOperasi: string;
  teamOperasi: string;
  ruangOperasi: string;
  status: string;
}

interface StaffItem {
  ID: number;
  "Data Dokter"?: string;
  "Data Perawat"?: string;
  spesialis?: string;
  GoogleDriveID?: string;
  imageUrl?: string;
  role?: string;
}

export default function OperationForm() {
  const [targetSheet, setTargetSheet] = useState<string>("");
  const [formData, setFormData] = useState<OperationFormData>({
    date: "",
    namaPasien: "",
    nomorRekamMedis: "",
    namaDokter: "",
    jenisBius: "",
    jaminanOperasi: "",
    tindakanOperasi: "",
    teamOperasi: "",
    ruangOperasi: "",
    status: "pending",
  });

  const [doctorOptions, setDoctorOptions] = useState<DoctorOption[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("/api/dataDokter/getImages?getImages=true");
        const data: StaffItem[] = await res.json();
        if (Array.isArray(data)) {
          const doctors = data.filter(
            (item) => item.role === "dokter" || item["Data Dokter"]
          );
          setDoctorOptions(
            doctors.map((doc) => ({
              id: doc.ID,
              name: doc["Data Dokter"] || "",
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    if (!formData.namaDokter || !targetSheet) {
      toast.error("Lengkapi semua data yang wajib diisi.");
      setIsSubmitting(false);
      return;
    }

    const payload = { targetSheet, ...formData };

    try {
      const res = await fetch("/api/dataDokter/dokter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setIsSubmitting(false);

      if (data.success) {
        toast.success("✔️ Data berhasil disimpan");
        setResponseMessage("✔️ Data berhasil disimpan");
        setFormData({
          date: "",
          namaPasien: "",
          nomorRekamMedis: "",
          namaDokter: "",
          jenisBius: "",
          jaminanOperasi: "",
          tindakanOperasi: "",
          teamOperasi: "",
          ruangOperasi: "",
          status: "pending",
        });
        setTargetSheet("");
      } else {
        toast.error("❌ " + (data.error || "Terjadi kesalahan"));
        setResponseMessage("❌ " + (data.error || "Terjadi kesalahan"));
      }
    } catch {
      setIsSubmitting(false);
      toast.error("❌ Gagal menyimpan data");
      setResponseMessage("❌ Gagal menyimpan data");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-8 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-gray-900 dark:to-gray-950">
    <div className="w-full max-w-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl shadow-xl p-6 max-h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Form Data Operasi</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatedSelect
            label="Ruang Operasi"
            id="targetSheet"
            value={targetSheet}
            onChange={(e) => setTargetSheet(e.target.value)}
            options={[
              { label: "Pilih Ruang Operasi", value: "" },
              { label: "OR1", value: "Sheet1" },
              { label: "OR2", value: "Sheet2" },
              { label: "OR3", value: "Sheet3" },
              { label: "OR4", value: "Sheet4" },
            ]}
          />

          <InputField label="Tanggal Operasi" name="date" type="date" value={formData.date} onChange={handleChange} required id="date" />
          <InputField label="Nama Pasien" name="namaPasien" value={formData.namaPasien} onChange={handleChange} required id="namaPasien" />
          <InputField label="No Rekam Medis" name="nomorRekamMedis" value={formData.nomorRekamMedis} onChange={handleChange} required id="nomorRekamMedis" />

          {/* Nama Dokter */}
          <div>
            <label htmlFor="namaDokter" className="block text-sm font-medium mb-1">
              Nama Dokter
            </label>
            <select
              id="namaDokter"
              value={formData.namaDokter}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Pilih Dokter</option>
              {doctorOptions.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <InputField label="Jenis Bius" name="jenisBius" value={formData.jenisBius} onChange={handleChange} required id="jenisBius" />
          <InputField label="Jaminan" name="jaminanOperasi" value={formData.jaminanOperasi} onChange={handleChange} required id="jaminanOperasi" />
          <InputField label="Tindakan Operasi" name="tindakanOperasi" value={formData.tindakanOperasi} onChange={handleChange} required id="tindakanOperasi" />
          <InputField label="Team Operasi" name="teamOperasi" value={formData.teamOperasi} onChange={handleChange} required id="teamOperasi" />
          <InputField label="Nama Ruangan" name="ruangOperasi" value={formData.ruangOperasi} onChange={handleChange} required id="ruangOperasi" />

          <AnimatedSelect
            label="Status Operasi"
            id="status"
            value={formData.status}
            onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
            options={[
              { label: "Pending", value: "pending" },
              { label: "Berjalan", value: "berjalan" },
              { label: "Selesai", value: "selesai" },
              { label: "Batal", value: "batal" },
            ]}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            {isSubmitting && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            )}
            {isSubmitting ? "Menyimpan..." : "Simpan Data"}
          </button>

          {responseMessage && (
            <p className="text-center text-sm mt-3 text-green-600 dark:text-green-400">
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
