"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import erica from "../../../../public/images/drerica.webp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const menuList = [
  {
    dokter: "dr. Erica",
    spesialis: "Orthopedi",
    items: [
      { link: "/drerica/knee-acl", text: "Arthroscopy Knee ACL Reconstruction" },
      { link: "/drerica/knee-meniscus", text: "Arthroscopy Knee Meniscus (Partial Meniscectomy atau Meniscus Repair)" },
      { link: "/drerica/open-reduction-capsular", text: "Open Reduction and Capsular Release Elbow" },
      { link: "/drerica/orif-clavicle-distal", text: "ORIF (Open Reduction Internal Fixation) CLAVICLE/DISTAL CLAVICLE" },
      { link: "/drerica/proximal-humerus", text: "ORIF (Open Reduction Internal Fixation) PROXIMAL HUMERUS" },
      { link: "/drerica/release-extensor", text: "Release Extensor Carpi Radialis Brevis (ECRB) untuk Tennis Elbow" },
      { link: "/drerica/shoulder", text: "Arthroscopy shoulder" },
    ],
  },
];

const Page = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const data = menuList[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-md mx-auto rounded-2xl shadow-xl p-6 bg-white dark:bg-slate-900"
    >
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={erica}
          alt="Foto dr. Erica"
          className="rounded-full object-cover border"
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {data.dokter}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">{data.spesialis}</p>
        </div>
      </div>

      <div className="list space-y-2">
        {data.items.slice(0, 2).map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="block text-blue-600 p-3 border rounded-xl hover:bg-blue-500 hover:text-white text-sm font-medium transition-colors dark:text-blue-300">
              {item.text}
            </div>
          </Link>
        ))}
        {!isCollapsed &&
          data.items.slice(2).map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="block text-blue-600 p-3 border rounded-xl hover:bg-blue-500 hover:text-white text-sm font-medium transition-colors dark:text-blue-300">
                {item.text}
              </div>
            </Link>
          ))}
      </div>

      <Button
        onClick={toggleCollapse}
        className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 text-sm rounded-xl py-2"
      >
        {isCollapsed ? "Tampilkan Semua" : "Sembunyikan"}
      </Button>
    </motion.div>
  );
};

export default Page;
