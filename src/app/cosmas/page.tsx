"use client"
import Image from "next/image";
import Link from "next/link";
import FOTO from "../../../public/images/cosmas.webp";

const menuList = [
  {
    dokter: "dr.Cosmas Gora",
    spesialis: "Digestive",
    items: [
      {
        link: "/cosmas/laparoskopi-chole",
        text: "Laparoskopi Cholesystectomie",
      },

    ],
  },
];

const Page = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="flex justify-start items-center mb-4 border p-4 rounded-2xl ">
        <div className="w-16 h-16 mr-4">
          <Image
            src={FOTO} // Ganti dengan path ke foto dr. Erica
            alt="dokter"
            className="rounded-full bg-cover"
            width={64}
            height={64}
          />
        </div>
        <div>
          <div className=" text-xl font-semibold">
            {menuList[0].dokter}
          </div>
          <div className="text-gray-500">{menuList[0].spesialis}</div>
        </div>
      </div>
      <div className="list">
        {menuList[0].items.map((item, index) => (
          <div key={index} className="mb-2">
            <Link href={item.link}>
              <div className="text-blue-500 p-2 border rounded-xl hover:bg-blue-500 hover:text-white">{item.text}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
