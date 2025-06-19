"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FOTO from "../../../../public/images/mariamayasari.webp";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const menuList = [
  {
    dokter: "dr. Maria Mayasari",
    spesialis: "Digestive",
    items: [
      { link: "/mariamayasari/laparoskopi-app", text: "LAPAROSKOPI APPENDIKTOMI" },
      { link: "/mariamayasari/laparatomireseksiusus", text: "LAPARATOMI RESEKSI USUS" },
      { link: "/mariamayasari/laparoskopiHernia", text: "LAPAROSKOPI HERNIA" },
      { link: "/mariamayasari/laparoskopireseksihepar", text: "LAPAROSKPI RESEKSI HEPAR" },
    ],
  },
];

const Page = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);
  const data = menuList[0];
  const alwaysShowItems = data.items.slice(0, 1);
  const collapsibleItems = data.items.slice(1);

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
          alt="Foto dr. Maria Mayasari"
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

      <div className="space-y-2">
        {alwaysShowItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block text-blue-600 p-3 border rounded-xl hover:bg-blue-500 hover:text-white text-sm font-medium transition-colors dark:text-blue-300"
            >
              {item.text}
            </motion.div>
          </Link>
        ))}

        <AnimatePresence>
          {!isCollapsed &&
            collapsibleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={item.link}>
                  <div className="block text-blue-600 p-3 border rounded-xl hover:bg-blue-500 hover:text-white text-sm font-medium transition-colors dark:text-blue-300">
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
