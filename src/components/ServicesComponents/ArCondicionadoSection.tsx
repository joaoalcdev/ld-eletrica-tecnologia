/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";

import {
  WrenchScrewdriverIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import ButtonCTA from "../ButtonCTA/Button";

const Image1 = require("/public/images/Services/ArCondicionado/Img_01.webp");

const features = [
  {
    name: "Excelência em Ar-Condicionado com Técnicos Especializados",
    description:
      "Profissionais especializados: Nossa equipe de técnicos altamente interessados ​​garantem um atendimento de excelência com habilidades para resolver qualquer problema que possa surgir no seu aparelho de ar-condicionado.",
    icon: UserGroupIcon,
  },
  {
    name: "Reparo Rápido e Eficiente para seu Ar-Condicionado",
    description:
      "Serviço ágil e rápido: você não precisa esperar dias para ter uma solução. Nossa equipe trabalha de forma eficiente e ágil, para que você tenha seu ar-condicionado em perfeito funcionamento o mais rápido possível.",
    icon: BoltIcon,
  },
  {
    name: "Qualidade Garantida a Preços Justos com a LD",
    description:
      "Preço justo: Sabemos da importância de oferecer um serviço de qualidade com um preço que caiba no seu bolso. Com a LD, você tem a certeza de um excelente trabalho.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Instalação, Reparação e Manutenção Preventiva de Ar-Condicionado",
    description:
      "Instalação e manutenção preventiva: Além de realizar a instalação e reparação de ar-condicionado, oferecemos também serviços de manutenção preventiva. Manter seu ar-condicionado no bom estado é essencial para garantir o seu bom estado.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Atendimento Personalizado: Soluções Sob Medida Para Você",
    description:
      "Atendimento personalizado: Aqui cada cliente é único e merece um atendimento especial. Estamos sempre prontos para ouvir suas necessidades e oferecer soluções pessoais.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Conforto a Qualquer Hora: Serviço de Qualidade e Acessível 24/7",
    description:
      "Não deixe o calor te incomodar! Nos escolha e tenha a garantia de um serviço de qualidade com preços acessíveis. Entre em contato conosco agora mesmo e agende uma visita técnica! Estamos disponíveis 24 horas por dia, 7 dias por semana.",
    icon: ClockIcon,
  },
];

const ArCondicionadoSection = () => {
  return (
    <>
      <section
        className="pt-20 pb-16 bg-white dark:bg-gray-900"
        id="ArCondicionadoSection"
      >
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Ar-Condicionado
          </h1>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            width={992}
            height={678}
            className="w-full dark:hidden"
            src={Image1}
            alt="Ar-condicionado imagem"
          />
          <Image
            width={992}
            height={678}
            className="w-full hidden dark:block"
            src={Image1}
            alt="Ar-condicionado imagem"
          />
          <div className="mt-4 md:mt-0">
            <div className="inline-flex w-full justify-center md:justify-start items-center text-left">
              <h1 className="text-center md:text-left mb-4 text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
                Ar-condicionado
              </h1>
            </div>
            <h2 className="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              O melhor serviço de ar-condicionado à um clique de distância!
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              Você sente calor, abafamento e precisa de uma solução rápida para
              deixar o ambiente mais agradável? Não se preocupe! A LD ELÉTRICA E
              TECNOLOGIA está aqui para te ajudar! Oferecemos o melhor serviço
              de instalação, manutenção e reparo.
            </p>
            <div className="flex justify-center items-center md:justify-start">
              <ButtonCTA></ButtonCTA>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Benefícios de Ar-condicionado
          </h1>
        </div>
        <div className="px-8 w-full max-w-full md:px-32 lg:px-48 mx-auto sm:max-w-2xl mt-16 sm:mt-12 lg:mt-8 lg:max-w-full">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((features) => (
              <div key={features.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <features.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {features.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-justify text-white">
                  {features.description}
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

export default ArCondicionadoSection;
