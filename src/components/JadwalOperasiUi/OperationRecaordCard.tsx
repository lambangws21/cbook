"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Badge from "@/components/Badge";
import {
  BicepsFlexedIcon,
  HeartPulseIcon,
  HeartIcon,
  SyringeIcon,
  UserIcon,
} from "lucide-react";
import { OperationRecord } from "@/types/mobile";

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

interface DataCardProps {
  data: Record<string, OperationRecord[]>;
}

export default function CombinedStaffDataCard({ data }: DataCardProps) {
  const [staffList, setStaffList] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await fetch("/api/dataDokter/getImages?getImages=true");
        const staffData: StaffItem[] = await res.json();
        if (Array.isArray(staffData)) {
          const formatted: DataItem[] = staffData.map((item) => {
            const name =
              item["Data Dokter"] || item["Data Perawat"] || "Unknown";
            const spesialis = item.spesialis || "";
            const photoUrl = item.imageUrl || "";
            const role =
              item.role || (item["Data Dokter"] ? "dokter" : "perawat");
            return { name, spesialis, photoUrl, role };
          });
          setStaffList(formatted);
        } else {
          console.error("Staff data is not an array:", staffData);
        }
      } catch (err) {
        console.error("Error fetching staff data:", err);
      }
    };

    fetchStaff();
  }, []);

  // Dapatkan pasangan [sheetName, record[]]
  const sheetEntries = Object.entries(data);

  // Fungsi format tanggal
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return isNaN(date.getTime())
      ? dateString
      : `${String(date.getDate()).padStart(2, "0")} ${
          monthNames[date.getMonth()]
        } ${date.getFullYear()}`;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">
        Data Operasi
      </h2>

      {/* Container animasi utama */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {/* Satu card per sheet */}
        {sheetEntries.map(([sheetName, sheetRecords], sheetIndex) => (
          <motion.div
            key={sheetName}
            className="w-full p-4 space-y-2 mb-2 border border-gray-200 rounded-xl shadow-md bg-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: sheetIndex * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Badge asal sheet => OR */}
            <Badge
              text={`OR: ${sheetName}`}
              color="bg-orange-500"
              className="mb-2"
            />

            {/* Daftar record di sheet ini */}
            {sheetRecords.map((record, idx) => {
              // Cari staff berdasarkan namaDokter/teamOperasi
              const staffKey = record.namaDokter || record.teamOperasi;
              const staff = staffList.find(
                (s) => s.name.toLowerCase() === staffKey?.toLowerCase()
              );

              return (
                <motion.div
                  key={`${sheetName}-${record.no}-${idx}`}
                  className="flex justify-between bg-gray-50 rounded-lg p-2 border border-gray-200 hover:shadow-md transition duration-300 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Bagian kiri: info operasi */}
                  <div className="text-sm text-left text-gray-600 space-y-0 w-[80%]">
                    <Badge
                      text={`${formatDate(record.date)}`}
                      color="bg-green-500"
                      className="mb-2"
                    />

                    <p className="flex justify-start gap-2 items-center border-b-0 inset-shadow-xs p-2 whitespace-normal break-words">
                      <span className="font-semibold">
                        <UserIcon size={20} />
                      </span>
                      {record.namaPasien}
                    </p>
                    <p className="flex justify-start gap-2 items-center border-b-0 inset-shadow-xs p-2 whitespace-normal break-words">
                      <span className="font-semibold">
                        <HeartIcon size={20} />
                      </span>{" "}
                      {record.nomorRekamMedis}
                    </p>
                    <p className="flex justify-start gap-2 items-center border-b-0 inset-shadow-xs p-2 whitespace-normal break-words">
                      <span className="font-semibold">
                        <SyringeIcon size={20} />
                      </span>{" "}
                      {record.jenisBius}
                    </p>
                    <p className="flex justify-start gap-2 items-center border-b-0 inset-shadow-xs p-2 whitespace-normal break-words">
                      <span className="font-semibold">
                        <HeartPulseIcon size={20} />
                      </span>
                      {record.tindakanOperasi}
                    </p>
                    <p className="flex justify-start gap-2 items-center border-b-0 inset-shadow-xs p-2 whitespace-normal break-words">
                      <span className="font-semibold">
                        <BicepsFlexedIcon size={20} />
                      </span>{" "}
                      {record.teamOperasi}
                    </p>
                  </div>

                  {/* Bagian kanan: foto staff + namaDokter jika ada */}
                  <div className="flex flex-col items-end w-[20%]">
                    {staff && staff.photoUrl ? (
                      <motion.div
                        className="w-14 h-14 rounded-full overflow-hidden mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={staff.photoUrl}
                          alt={staff.name}
                          width={46}
                          height={46}
                          className="object-cover w-14 h-14"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/no-image.png";
                          }}
                        />
                      </motion.div>
                    ) : (
                      <div className="w-14 h-14 flex items-center justify-center bg-gray-300 text-sm text-gray-600 rounded-full mb-1">
                        No Img
                      </div>
                    )}

                    {record.namaDokter && (
                      <p className="text-sm text-gray-500 flex flex-col whitespace-normal break-words items-center">
                        <span className="font-semibold text-[11px] text-gray-700">
                          {record.namaDokter}
                        </span>{" "}
                        <span className="text-[8px] italic text-left">
                          Dokter
                        </span>
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
