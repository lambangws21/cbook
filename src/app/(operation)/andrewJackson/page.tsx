"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FOTO from "../../../../public/images/andrejackson.webp";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const menuList = [
  {
    dokter: "dr. Andrew",
    spesialis: "Vaskular",
    items: [
      { link: "/andrewJackson/cdlTunneling", text: "CDL Tunneling" },
      { link: "/andrewJackson/cimino", text: "AV Shunt / Cimino" },
      { link: "/andrewJackson/evlt", text: "EVLT" },
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
          src={FOTO}
          alt="Foto Dokter"
          className="rounded-full object-cover border"
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-sm font-bold text-gray-800 flex items-center dark:text-white">
            {data.dokter}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">{data.spesialis}</p>
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {(isCollapsed ? data.items.slice(0, 1) : data.items).map((item, index) => (
            <motion.div
              key={item.link}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Link href={item.link}>
                <div className="block p-3 rounded-xl border text-blue-600 hover:bg-blue-500 hover:text-white text-sm font-medium transition-colors">
                  {item.text}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
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
