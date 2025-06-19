"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FOTO from "../../../../public/images/drroyanto.webp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const menuList = [
  {
    dokter: "dr. Royanto",
    spesialis: "Obstetri",
    items: [
      { link: "/drroyanto/histerektomi", text: "Laparatomi Histerektomi" },
    ],
  },
];

const Page = () => {
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
          alt="Foto dr. Royanto"
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
        {data.items.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="block text-blue-600 p-3 border rounded-xl hover:bg-blue-500 hover:text-white text-sm font-medium transition-colors dark:text-blue-300">
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Page;
