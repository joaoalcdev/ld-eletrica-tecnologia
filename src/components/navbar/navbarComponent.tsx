/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, FC } from "react";

import Link from "next/link";
import Image from "next/image";

const LogoLD = require("/public/images/logo.svg");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`flex items-center w-full bg-blue-800`}>
        <div className="container">
          <div className="relative flex items-center justify-between mx-4">
            <div className="max-w-full px-4 w-60">
              <a href="/#" className="block w-full py-2 px-0">
                <Image src={LogoLD} alt="logo" className="w-1/2" />
              </a>
            </div>
            <div className="flex items-center justify-between w-full px-4">
              <div>
                <button
                  // @click="navbarOpen = !navbarOpen"
                  onClick={() => setOpen(!open)}
                  // :className="navbarOpen && 'navbarTogglerActive' "
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                </button>
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex">
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Início
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Benefícios
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Quem somos
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Serviços
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Depoimentos
                    </ListItem>
                  </ul>
                </nav>
              </div>
              {/* <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="py-3 text-base font-medium px-7 text-dark hover:text-primary"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

interface Props {
  children: React.ReactNode;
  navItemStyles: string;
  NavLink: string;
}

const ListItem: FC<Props> = ({
  children,
  navItemStyles,
  NavLink,
  ...props
}) => (
  <>
    <li>
      <a
        {...props}
        href={NavLink}
        className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
      >
        {children}
      </a>
    </li>
  </>
);
