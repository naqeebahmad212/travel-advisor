"use client";

import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Navbar = () => {
  const [scrollY, setScrollY] = useState("");

  const menuSheet = useRef<HTMLDivElement>(null);
  const closeMenu = useRef<HTMLDivElement>(null);
  const siteTitle = useRef<HTMLDivElement>(null);
  const siteName = useRef<HTMLDivElement>(null);

  const menuBtnHandler = () => {
    // menuSheet.current.style.transform = `translateX(50%)`;
    closeMenu.current?.classList?.add("static");
    closeMenu.current?.classList.remove("hidden");
    menuSheet.current?.classList.add("translate-x-[500px]");
    menuSheet.current?.classList.remove("translate-x-[-500px]");
    siteTitle.current?.classList.remove("text-white");
    siteTitle.current?.classList.add("text-black");
    siteName.current?.classList.add("text-black");
    siteName.current?.classList.remove("text-white");

    // menuSheet.current.classList.add('left-0')
  };
  const hideMenuHandler = () => {
    closeMenu.current?.classList.remove("static");
    closeMenu.current?.classList.add("hidden");

    menuSheet.current?.classList.remove("translate-x-[500px]");
    menuSheet.current?.classList.add("translate-x-[-500px]");
    siteTitle.current?.classList.add("text-white");
    siteTitle.current?.classList.remove("text-black");
    siteName.current?.classList.remove("text-black");
    siteName.current?.classList.add("text-white");
  };

  return (
    <div className="bg-transparent ">
      <header className={"w-[100%] z-[99999]"}>
        <div className=" nav z-[99999] w-full lg:w-[70%] p-3 fixed top-0 lg:left-[15%] bg-purple-200 bg-opacity-25 lg:rounded-b-2xl mx-auto flex justify-around px-1">
          <div className="flex items-center gap-3 z-[999]  w-[100%] lg:w-[auto] justify-start">
            <span className="block lg:hidden" onClick={menuBtnHandler}>
              <MenuIcon />
            </span>

            <div
              ref={menuSheet}
              className="fixed items-baseline z-[9999] top-0 -left-[500px]  h-screen  w-[300px] bg-white transition duration-300 ease-in"
            >
              <ul className="flex absolute w-full top-24 flex-col justify-center p-10">
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Discover
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Reviews
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Booking
                </li>
              </ul>
            </div>
            <span
              onClick={() => hideMenuHandler()}
              ref={closeMenu}
              className="close-menut w-[97.5vw] h-[190vh] bg-black bg-opacity-[.5] absolute hidden transition-all duration-300 ease-in "
            ></span>
            <Link
              href={"/"}
              className="flex gap-2 items-center z-[99999] cursor-pointer"
            >
              <h2 ref={siteTitle} className={`font-bold text-xl text-white `}>
                Travel
              </h2>
              <span className={"text-white"} ref={siteName}>
                Advisor
              </span>
            </Link>
          </div>
          <ul className="hidden lg:flex px-3 gap-6 items-center text-primary font-semibold ">
            <li className="text-gray-200 font-light cursor-pointer hover:text-white">
              Discover
            </li>
            <li className="text-gray-200 font-light cursor-pointer hover:text-white">
              Booking
            </li>
            <li className="text-gray-200 font-light cursor-pointer hover:text-white">
              Reviews
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
