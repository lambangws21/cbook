"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Cosmas from "@/app/(operation)/cosmas/page";
import Erica from "@/app/(operation)/drerica/page";
import Reinindra from "@/app/(operation)/Reinindra/page";
import Mariamayasari from "@/app/(operation)/mariamayasari/page";
import Royanto from "@/app/(operation)/drroyanto/page";
import Reinaldi from "@/app/(operation)/reinaldi/page";
import Wawo from "@/app/(operation)/drwawo/page";
import PersiapanAnestesi from "@/app/(operation)/persiapan-anestesi/page";
import AndrewJackson from "@/app/(operation)/andrewJackson/page";
import Iskandar from "@/app/(operation)/iskandar/page";
import Felix from "@/app/(operation)/felix/page";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const operations = [
  { id: 1, name: "Persiapan Anestesi", component: <PersiapanAnestesi /> },
  { id: 2, name: "Andrew Jackson", component: <AndrewJackson /> },
  { id: 3, name: "Cosmas", component: <Cosmas /> },
  { id: 4, name: "Reinindra", component: <Reinindra /> },
  { id: 5, name: "Iskandar", component: <Iskandar /> },
  { id: 6, name: "Mariamayasari", component: <Mariamayasari /> },
  { id: 7, name: "Royanto", component: <Royanto /> },
  { id: 8, name: "Erica", component: <Erica /> },
  { id: 9, name: "Felix", component: <Felix /> },
  { id: 10, name: "Reinaldi", component: <Reinaldi /> },
  { id: 11, name: "Wawo", component: <Wawo /> },
];

const HomePage: React.FC = () => {
  const [filter, setFilter] = useState("");

  const filteredOperations = operations.filter((op) =>
    op.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">
        Daftar Operasi
      </h1>

      {/* Input Pencarian */}
      <div className="mb-6 max-w-md mx-auto">
        <Input
          placeholder="Cari operasi..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-base"
        />
      </div>

      {/* Grid Responsif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredOperations.map((op) => (
          <motion.div
            key={op.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="p-4 rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <h2 className="text-lg sm:text-xl font-semibold text-center text-primary mb-2">
                {op.name}
              </h2>
              <div className="flex-1 overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-blue-700 scrollbar-track-transparent">
                {op.component}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
