"use client"
// React & Next
import React from "react";
import Link from "next/link";

// packages
import { Menu, Transition } from "@headlessui/react";

// constants & variables
import { navItems } from "@/app/constants";

// icons
import { IoEarth } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

// scss
import classes from "./index.module.scss";

// header
export default function Zheader() {
  // return
  return (
    <>
      <header className={classes.header}>
        {/* logo */}
        <Link
          href="/"
          className="flex flex-row items-center gap-1 text-3xl text-f-dpink font-bold tracking-widest mx-3 py-1"
        >
          zEarth <IoEarth />
        </Link>
        {/* nav list */}
        <Menu as="div" className="zhead:!hidden relative text-left ">
          <Menu.Button
            className={`${classes.menuBtn} flex flex-row justify-between items-center gap-2 text-xs px-5 py-2 rounded`}
          >
            <FaBars />
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute bg-f-lbackgroud right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
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
        <nav className={`${classes.navList} !hidden zhead:!flex`}>
          {navItems.map((i, index) => (
            <div key={index} className={classes.navItem}>
              <Link href={"/" + i.link} className={classes.navLink}>
                {<i.icon />}
                <h4 className={classes.navTitle}>{i.label}</h4>
              </Link>
            </div>
          ))}
        </nav>
      </header>
    </>
  );
}
