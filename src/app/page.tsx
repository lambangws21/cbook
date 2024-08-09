"use client";

import React, { useState, useEffect } from "react";
import { birthdays } from "@/lib/birtdayData"; // Impor data ulang tahun dari file terpisah
import { Calendar } from "@/components/ui/calendar"; 
import { format } from "date-fns";
import { toast, Toaster } from "@/components/toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IcareCarousel from "@/components/carousel/icareCarousel";
import Link from "next/link";
import Confetti from "react-confetti"; // Impor komponen confetti untuk efek animasi

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Fungsi untuk mendapatkan pengingat ulang tahun berdasarkan tanggal yang dipilih
  const getBirthdayReminder = (date: Date | undefined) => {
    if (!date) return null;
    const todayMonthDay = format(date, "MM-dd");
    const birthday = birthdays.find(
      bd => format(bd.date, "MM-dd") === todayMonthDay
    );
    return birthday ? `${birthday.message} 🎉` : null;
  };

  // Mengecek ulang tahun setiap kali halaman dimuat
  useEffect(() => {
    const today = new Date();
    const birthdayToday = getBirthdayReminder(today);
    if (birthdayToday) {
      setShowConfetti(true);
      toast({
        title: "Selamat Beraktivitas, Sehat Selalu 🤗",
        description: birthdayToday,
      });

      setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Stop confetti after 5 seconds
    }
  }, []);

  return (
    <div>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )} {/* Tambahkan confetti */}
      <main className="bg-white min-h-screen p-8">
        <Toaster />
        <header className="text-center my-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Kamar Bedah OK Carolus
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Selamat Datang di C-BOOK &quot;Carolus Book&quot;, Website ini dibuat untuk kenangan dan juga pembelajaran yang sudah saya dapatkan di OK Carolus. Jika ada hal yang ingin disampaikan, jangan sungkan untuk menghubungi <Link href={'https://www.instagram.com/wicaksonoherlambang/'} className={'text-blue-500 hover:underline'}>saya di Instagram</Link> atau melalui <Link href={'mailto:lambangws21@gmail.com'} className={'text-blue-500 hover:underline'}>email</Link>.
          </p>
        </header>
        <section className="flex flex-col items-center justify-center gap-20 mx-auto w-full max-w-screen-lg">
          <Card className="w-full">
            <CardContent>
              <CardHeader className="text-2xl font-bold text-gray-700 text-center">Kalender Kenangan</CardHeader>
              <CardContent className="mt-4 flex justify-center">
                <Calendar
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                />
                {selectedDate && (
                  <div className="mt-4 text-center text-lg text-gray-700">
                    {getBirthdayReminder(selectedDate) || "Tidak ada ulang tahun hari ini."}
                  </div>
                )}
              </CardContent>
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col mt-9 items-center justify-center gap-2 w-full max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-700 text-center">Semoga Membantu </h2>
          <IcareCarousel />
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
