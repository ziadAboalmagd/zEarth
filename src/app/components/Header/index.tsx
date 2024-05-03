"use client";
// React & Next
import React from "react";
import Link from "next/link";
import Image from "next/image";

// packages
import { Menu, Transition } from "@headlessui/react";

// constants & variables
import { navItems } from "@/app/constants";

// icons
import { FaAngleDown } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";

// scss
import classes from "./index.module.scss";
import { useViewport } from "@/app/utils/other";

// header
export default function Zheader() {
  // is small screen
  // const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { width } = useViewport();
  const isSmallScreen = Number(width) < 720;
  // return
  return (
    <>
      <header className={classes.header}>
        {/* logo */}
        <Link
          href="/"
          className="flex flex-row items-center gap-1 text-3xl text-f-dpink tracking-widest mx-3 py-1"
        >
          zEarth <IoEarth className="text-f-white" />
        </Link>
        {/* nav list */}
        {isSmallScreen ? (
          <Menu as="div" className="relative inline-block text-left ">
            <Menu.Button
              className={`${classes.menuBtn} flex flex-row justify-between items-center gap-2 text-xs px-5 py-2 rounded`}
            >
              menu
              <span className="p-0 text-xs">
                <FaAngleDown />
              </span>
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute bg-f-lwhite right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  {navItems.map((i, index) => (
                    <Menu.Item key={index}>
                      <div
                        className={`${classes.menuItem} flex flex-row items-center px-4 gap-3`}
                      >
                        {<i.icon className="text-f-dpink" />}
                        <a
                          href={"/" + i.link}
                          className={`${classes.menuTitle} block px-2 py-2 text-sm font-light`}
                        >
                          {i.label}
                        </a>
                      </div>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <nav className={classes.navList}>
            {navItems.map((i, index) => (
              <div key={index} className={classes.navItem}>
                <Link href={"/" + i.link} className={classes.navLink}>
                  {<i.icon />}
                  <h4 className={classes.navTitle}>{i.label}</h4>
                </Link>
              </div>
            ))}
          </nav>
        )}
        {/* br */}
      </header>
      {/* shadow h-line */}
      {/* <div className={classes.shadow}></div> */}
    </>
  );
}
