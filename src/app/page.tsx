"use client";

import React, { useState, useEffect } from "react";
import { birthdays } from "@/lib/birtdayData";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { toast, Toaster } from "@/components/toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IcareCarousel from "@/components/carousel/icareCarousel";
import Link from "next/link";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import type { DateRange } from "react-day-picker";
import Image from "next/image";

interface StaffItem {
  "Data Dokter"?: string;
  "Data Perawat"?: string;
  spesialis?: string;
  imageUrl?: string;
  role?: string;
}

interface DataItem {
  name: string;
  spesialis: string;
  photoUrl: string;
  role: string;
}

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 800,
    height: typeof window !== "undefined" ? window.innerHeight : 600,
  });
  const [showNewFeatureBanner, setShowNewFeatureBanner] = useState<boolean>(true);
  const [dataList, setDataList] = useState<DataItem[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/dataDokter/getImages?getImages=true");
        const data: StaffItem[] = await res.json();
        if (Array.isArray(data)) {
          const formatted: DataItem[] = data.map((item: StaffItem) => {
            const name = item["Data Dokter"] || item["Data Perawat"] || "Unknown";
            const spesialis = item.spesialis || "";
            const photoUrl = item.imageUrl || "";
            const role = item.role || (item["Data Dokter"] ? "Dokter" : "Perawat");
            return { name, spesialis, photoUrl, role };
          });
          setDataList(formatted);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const getBirthdayReminder = (date: Date | undefined): string | null => {
    if (!date) return null;
    const monthDay = format(date, "MM-dd");
    const birthday = birthdays.find((bd) => format(bd.date, "MM-dd") === monthDay);
    return birthday ? `${birthday.message} 🎉` : null;
  };

  useEffect(() => {
    const today = new Date();
    const birthdayToday = getBirthdayReminder(today);
    if (birthdayToday) {
      setShowConfetti(true);
      toast({ title: "Selamat Beraktivitas, Sehat Selalu 🤗", description: birthdayToday });
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, []);

  const handleBirthdayCheck = () => {
    if (!selectedDate) {
      toast({ title: "Pilih tanggal terlebih dahulu", description: "Silahkan pilih tanggal pada kalender untuk memeriksa ulang tahun." });
      return;
    }
    const reminder = getBirthdayReminder(selectedDate);
    if (reminder) {
      setShowConfetti(true);
      toast({ title: "Selamat!", description: reminder });
      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      toast({ title: "Tidak ada ulang tahun", description: "Tanggal yang dipilih tidak memiliki ulang tahun." });
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      {showConfetti && <Confetti width={windowDimensions.width} height={windowDimensions.height} />}
      <main className="bg-white dark:bg-gray-900 min-h-screen p-4 md:p-8 transition-colors duration-500">
        <Toaster />
        <header className="text-center my-6">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-lg mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
              Kamar Bedah OK Carolus
            </h1>
            <button
              onClick={toggleDarkMode}
              className="mt-4 sm:mt-0 w-full sm:w-auto p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <p className="max-w-screen-md mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Selamat Datang di C-BOOK &quot;Carolus Book&quot;, Website ini dibuat untuk kenangan dan juga pembelajaran yang sudah saya dapatkan di OK Carolus. Jika ada hal yang ingin disampaikan, jangan sungkan untuk menghubungi <Link href="https://www.instagram.com/wicaksonoherlambang/"><span className="text-blue-500 hover:underline">saya di Instagram</span></Link> atau melalui <Link href="mailto:lambangws21@gmail.com"><span className="text-blue-500 hover:underline">email</span></Link>.
          </p>
        </header>

        <section className="flex flex-col items-center justify-center gap-8 mx-auto w-full max-w-screen-lg">
          <Card className="w-full shadow-lg hover:shadow-2xl">
            <CardContent>
              <CardHeader className="text-2xl font-bold text-gray-700 dark:text-gray-200 text-center">
                Kalender Kenangan
              </CardHeader>
              <CardContent className="mt-4 flex flex-col items-center">
                <Calendar selected={selectedDate} onSelect={(value: Date | undefined) => setSelectedDate(value)} />
                {selectedDate && (
                  <div className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
                    {getBirthdayReminder(selectedDate) || "Tidak ada ulang tahun hari ini."}
                  </div>
                )}
                <button
                  onClick={handleBirthdayCheck}
                  className="mt-4 w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Cek Ulang
                </button>
              </CardContent>
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col mt-8 items-center justify-center gap-4 w-full max-w-screen-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-200 text-center">
            Semoga Membantu
          </h2>
          <IcareCarousel />
        </section>

        <section className="flex flex-col mt-8 items-center justify-center gap-4 w-full max-w-screen-lg mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 dark:text-gray-300 text-center">
            Staff Operasi
          </h2>
          <div className="relative flex items-center justify-center bg-slate-100 dark:bg-slate-800 p-6 rounded-lg overflow-x-auto w-full">
            {dataList.map((item, index) => {
              const zIndexValue = dataList.length - index;
              return (
                <motion.div
                  key={index}
                  style={{ zIndex: zIndexValue }}
                  className={`${index > 0 ? "-ml-4" : ""} w-14 h-14 rounded-full overflow-hidden flex-shrink-0 outline-1 shadow-2xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.7, zIndex: 999 }}
                >
                  {item.photoUrl ? (
                    <Image
                      src={item.photoUrl}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="object-cover w-14 h-14 border-2 border-blue-500/50 shadow-md rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/no-image.png";
                      }}
                    />
                  ) : (
                    <div className="bg-gray-700 w-14 h-14 text-white flex items-center justify-center text-xs">
                      No Image
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="text-center my-6">
        <p className="text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Herlambang Wicaksono. All rights reserved.
        </p>
      </footer>

      <AnimatePresence>
        {showNewFeatureBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 flex items-center justify-between z-50"
          >
            <span>Ada fitur baru! Cek update terbaru kami.</span>
            <button onClick={() => setShowNewFeatureBanner(false)} className="text-2xl font-bold">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;