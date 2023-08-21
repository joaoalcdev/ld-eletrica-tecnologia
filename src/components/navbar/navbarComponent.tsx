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
          <div className="relative flex items-center justify-between px-0">
            <div className="max-w-full px-0 w-60">
              <a href="/#" className="flex w-2/3 py-2 px-0">
                <Image src={LogoLD} alt="logo" className="" />
              </a>
            </div>
            <div className="flex items-center px-0">
              <div>
                <button
                  onClick={() => handleClick()}
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-0 top-1/2 block -translate-y-1/2 px-0 py-0 lg:px-0 lg:hidden`}
                >
                  {features.map((feature) => (
                    <feature.icon
                      className="h-full w-[30px]  block text-[#000]"
                      aria-hidden="true"
                    />
                  ))}
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-0 top-full w-full bg-blue-300 lg:bg-transparent max-w-[250px] rounded-lg py-5 px-6 shadow lg:px-0 lg:relative lg:flex lg:w-full lg:max-w-full lg:shadow-none ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex lg:relative ">
                    <ListItem navItemStyles="" NavLink="#inicio">
                      Início
                    </ListItem>
                    <ListItem navItemStyles="" NavLink="#beneficios">
                      Benefícios
                    </ListItem>
                    <ListItem navItemStyles="" NavLink="#sobre">
                      Quem somos
                    </ListItem>
                    <ListItem
                      navItemStyles="dropdown inline-block relative"
                      NavLink="#serviços"
                    >
                      <div>
                        <button className="font-semibold rounded inline-flex items-center">
                          <span className="mr-1">Serviços</span>
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                          </svg>
                        </button>
                        <ul className="b-none b-0 text-center whitespace-nowrap rounded-md bg-blue-200 dropdown-menu absolute hidden py-4">
                          <li className="flex text-center justify-center items-center py-2">
                            <ListItem navItemStyles="" NavLink="#clientes">
                              Câmeras de Segurança
                            </ListItem>
                          </li>
                          <li className="flex text-center justify-center items-center py-2">
                            <ListItem
                              navItemStyles="dropdown_sub inline-block relative"
                              NavLink="#clientes"
                            >
                              <div>
                                <button className="font-semibold rounded inline-flex items-center">
                                  <span className="mr-1">Cercas</span>
                                  <svg
                                    className="hover:fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                  </svg>
                                </button>
                                <ul className="b-none b-0 text-center whitespace-nowrap rounded-md bg-blue-200 dropdown_sub-menu absolute hidden py-4">
                                  <li className="flex text-center justify-center items-center py-2">
                                    <ListItem
                                      navItemStyles=""
                                      NavLink="#clientes"
                                    >
                                      Cercas Elétricas
                                    </ListItem>
                                  </li>
                                  <li className="flex text-center justify-center items-center py-2">
                                    <ListItem
                                      navItemStyles=""
                                      NavLink="#clientes"
                                    >
                                      Cercas Prediais
                                    </ListItem>
                                  </li>
                                  <li className="flex text-center justify-center items-center py-2">
                                    <ListItem
                                      navItemStyles=""
                                      NavLink="#clientes"
                                    >
                                      Cercas Industriais
                                    </ListItem>
                                  </li>
                                </ul>
                              </div>
                            </ListItem>
                          </li>
                          <li className="flex text-center justify-center items-center py-2">
                            <ListItem navItemStyles="" NavLink="#clientes">
                              Motores
                            </ListItem>
                          </li>
                          <li className="flex text-center justify-center items-center py-2">
                            <ListItem navItemStyles="" NavLink="#clientes">
                              Ar Condicionado
                            </ListItem>
                          </li>
                        </ul>
                      </div>
                    </ListItem>
                    <ListItem navItemStyles="" NavLink="#clientes">
                      Clientes
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
        className={`hover:text-blue-600 text-gray-900 lg:text-black flex py-2 text-base font-bold lg:mx-4 lg:flex lg:justify-between lg:bg-gradient-to-r lg:from-blue-100 lg:via-blue-200 lg:to-blue-100 lg:bg-[length:50%_4px] lg:hover:bg-[length:100%_4px] lg:rounded-full lg:bg-no-repeat lg:bg-bottom duration-150 ${navItemStyles}`}
      >
        {children}
      </a>
    </li>
  </>
);
