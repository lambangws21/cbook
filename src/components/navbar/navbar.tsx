"use client"; // Pastikan ini ada di bagian atas file

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname
import { Activity, BookCheck, PencilLine, ShieldPlus } from "lucide-react";
import UserItems from "../useritems/useritems";

const menuList = [
  {
    group: "General",
    items: [
      {
        link: "/",
        text: "Jadwal Operasi",
        icon: <ShieldPlus />,
      },
      {
        link: "/diagnosaview",
        text: "Diagnosa",
        icon: <Activity />,
      },
      {
        link: "/pages/textgenerate",
        text: "Text Generator",
        icon: <PencilLine />,
      },
      {
        link: "/pages/operasi",
        text: "CBook",
        icon: <BookCheck />,
      },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50  transition-all container duration-300 flex justify-between ${
        scrolled
          ? "bg-slate-100/20 rounded-3xl shadow-md p-4 w-auto text-slate-700"
          : "bg-transparent text-slate-900"
      } p-4`}
    >
      <div className="flex justify-center items-center gap-4 container">
        <div className=" " >
          <UserItems />
        </div>
        <div className="flex justify-center items-center w-screen">
          <div className="flex justify-center items-center">
            {menuList.map((menu, key) => (
              <div
                key={key}
                className="flex justify-center items-center gap-4 p-4 border rounded-2xl h-[70px]"
              >
                {menu.items.map((option, optionKey) => {
                  const isActive = pathname === option.link; // Determine if the link is active
                  return (
                    <div key={optionKey}>
                      <Link
                        href={option.link}
                        className={`flex justify-center p-2 items-center gap-3 ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : scrolled
                            ? "text-white hover:bg-slate-700"
                            : "text-slate-900 p-2 hover:bg-blue-500 hover:text-white"
                        } rounded-2xl transition-all duration-300`}
                      >
                        {option.icon}
                        {option.text}
                      </Link>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
