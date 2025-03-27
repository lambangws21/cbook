"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FOTO from "../../../../public/images/mariamayasari.webp";
import { Button } from "@/components/ui/button";

const menuList = [
  {
    dokter: "dr. Maria Mayasari",
    spesialis: "Digestive",
    items: [
      {
        link: "/mariamayasari/laparoskopi-app",
        text: "LAPAROSKOPI APPENDIKTOMI",
      },
      {
        link: "/mariamayasari/laparatomireseksiusus",
        text: "LAPARATOMI RESEKSI USUS",
      },
      {
        link: "/mariamayasari/laparoskopiHernia",
        text: "LAPAROSKOPI HERNIA",
      },
      {
        link: "/mariamayasari/laparoskopireseksihepar",
        text: "Laparoskpi Reseksi Hepar",
      },
    ],
  },
];

const Page: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Tampilkan item pertama secara default, sisanya hanya muncul jika isCollapsed false
  const alwaysShowItems = menuList[0].items.slice(0, 1);
  const collapsibleItems = menuList[0].items.slice(1);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white mx-auto">
      {/* Header Card */}
      <div className="flex items-center mb-4 border p-4 sm:p-[1px] rounded-2xl bg-gray-50">
        <div className="w-16 h-16 mr-2 flex justify-center items-center">
          <Image
            src={FOTO}
            alt="dr. Maria Mayasari"
            className="rounded-full sm:w-11 sm:h-11 bg-cover"
            width={62}
            height={62}
          />
        </div>
        <div className="flex flex-col text-xl font-semibold sm:text-[13px]">
          {menuList[0].dokter}
          <div className="text-gray-500 sm:text-xs">
            {menuList[0].spesialis}
          </div>
        </div>
      </div>

      {/* List Menu */}
      <div className="list">
        {/* Always visible item */}
        {alwaysShowItems.map((item, index) => (
          <div key={index} className="mb-2">
            <Link href={item.link}>
              <motion.div
                className="block text-blue-500 p-2 border rounded-xl hover:bg-blue-500 hover:text-white sm:text-[10px] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.text}
              </motion.div>
            </Link>
          </div>
        ))}

        {/* Animasi untuk item tambahan */}
        <AnimatePresence>
          {!isCollapsed &&
            collapsibleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-2"
              >
                <Link href={item.link}>
                  <div className="block text-blue-500 p-2 border rounded-xl hover:bg-blue-500 hover:text-white transition duration-300 sm:text-[10px]">
                    {item.text}
                  </div>
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Tombol Show More/Show Less */}
      <Button
        onClick={toggleCollapse}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 sm:px-2 sm:py-2 sm:text-[10px]"
      >
        {isCollapsed ? "Show More" : "Show Less"}
      </Button>
    </div>
  );
};

export default Page;
