/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";

import {
  HandThumbUpIcon,
  SparklesIcon,
  StarIcon,
  MapPinIcon,
  CheckBadgeIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import ButtonCTA from "../ButtonCTA/Button";
import DividerComponent from "../Dividers/dividerComponent";

const features = [
  {
    name: "Nome 01",
    description:
      "Desenvolvido com tecnologia de ponta e materiais de alta qualidade, nosso motor de portão é potente, durável e silencioso. Com ele, você poderá abrir e fechar seu portão com o simples toque de um botão, proporcionando uma experiência tranquila e conveniente.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Nome 02",
    description:
      "Pensando na sua segurança, o motor de portão conta com recursos avançados, como o sistema de lâmpada de LED integrada. Além de iluminar a área durante a noite, essa funcionalidade oferece maior visibilidade, inibindo possíveis invasões.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Nome 03",
    description:
      "E não para por aí! Nosso motor de portão também é compatível com tecnologia de automação residencial, permitindo que você controle o acesso ao seu imóvel de qualquer lugar, através do seu smartphone. Abra e feche o portão remotamente, monitore quem entra e sai e agende horários de acesso, tudo de forma prática e segura.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Nome 04",
    description:
      "Nossa equipe de especialistas garante a rápida instalação do motor de portão, assegurando desempenho e segurança. Oferecemos manutenção periódica para mantê-lo em ótimas condições. A cerca elétrica é ideal para residências e comércios, com instalação eficaz e rápida, garantindo a segurança de seu patrimônio.",
    icon: BoltIcon,
  },
  {
    name: "Nome 05",
    description:
      "Seja em residências ou em estabelecimentos comerciais, o motor de portão da LD é a escolha perfeita para quem busca praticidade, segurança e conforto. A sua satisfação é a nossa prioridade!",
    icon: BoltIcon,
  },
  {
    name: "Nome 06",
    description:
      "Não perca mais tempo! Entre em contato conosco agora mesmo e solicite um orçamento gratuito. A LD Elétrica e Tecnologia tem o motor de portão ideal para tornar a sua rotina mais fácil e segura. Experimente as vantagens da automação e desfrute de um portão automatizado de qualidade superior!",
    icon: BoltIcon,
  },
];

const MotoresSection = () => {
  return (
    <>
      <section
        className="pt-20 pb-16 bg-white dark:bg-gray-900"
        id="MotoresSection"
      >
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Portões
          </h1>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <div className="inline-flex w-full justify-center md:justify-start items-center text-left">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
                Portões
              </h1>
            </div>
            <h2 className="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Automatize o acesso à sua propriedade com o nosso poderoso motor
              de portão!
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              Diga adeus aos portões pesados e demorados de abrir e fechar. Com
              o motor de portão da LD, você terá toda a praticidade e segurança
              que precisa em um único produto.
            </p>
            <div className="py-8 md:py-0 flex justify-center items-center md:justify-start">
              <ButtonCTA></ButtonCTA>
            </div>
          </div>
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
        </div>
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Benefícios dos nossos motores
          </h1>
        </div>
        <div className="px-8 w-full max-w-full md:px-32 lg:px-48 mx-auto sm:max-w-2xl mt-16 sm:mt-12 lg:mt-8 lg:max-w-full">
          <dl className="grid max-w-xl grid-cols-1 gap-x-0 sm:gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-justify text-white">
                  {feature.description}
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

export default MotoresSection;
