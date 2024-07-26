"use client";

import React, { useState, useEffect } from "react";
import { TanggalUlangTahun } from "@/lib/birthdayTypes"; // Sesuaikan dengan jalur file yang tepat
import { Calendar } from "@/components/ui/calendar"; // Impor komponen kalender
import { format } from "date-fns"; // Impor format dari date-fns untuk memformat tanggal
import { toast, Toaster } from "@/components/toast"; // Impor toast dan Toaster dari file yang baru dibuat
import { Card, CardContent } from "@/components/ui/card";
import IcareCarousel from "@/components/carousel/icareCarousel"

// Data ulang tahun
const birthdays: TanggalUlangTahun[] = [
  { date: new Date(1994, 6, 26), name: "Herlambang Wicaksono", message: "Happy Birthday, Herlambang!" },
  { date: new Date(2024, 7, 26), name: "John Doe", message: "Happy Birthday, John!" },
  { date: new Date(2024, 8, 14), name: "Jane Smith", message: "Happy Birthday, Jane!" },
  // Tambahkan data ulang tahun lainnya di sini
];

const Home = () => {
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
        title: "Selamat Beraktivitas, Sehat Selalu 🤗",
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

        <section className="min-w-screen flex items-center justify-center gap-20 mx-auto">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-700">Visi Kami</h2>
            <p className="mt-4 text-gray-600">
              Menjadi pusat pelayanan bedah terkemuka yang diakui secara nasional
              dan internasional dalam memberikan perawatan bedah yang komprehensif
              dan inovatif.
            </p>
            <div className="mt-7">
            <h2 className="text-3xl font-bold text-gray-700">Misi Kami</h2>
          <ul className="mt-4 list-disc list-outside text-gray-600">
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
          </div>
          </div>
          <Card className="w-1/4 ">
            <CardContent>
            <h2 className="text-2xl font-bold text-gray-700">Kalender Kenangan</h2>
            <div className="mt-4 ">
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
            </CardContent>
          </Card>
        </section>

        <section className="min-w-screen flex flex-col mt-9 items-center justify-center gap-2 mx-auto6">
       <h2 className="text-3xl font-bold text-gray-700">ICARE</h2>
       <IcareCarousel/>
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
};

export default Home;
