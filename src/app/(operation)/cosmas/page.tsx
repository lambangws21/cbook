"use client";

import Image from "next/image";
import Link from "next/link";
import FOTO from "../../../../public/images/cosmas.webp";
import { motion } from "framer-motion";

const menuList = [
  {
    dokter: "dr. Cosmas",
    spesialis: "Digestive Surgeon",
    items: [
      {
        link: "/cosmas/laparoskopi-chole",
        text: "Laparoskopi Cholecystectomie",
      },
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
          alt="Foto Dokter"
          className="rounded-full object-cover border"
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-lg font-bold flex items-center text-gray-800 dark:text-white">
            {data.dokter}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-300">{data.spesialis}</p>
        </div>
      </div>

      <div className="space-y-3">
        {data.items.map((item, index) => (
          <motion.div
            key={item.link}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Link href={item.link}>
              <div className="block p-3 rounded-xl border text-blue-600 hover:bg-blue-500 hover:text-white text-sm font-medium transition-colors">
                {item.text}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Page;
