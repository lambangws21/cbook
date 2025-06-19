"use client";

import { useState } from "react";
import InputField from "../InputField";
import AnimatedSelect from "../AnimatedSelect";

export default function FormInputDokter() {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [role, setRole] = useState("Dokter");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!file) {
      setMessage("❌ Silakan pilih gambar.");
      setLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = (reader.result as string).split(",")[1];

      const payload =
        role === "Dokter"
          ? {
              targetSheet: "Sheet5",
              "Data Dokter": name,
              spesialis: profile,
              base64Image,
            }
          : {
              targetSheet: "Sheet6",
              "Data Perawat": name,
              spesialis: profile,
              base64Image,
            };

      try {
        const res = await fetch("/api/dataDokter/dokter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (data.success) {
          setMessage("✅ Data berhasil ditambahkan!");
          setName("");
          setProfile("");
          setFile(null);
        } else {
          setMessage("❌ Gagal menambahkan data.");
        }
      } catch (error) {
        setMessage("❌ Error saat mengirim data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 md:p-8 bg-white dark:bg-slate-900 border dark:border-slate-700 rounded-2xl shadow-xl max-w-lg mx-auto space-y-5"
    >
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white text-center">
        Tambah Data Staff
      </h2>

      <InputField
        label="Nama"
        type="text"
        name="name"
        placeholder="Masukkan Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <InputField
        label="Profil Singkat"
        type="text"
        name="profilSingkat"
        placeholder="Masukkan Profil Singkat"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
        required
      />

      <AnimatedSelect
        id="role"
        label="Pilih Tipe"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        options={[
          { label: "Dokter", value: "Dokter" },
          { label: "Perawat", value: "Perawat" },
        ]}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Upload Foto
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700
            cursor-pointer"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-all"
      >
        {loading ? "Menyimpan..." : "Simpan Data"}
      </button>

      {message && (
        <p
          className={`text-center text-sm font-medium ${
            message.includes("✅") ? "text-green-500" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
