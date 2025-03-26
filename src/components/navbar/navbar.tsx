"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { usePathname } from "next/navigation";
import { Activity, HomeIcon, BookCheck, PencilLine, Handshake, Menu } from "lucide-react";
import UserItems from "../useritems/useritems";
import { Badge } from "@/components/ui/badge";

const menuList = [
  {
    group: "General",
    items: [
      { link: "/", text: "", icon: <HomeIcon className="h-4 w-4" /> },
      { link: "/pages/serahterima", text: "Jadwal Operasi", icon: <Handshake className="h-4 w-4" /> },
      { link: "/diagnosaview", text: "Diagnosa", icon: <Activity className="h-4 w-4" /> },
      { link: "/pages/textgenerate", text: "Text Generator", icon: <PencilLine className="h-4 w-4" /> },
      { link: "/pages/operasi", text: "CBook", icon: <BookCheck className="h-4 w-4" /> },
    ],
  },
];

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 800, height: 600 });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    const handleResize = () => setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    // Inisialisasi ukuran
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set loading saat berpindah halaman
  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  const renderMenuItems = () =>
    menuList.map((group, groupIndex) =>
      group.items.map((option, optionIndex) => {
        const isActive = pathname === option.link;
        return (
          <Badge key={`${groupIndex}-${optionIndex}`}>
            <Link
              href={option.link}
              onClick={() => setShowDropdown(false)}
              className={`flex items-center gap-2 p-2 rounded-2xl transition-all duration-300 hover:cursor-pointer sm:text-xs ${
                isActive
                  ? "bg-blue-500 text-white animate-pulse"
                  : scrolled
                  ? "text-blue-200 rounded-full border hover:bg-slate-500"
                  : "text-blue-200 p-2 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {option.icon}
              {windowDimensions.width > 420 && option.text}
            </Link>
          </Badge>
        );
      })
    );

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 p-4 ${
        scrolled ? "bg-slate-100/20 rounded-3xl shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <UserItems />
          {loading && <Spinner />}
        </div>
        {windowDimensions.width <= 620 ? (
          <div className="relative w-full">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-end w-full p-2 text-blue-200 hover:bg-blue-500 hover:text-white rounded-md transition-colors"
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
          <div className="flex items-center gap-4">{renderMenuItems()}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
