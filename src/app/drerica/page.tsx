"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import erica from "../../../public/images/drerica.webp";

const menuList = [
  {
    dokter: "dr. Erica",
    spesialis: "Orthopedi",
    items: [
      {
        link: "/drerica/knee-acl",
        text: "Arthroscopy Knee ACL Reconstruction",
      },
      {
        link: "/drerica/knee-meniscus",
        text: "Arthroscopy Knee Meniscus (Partial Meniscectomy atau Meniscus Repair)",
      },
      {
        link: "/drerica/open-reduction-capsular",
        text: "Open Reduction and Capsular Release Elbow",
      },
      {
        link: "/drerica/orif-clavicle-distal",
        text: "ORIF (Open Reduction Internal Fixation) CLAVICLE/DISTAL CLAVICLE",
      },
      {
        link: "/drerica/proximal-humerus",
        text: "ORIF (Open Reduction Internal Fixation) PROXIMAL HUMERUS",
      },
      {
        link: "/drerica/release-extensor",
        text: "Release Extensor Carpi Radialis Brevis (ECRB) untuk Tennis Elbow",
      },
      {
        link: "/drerica/shoulder",
        text: "Arthroscopy shoulder",
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white mx-auto ">
      <div className="flex justify-start items-center mb-4 border p-4 sm:p-0 rounded-2xl bg-gray-50">
        <div className="w-16 h-16 mr-4 flex justify-center items-center">
          <Image
            src={erica}
            alt="dr. Erica"
            className="rounded-full sm:w-12 sm:h-12 bg-cover"
            width={64}
            height={64}
          />
        </div>
          <div className="flex flex-col text-xl font-semibold sm:text-sm">
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
              <div className="block text-blue-500 p-2 border rounded-xl hover:bg-blue-500 hover:text-white transition duration-300 sm:text-[10px]">
                {item.text}
              </div>
            </Link>
          </div>
        ))}
        {!isCollapsed &&
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
      <button
        onClick={toggleCollapse}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 sm:px-2 sm:py-2 sm:text-[10px] sm:mt-0"
      >
        {isCollapsed ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default Page;
