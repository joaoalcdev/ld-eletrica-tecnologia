/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";

import ButtonCTA from "../ButtonCTA/Button";

import {
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  BellAlertIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const featuresSection2 = [
  {
    name: "Tecnologia de Ponta",
    description:
      "Nossas câmeras de segurança utilizam tecnologia mais avançada, garantindo imagens nítidas e de alta qualidade, mesmo em condições de pouca iluminação. Assim, você sempre terá uma visão clara do que está acontecendo.",
    icon: CpuChipIcon,
  },
  {
    name: "Monitoramento em Tempo Real",
    description:
      "Com nossos sistemas de monitoramento, você pode acessar as imagens de suas câmeras em tempo real, a qualquer momento e em qualquer lugar. Esteja sempre conectado e tenha tranquilidade, sabendo que sua casa, loja ou escritório estão protegidos",
    icon: VideoCameraIcon,
  },
  {
    name: "Alertas de Segurança",
    description:
      "Nossas câmeras de segurança possuem recursos inteligentes que enviam alertas automáticos para o seu smartphone ou dispositivo conectado sempre que detectem movimentos suspeitos. Desta forma, você será informado imediatamente sobre qualquer atividade indesejável.",
    icon: BellAlertIcon,
  },
  {
    name: "Instalação Personalizada",
    description:
      "Nossa equipe especializada irá realizar uma análise completa do seu espaço e fornecer uma solução personalizada para atender às suas necessidades específicas de segurança. Com instalação eficiente e profissional.",
    icon: BoltIcon,
  },
  {
    name: "Serviço de Instalação e Manutenção",
    description:
      "Nossa equipe altamente capacitada e experiente está pronta para instalar e configurar seu sistema de câmeras de segurança.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Suporte",
    description:
      "Suporte técnico especializado disponível para auxiliar com qualquer dúvida.",
    icon: ChatBubbleLeftRightIcon,
  },
];

const CameraSection = () => {
  return (
    <>
      <section
        className="pt-20 pb-16 bg-white dark:bg-gray-900"
        id="CameraSection"
      >
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Câmeras de Segurança
          </h1>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            width={100}
            height={100}
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <Image
            width={100}
            height={100}
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <div className="inline-flex w-full justify-center md:justify-start items-center text-left">
              <h1 className="text-center md:text-left mb-4 text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
                Câmeras de Segurança
              </h1>
            </div>
            <h2 className="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Proteja o que é importante com nosso serviço de Câmeras de
              segurança
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              Mantenha-se seguro com a mais avançada tecnologia de câmeras de
              segurança, oferecida por nós! Nossa equipe é especializada em
              fornecer soluções confiáveis ​​e eficientes para proteger seus
              pertences.
            </p>
            <div className="flex justify-center items-center md:justify-start">
              <ButtonCTA></ButtonCTA>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Benefícios das Câmeras de Segurança
          </h1>
        </div>
        <div className="px-8 w-full max-w-full md:px-32 lg:px-48 mx-auto sm:max-w-2xl mt-16 sm:mt-12 lg:mt-8 lg:max-w-full">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {featuresSection2.map((featuresSection2) => (
              <div key={featuresSection2.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <featuresSection2.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {featuresSection2.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-justify text-white">
                  {featuresSection2.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="my-12 flex w-full justify-center items-center">
            <ButtonCTA></ButtonCTA>
          </div>
        </div>
      </section>
    </>
  );
};

export default CameraSection;
