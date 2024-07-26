"use client"; // Pastikan ini ada di bagian atas file

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname
import { Activity,HomeIcon, BookCheck, PencilLine, Handshake } from "lucide-react";
import UserItems from "../useritems/useritems";
import {Badge} from "@/components/ui/badge"

const menuList = [
  {
    group: "General",
    items: [
      {
        link: "/",
        text: "",
        icon: <HomeIcon className="h-4 w-4"/>,
      },
      {
        link: "/pages/serahterima",
        text: "Serah Terima",
        icon: <Handshake className="h-4 w-4" />,
      },
      {
        link: "/diagnosaview",
        text: "Diagnosa",
        icon: <Activity className="h-4 w-4"/>,
      },
      {
        link: "/pages/textgenerate",
        text: "Text Generator",
        icon: <PencilLine className="h-4 w-4 p-0"/>,
      },
      {
        link: "/pages/operasi",
        text: "CBook",
        icon: <BookCheck className="h-4 w-4 p-0"/>,
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
      className={`sticky top-0 z-50 transition-all container duration-300 flex justify-between ${
        scrolled
          ? "bg-slate-100/20 rounded-3xl shadow-md p-4 w-auto text-slate-200"
          : "bg-transparent text-slate-900"
      } p-4`}
    >
      <div className="xs:hidden sm:hidden flex justify-center items-center gap-4 container">
        <div className=" " >
          <UserItems />
        </div>
        <div className="flex justify-center items-center w-screen">
          <div className="flex justify-center items-center">
            {menuList.map((menu, key) => (
              <div
                key={key}
                className="flex justify-center items-center gap-4 p-4 border rounded-2xl h-[70px] md:h-[50px]"
              >
                {menu.items.map((option, optionKey) => {
                  const isActive = pathname === option.link; // Determine if the link is active
                  return (
                    <Badge key={optionKey}>
                      <Link
                        href={option.link}
                        className={`flex justify-center p-2 items-center gap-3 sm:text-xs sm:text-nowrap sm:p-0.5 sm:gap-0.5 ${
                          isActive
                            ? "bg-blue-500 text-white animate-pulse duration-500"
                            : scrolled
                            ? "text-blue-200 rounded-full border hover:bg-slate-500"
                            : "text-blue-200 p-2 hover:bg-blue-500 hover:text-white"
                        } rounded-2xl transition-all duration-300 hover:cursor-pointer`}
                      >
                        {option.icon}
                        {option.text}
                      </Link>
                    </Badge>
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
