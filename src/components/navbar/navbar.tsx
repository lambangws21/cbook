"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, HomeIcon, BookCheck, PencilLine, Handshake, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ui/ThemeToggle";
import UserItems from "../useritems/useritems";

const menuList = [
  {
    group: "General",
    items: [
      { link: "/", text: "Beranda", icon: <HomeIcon className="h-4 w-4" /> },
      { link: "/pages/serahterima", text: "Jadwal Operasi", icon: <Handshake className="h-4 w-4" /> },
      { link: "/diagnosaview", text: "Diagnosa", icon: <Activity className="h-4 w-4" /> },
      { link: "/pages/textgenerate", text: "Text Generator", icon: <PencilLine className="h-4 w-4" /> },
      { link: "/pages/operasi", text: "CBook", icon: <BookCheck className="h-4 w-4" /> },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // inisialisasi saat mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth === 0) return null; // cegah render saat SSR (hydration-safe)

  const renderMenuItems = () =>
    menuList.flatMap((group, groupIndex) =>
      group.items.map((item, itemIndex) => {
        const isActive = pathname === item.link;
        const baseStyle = `flex items-center gap-2 p-2 rounded-2xl relative sm:text-xs transition-all`;

        return (
          <Badge key={`${groupIndex}-${itemIndex}`} className="overflow-hidden">
            <Link
              href={item.link}
              onClick={() => setShowDropdown(false)}
              className={`${baseStyle} ${
                isActive
                  ? "text-white"
                  : scrolled
                  ? "text-blue-200 border hover:bg-slate-500"
                  : "text-blue-200 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-blue-500/20 rounded-xl z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-2">
                {item.icon}
                {windowWidth > 420 && item.text}
              </div>
            </Link>
          </Badge>
        );
      })
    );

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 p-4 ${
        scrolled ? "bg-slate-100/20 dark:bg-slate-900/60 shadow-md rounded-3xl backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <UserItems />
        </div>

        {windowWidth <= 620 ? (
          <div className="relative w-full">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center justify-end w-full p-2 text-blue-700 dark:text-yellow-300 border shadow-lg hover:bg-blue-500 hover:text-white rounded-md"
            >
              <Menu className="h-6 w-6" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-full bg-white dark:bg-gray-900 rounded-md shadow-lg z-50">
                <div className="flex flex-col p-2 gap-2">{renderMenuItems()}</div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {renderMenuItems()}
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}
