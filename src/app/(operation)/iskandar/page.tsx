"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Iskandar from "../../../../public/images/iskandar.webp";
import { Button } from "@/components/ui/button";

const menuList = [
  {
    dokter: "dr. Iskandar",
    spesialis: "Bedah Anak",
    items: [
      {
        link: "/iskandar/laparoskopihernia",
        text: "Laparoskopi Hernia",
      },
      {
        link: "/iskandar/herniorrhaphy",
        text: "Herniorrhaphy",
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
        <div className="w-16 h-16 sm:12 sm:12 mr-2 flex justify-center items-center">
          <Image
            src={Iskandar}
            alt="FOTO"
            className="rounded-full sm:w-12 sm:h-12 bg-cover"
            width={64}
            height={64}
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
        {menuList[0].items.slice(0, 2).map((item, index) => (
          <div key={index} className="mb-2">
            <Link href={item.link}>
              <div className="text-blue-500 p-2 border rounded-xl hover:bg-blue-500 hover:text-white sm:text-[10px]">{item.text}</div>
            </Link>
          </div>
        ))}
        {/* {!isCollapsed &&
          menuList[0].items.slice(2).map((item, index) => (
            <div key={index} className="mb-2">
              <Link href={item.link}>
                <div className="block text-blue-500 sm:text-[10px] sm:p-2 border rounded-xl hover:bg-blue-500 hover:text-white transition duration-300">
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
      </Button> */}
      </div>
    </div>
  );
};

export default Page;

