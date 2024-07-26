"use client";

import React, { useState, useEffect } from "react";
import { TanggalUlangTahun } from "@/lib/birthdayTypes"; // Sesuaikan dengan jalur file yang tepat
import { Calendar } from "@/components/ui/calendar"; // Impor komponen kalender
import { format } from "date-fns"; // Impor format dari date-fns untuk memformat tanggal
import { ToastContainer, toast as showToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Data ulang tahun
const birthdays: TanggalUlangTahun[] = [
  { date: new Date(1994, 6, 26), name: "Herlambang Wicaksono", message: "Happy Birthday, Herlambang!" },
  { date: new Date(2024, 7, 26), name: "John Doe", message: "Happy Birthday, John!" },
  { date: new Date(2024, 8, 14), name: "Jane Smith", message: "Happy Birthday, Jane!" },
  // Tambahkan data ulang tahun lainnya di sini
];

interface ToastOptions {
  title: string;
  description: string;
}

export const toast = ({ title, description }: ToastOptions) => {
  showToast.info(
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export const Toaster = () => {
  return <ToastContainer />;
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Fungsi untuk mendapatkan pengingat ulang tahun berdasarkan tanggal yang dipilih
  const getBirthdayReminder = (date: Date | undefined) => {
    if (!date) return null;
    const todayMonthDay = format(date, "MM-dd");
    const birthday = birthdays.find(bd => format(bd.date, "MM-dd") === todayMonthDay);
    return birthday ? `${birthday.message} 🎉` : null;
  };

  // Mengecek ulang tahun setiap kali halaman dimuat
  useEffect(() => {
    const today = new Date();
    const birthdayToday = getBirthdayReminder(today);
    if (birthdayToday) {
      toast({
        title: "Pengingat Ulang Tahun",
        description: birthdayToday,
      });
    }
  }, []);

  return (
    <div>
      <main className="bg-white min-h-screen p-8">
        <Toaster /> {/* Menampilkan toaster untuk pesan ulang tahun */}
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold text-green-600">
            Kamar Bedah OK Carolus
          </h1>
          <p className="text-lg mt-4">
            Selamat Datang di Pusat Pelayanan Bedah Terbaik
          </p>
        </header>

        <section className="my-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-700">Visi Kami</h2>
            <p className="mt-4 text-gray-600">
              Menjadi pusat pelayanan bedah terkemuka yang diakui secara nasional
              dan internasional dalam memberikan perawatan bedah yang komprehensif
              dan inovatif.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-700">Pengingat Ulang Tahun</h2>
            <div className="mt-4">
              <Calendar
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
              {selectedDate && (
                <div className="mt-4 text-center text-lg text-gray-700">
                  {getBirthdayReminder(selectedDate) || "Tidak ada ulang tahun hari ini."}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-700">Misi Kami</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>
              Menyediakan layanan bedah yang berkualitas dengan mengutamakan
              keselamatan dan kenyamanan pasien.
            </li>
            <li>
              Menggunakan teknologi canggih dan metode bedah terkini untuk hasil
              yang optimal.
            </li>
            <li>
              Memberikan pendidikan dan pelatihan berkelanjutan kepada tenaga
              medis untuk meningkatkan kompetensi.
            </li>
            <li>
              Membangun hubungan yang harmonis dengan pasien dan keluarga
              melalui komunikasi yang efektif dan pelayanan yang penuh empati.
            </li>
          </ul>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-700">Layanan Kami</h2>
          <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Bedah Umum</h3>
              <p className="mt-2 text-gray-600">
                Kami menangani berbagai jenis operasi umum dengan teknik minimal
                invasif yang meminimalkan nyeri dan mempercepat pemulihan.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">
                Bedah Ortopedi
              </h3>
              <p className="mt-2 text-gray-600">
                Layanan bedah untuk mengatasi masalah tulang, sendi, dan otot
                dengan pendekatan yang holistik.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Bedah Saraf</h3>
              <p className="mt-2 text-gray-600">
                Tim ahli bedah saraf kami siap memberikan perawatan terbaik
                untuk kondisi neurologis kompleks.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">
                Bedah Plastik dan Rekonstruksi
              </h3>
              <p className="mt-2 text-gray-600">
                Menyediakan solusi bedah plastik dan rekonstruksi untuk
                memperbaiki fungsi dan estetika tubuh.
              </p>
            </div>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-700">
            Mengapa Memilih Kami?
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>
              Pengalaman dan Keahlian: Tim kami memiliki pengalaman
              bertahun-tahun dalam berbagai jenis operasi dengan tingkat
              keberhasilan yang tinggi.
            </li>
            <li>
              Pelayanan Personal: Kami memahami kebutuhan unik setiap pasien dan
              memberikan perawatan yang dipersonalisasi.
            </li>
            <li>
              Keamanan dan Kenyamanan: Kami mengutamakan keamanan pasien dan
              menyediakan lingkungan yang nyaman selama proses perawatan.
            </li>
          </ul>
        </section>

      </main>

      <footer className="text-center my-8">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Herlambang Wicaksono. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
