"use client";
import {
  BellRing,
  MessageCircle,
  Search,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 flex p-2 rounded-2xl ml-3 bg-slate-500/20 justify-between items-center mx-auto ">
      <div className="flex capitalize font-bold text-2xl p-3">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <Search />
          <input
            type="text"
            placeholder="Search..."
            className=" p-3 rounded-2xl bg-slate-500/20"
          />
        </div>
        <div className="flex items-center gap-7 p-3" >
          <BellRing />
          <MessageCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
