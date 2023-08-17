/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, FC, useEffect } from "react";
import Image from "next/image";

const LogoLD = require("/public/images/logo.svg");
import { Bars3Icon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: Bars3Icon,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // create a function to handle the click event on the button
  // when the button is clicked, the state for the menu will be updated to the opposite of what it was, if it was open, it will be closed and vice versa
  const handleClick = () => {
    setOpen(!open);
  };
  if (open) {
    document.addEventListener("focus", (e) => {
      const navbarToggler = document.getElementById("navbarToggler");
      const navbarCollapse = document.getElementById("navbarCollapse");
      if (e.target !== navbarToggler && e.target !== navbarCollapse) {
        setOpen(false);
      }
    });
    document.addEventListener("scroll", () => {
      setOpen(false);
    });
    document.querySelectorAll("a").forEach((item) => {
      item.addEventListener("click", () => {
        setOpen(false);
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        setOpen(false);
      }
    });
  }

  return (
    <>
      <header
        className={`flex items-center w-full lg:bg-gradient-to-r lg:from-blue-200 lg:via-blue-200 lg:to-transparent`}
      >
        <div className="w-full w-max-full">
          {/* <div className="container w-full w-max-full"> */}
          <div className="relative flex items-center justify-between px-0">
            <div className="max-w-full px-0 w-60">
              <a href="/#" className="flex w-2/3 py-2 px-0">
                <Image src={LogoLD} alt="logo" className="" />
              </a>
            </div>
            <div className="flex items-center px-0">
              <div>
                <button
                  // @click="navbarOpen = !navbarOpen"
                  // onClick={() => handleClick()}
                  onClick={() => handleClick()}
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-0 top-1/2 block -translate-y-1/2 px-0 py-0 lg:px-0 ring-primary focus:ring-2 lg:hidden`}
                >
                  {features.map((feature) => (
                    <feature.icon
                      className="h-full w-[30px]  block text-[#000]"
                      aria-hidden="true"
                    />
                  ))}
                  {/* <span className="relative my-[6px] block h-[2px] w-[25px] bg-[#000]"></span>
                  <span className="relative my-[6px] block h-[2px] w-[25px] bg-[#000]"></span>
                  <span className="relative my-[6px] block h-[2px] w-[25px] bg-[#000]"></span> */}
                </button>
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute right-0 top-full w-full bg-blue-300 lg:bg-transparent max-w-[250px] rounded-lg py-5 px-6 shadow lg:px-0 lg:relative lg:flex lg:w-full lg:max-w-full lg:shadow-none ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex lg:relative ">
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="#inicio"
                    >
                      Início
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="#beneficios"
                    >
                      Benefícios
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="sobre"
                    >
                      Quem somos
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="serviços"
                    >
                      Serviços
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="depoimentos"
                    >
                      Depoimentos
                    </ListItem>
                  </ul>
                </nav>
              </div>
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
        className={`hover:text-blue-700 text-gray-900 flex py-2 text-base font-bold lg:mx-4 lg:flex lg:justify-between lg:bg-gradient-to-r lg:from-blue-100 lg:via-blue-200 lg:to-blue-100 lg:bg-[length:50%_4px] lg:hover:bg-[length:100%_4px] lg:rounded-full lg:bg-no-repeat lg:bg-bottom duration-150 ${navItemStyles}`}
      >
        {children}
      </a>
    </li>
  </>
);
