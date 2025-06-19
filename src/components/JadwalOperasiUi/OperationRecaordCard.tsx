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
        }
      } catch (err) {
        console.error("Error fetching staff data:", err);
      }
    };

    fetchStaff();
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember",
    ];
    return isNaN(date.getTime())
      ? dateString
      : `${String(date.getDate()).padStart(2, "0")} ${
          monthNames[date.getMonth()]
        } ${date.getFullYear()}`;
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Data Operasi
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.entries(data).map(([sheetName, sheetRecords], sheetIndex) => (
          <motion.div
            key={sheetName}
            className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: sheetIndex * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Badge text={`OR: ${sheetName}`} color="bg-orange-500" className="mb-4" />

            {sheetRecords.map((record, idx) => {
              const staffKey = record.namaDokter || record.teamOperasi;
              const staff = staffList.find(
                (s) => s.name.toLowerCase() === staffKey?.toLowerCase()
              );

              return (
                <motion.div
                  key={`${sheetName}-${record.no}-${idx}`}
                  className="flex justify-between items-start bg-gray-50 dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:shadow-md transition duration-300 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Kiri: Info */}
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2 w-[80%]">
                    <Badge text={formatDate(record.date)} color="bg-green-500" className="mb-2" />
                    <p className="flex gap-2 items-center">
                      <UserIcon size={16} /> {record.namaPasien}
                    </p>
                    <p className="flex gap-2 items-center">
                      <HeartIcon size={16} /> {record.nomorRekamMedis}
                    </p>
                    <p className="flex gap-2 items-center">
                      <SyringeIcon size={16} /> {record.jenisBius}
                    </p>
                    <p className="flex gap-2 items-center">
                      <HeartPulseIcon size={16} /> {record.tindakanOperasi}
                    </p>
                    <p className="flex gap-2 items-center">
                      <BicepsFlexedIcon size={16} /> {record.teamOperasi}
                    </p>
                  </div>

                  {/* Kanan: Foto */}
                  <div className="flex flex-col items-center w-[20%] ml-2">
                    {staff && staff.photoUrl ? (
                      <motion.div
                        className="w-14 h-14 rounded-full overflow-hidden mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={staff.photoUrl}
                          alt={staff.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/no-image.png";
                          }}
                        />
                      </motion.div>
                    ) : (
                      <div className="w-14 h-14 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-xs text-gray-600 dark:text-white rounded-full mb-1">
                        No Img
                      </div>
                    )}
                    {record.namaDokter && (
                      <p className="text-xs text-center text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">{record.namaDokter}</span>
                        <br />
                        <span className="italic text-[10px]">Dokter</span>
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
