"use client"
import Image from "next/image";
import Link from "next/link";
import FOTO from "../../../../public/images/drroyanto.webp";

const menuList = [
  {
    dokter: "dr.Royanto",
    spesialis: "Obstetri",
    items: [
      {
        link: "/drroyanto/histerektomi",
        text: "Laparatomi Histerektomi",
      },

    ],
  },
];

const Page = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
    <div className="flex justify-start items-center mb-4 border p-4 sm:p-[1px] rounded-2xl bg-gray-50">
        <div className="w-16 h-16 sm:12 sm:12 mr-2 flex justify-center items-center">
          <Image
            src={FOTO}
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
        {menuList[0].items.map((item, index) => (
          <div key={index} className="mb-2">
            <Link href={item.link}>
              <div className="text-blue-500 p-2 border rounded-xl hover:bg-blue-500 hover:text-white sm:text-[10px]">{item.text}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
