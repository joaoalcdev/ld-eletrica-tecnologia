/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ButtonCTA from "@/components/ButtonCTA/Button";

import React from "react";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Câmeras de Segurança", href: "#CameraSection" },
  { name: "Cercas", href: "#CercasSection" },
  { name: "Motores", href: "#MotoresSection" },
  { name: "Ar Condicionado", href: "#ArCondicionadoSection" },
  { name: "Casa Inteligente", href: "#CasaInteligenteSection" },
  { name: "Elétricas", href: "#EletricasSection" },
];

const Logo = require("/public/images/logo.svg");

export default function HeroSection() {
  // const [open, setOpen] = useState(false);
  // close the mobile menu when you click on a link
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
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">LD Elétrica e Tecnologia</span>
                <Image
                  className="h-16 w-auto"
                  width={100}
                  height={100}
                  src={Logo}
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <span aria-hidden="true"></span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">LD Elétrica e Tecnologia</span>
                  <Image
                    className="h-16 w-auto"
                    width={100}
                    height={100}
                    src={Logo}
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => handleClick()}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#09529f] to-[#086cc2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Fale conosco no{" "}
                <a
                  href="https://wa.me/5585985747802?text=Ol%C3%A1%21+Vi+seu+n%C3%BAmero+pelo+site.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os."
                  className="font-semibold text-blue-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  WhatsApp <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Conheça mais sobre os serviços da LD Elétrica e Tecnologia
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Aqui está vários serviços que nós fornecemos aos clientes. Se
                estiver interessado, solicite um orçamento e se tiver dúvidas,
                entre em contato conosco através do botão abaixo.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <ButtonCTA></ButtonCTA>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#09529f] to-[#086cc2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
