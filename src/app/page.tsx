"use client";

import React, { useState, useEffect } from "react";
import { birthdays } from "@/lib/birtdayData"; // Import birthday data
import { Calendar } from "@/components/ui/calendar"; 
import { format } from "date-fns";
import { toast, Toaster } from "@/components/toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IcareCarousel from "@/components/carousel/icareCarousel";
import Link from "next/link";
import Confetti from "react-confetti"; // Import confetti for animation effects

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState({ 
    width: typeof window !== "undefined" ? window.innerWidth : 800, 
    height: typeof window !== "undefined" ? window.innerHeight : 600 
  });

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to get birthday reminders based on the selected date
  const getBirthdayReminder = (date: Date | undefined) => {
    if (!date) return null;
    const monthDay = format(date, "MM-dd");
    const birthday = birthdays.find(bd => format(bd.date, "MM-dd") === monthDay);
    return birthday ? `${birthday.message} 🎉` : null;
  };

  // Check for birthday reminders when the page loads
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
      }, 5000);
    }
  }, []);

  // Fungsi untuk memeriksa ulang tanggal yang dipilih
  const handleBirthdayCheck = () => {
    if (!selectedDate) {
      toast({
        title: "Pilih tanggal terlebih dahulu",
        description: "Silahkan pilih tanggal pada kalender untuk memeriksa ulang tahun.",
      });
      return;
    }
    const reminder = getBirthdayReminder(selectedDate);
    if (reminder) {
      setShowConfetti(true);
      toast({
        title: "Selamat!",
        description: reminder,
      });
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } else {
      toast({
        title: "Tidak ada ulang tahun",
        description: "Tanggal yang dipilih tidak memiliki ulang tahun.",
      });
    }
  };

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {showConfetti && (
        <Confetti width={windowDimensions.width} height={windowDimensions.height} />
      )}
      <main className="bg-white dark:bg-gray-900 min-h-screen p-4 md:p-8 transition-colors duration-500">
        <Toaster />
        <header className="text-center my-6">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-lg mx-auto px-4">
            <h1 className="scroll-m-20 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
              Kamar Bedah OK Carolus
            </h1>
            <button 
              onClick={toggleDarkMode} 
              className="mt-4 sm:mt-0 w-full sm:w-auto p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <p className="max-w-screen-md mx-auto mt-4 text-gray-600 dark:text-gray-300 leading-7">
            Selamat Datang di C-BOOK &quot;Carolus Book&quot;, Website ini dibuat untuk kenangan dan juga pembelajaran yang sudah saya dapatkan di OK Carolus. Jika ada hal yang ingin disampaikan, jangan sungkan untuk menghubungi <Link href="https://www.instagram.com/wicaksonoherlambang/"><span className="text-blue-500 hover:underline hover:underline-offset-4">saya di Instagram</span></Link> atau melalui <Link href="mailto:lambangws21@gmail.com"><span className="text-blue-500 hover:underline">email</span></Link>.
          </p>
        </header>
        <section className="flex flex-col items-center justify-center gap-8 mx-auto w-full max-w-screen-lg">
          <Card className="card-responsive w-full shadow-lg hover:shadow-2xl transition-shadow">
            <CardContent>
              <CardHeader className="text-2xl font-bold text-gray-700 dark:text-gray-200 text-center">
                Kalender Kenangan
              </CardHeader>
              <CardContent className="mt-4 flex flex-col items-center">
                <Calendar
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                />
                {selectedDate && (
                  <div className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
                    {getBirthdayReminder(selectedDate) || "Tidak ada ulang tahun hari ini."}
                  </div>
                )}
                <button 
                  onClick={handleBirthdayCheck} 
                  className="mt-4 w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
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
      </main>

      <footer className="text-center my-6">
        <p className="text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Herlambang Wicaksono. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
