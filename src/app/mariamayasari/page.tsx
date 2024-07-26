"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FOTO from "../../../public/images/mariamayasari.webp";
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
    ],
  },
];

const Page = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="flex justify-start items-center mb-4 border p-4 sm:p-[1px] rounded-2xl bg-gray-50">
        <div className="w-16 h-16 sm:w-12 sm:h-12 mr-2 flex justify-center items-center">
          <Image
            src={FOTO}
            alt="FOTO"
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
      <div className="list">
        {menuList[0].items
          .slice(0, isCollapsed ? 1 : menuList[0].items.length)
          .map((item, index) => (
            <div key={index} className="mb-2">
              <Link href={item.link}>
                <div className="text-blue-500 p-2 border rounded-xl hover:bg-blue-500 hover:text-white sm:text-[10px]">
                  {item.text}
                </div>
              </Link>
            </div>
          ))}
      </div>
      <Button
        onClick={toggleCollapse}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 sm:px-2 sm:py-2 sm:text-[10px] sm:mt-0"
      >
        {isCollapsed ? "Show More" : "Show Less"}
      </Button>
    </div>
  );
};

export default Page;
