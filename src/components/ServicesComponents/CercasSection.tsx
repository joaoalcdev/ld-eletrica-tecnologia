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
      "Desenvolvida com a mais alta qualidade, nossa cerca elétrica é resistente, durável e eficiente. Com materiais de primeira linha, ela é capaz de suportar as mais adversas condições climáticas, protegendo sua propriedade 24 horas por dia, 7 dias por semana.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Nome 02",
    description:
      "A cerca elétrica da LD Elétrica e Tecnologia possui alarmes e sensores inteligentes para detectar invasões. Contato com a cerca resulta em um leve choque dissuasivo. Nossos profissionais treinados seguem rigorosos protocolos de segurança, assegurando tranquilidade sua e de outros.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Nome 03",
    description:
      "A LD Elétrica e Tecnologia oferece um sistema de monitoramento remoto, permitindo que você acompanhe a segurança da sua propriedade a qualquer momento, de qualquer lugar. Com nosso aplicativo intuitivo, você poderá receber notificações em tempo real e controlar seu sistema de segurança com facilidade.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Nome 04",
    description:
      "Indicada tanto para residências como para estabelecimentos comerciais, a cerca elétrica é a escolha ideal para quem busca tranquilidade e proteção. Nosso sistema de instalação é rápido e eficiente, garantindo a segurança do seu patrimônio em pouco tempo.",
    icon: BoltIcon,
  },
  {
    name: "Nome 05",
    description:
      "Nossa equipe de profissionais altamente qualificados está pronta para fornecer todo o suporte necessário, desde a escolha do modelo até a instalação e manutenção periódica da cerca elétrica. Conte com a gente para proteger o que é mais importante para você!",
    icon: BoltIcon,
  },
  {
    name: "Nome 06",
    description:
      "Priorize a segurança da sua propriedade. Contate-nos para um orçamento gratuito. A LD oferece a solução ideal para sua tranquilidade e proteção, com a melhor cerca elétrica do mercado.",
    icon: BoltIcon,
  },
];

const featuresSection2 = [
  {
    name: "Nome 01",
    description:
      "Com seu design inovador e cortantes, a cerca concertina é extremamente eficaz para evitar que intrusos tenham acesso ao seu imóvel. Seus arames com lâminas afiadas são um poderoso dissuasor, proporcionando uma barreira de segurança confiável e impenetrável.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Nome 02",
    description:
      "A instalação da cerca concertina da LD é rápida e eficiente, realizada por uma equipe de profissionais especializados. O processo é ágil, garantindo a segurança de sua propriedade em pouco tempo.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Nome 03",
    description:
      "Além de sua função principal de segurança, a cerca concertina também possui um design moderno que se integra perfeitamente à estética de qualquer imóvel. Sua presença é um sinal claro de que sua propriedade está protegida.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Nome 04",
    description:
      "A manutenção da cerca concertina é simples e descomplicada, exigindo poucos cuidados ao longo do tempo. Dessa forma, você terá uma barreira de segurança duradoura e eficiente por muitos anos.",
    icon: BoltIcon,
  },
  {
    name: "Nome 05",
    description:
      "Indicada tanto para residências como para estabelecimentos comerciais, a cerca concertina da LD oferece uma solução completa de segurança. Proteja seu patrimônio e tenha tranquilidade em todos os momentos!",
    icon: BoltIcon,
  },
  {
    name: "Nome 06",
    description:
      "Entre em contato conosco agora mesmo e solicite um orçamento gratuito. Nossa equipe estará pronta para oferecer todo o suporte necessário, desde a escolha do modelo ideal até a instalação completa da cerca concertina. Confie na LD Elétrica e Tecnologia para a segurança do seu imóvel!",
    icon: BoltIcon,
  },
];

const CercasSection = () => {
  return (
    <>
      <section
        className="pt-20 pb-16 bg-white dark:bg-gray-900"
        id="CercasSection"
      >
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Cercas
          </h1>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"  id="CercasEletricas">
          <div className="mt-4 md:mt-0">
            <div className="inline-flex w-full justify-center md:justify-start items-center text-left">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
                Cercas Elétricas
              </h1>
            </div>
            <h2 className="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Proteja o seu patrimônio com a melhor cerca elétrica do mercado!
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              A cerca elétrica inovadora da LD Elétrica e Tecnologia proporciona
              segurança completa para sua propriedade. Com vasta experiência e
              tecnologia avançada, asseguramos máxima proteção contra invasões
              indesejadas.
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
            Benefícios de Cercas Elétricas
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
        <DividerComponent></DividerComponent>
        {/* cercas concertinas */}
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"  id="CercasConcertinas">
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
                Cercas Concertinas
              </h1>
            </div>
            <h2 className="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Assegure proteção máxima com a cerca concertina da LD Elétrica e
              Tecnologia para sua propriedade.
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              Priorizamos sua segurança ao fornecer a melhor solução: a durável
              cerca concertina. Feita com materiais de alta resistência, é ideal
              para proteger sua propriedade contra invasões.
            </p>
            <div className="flex justify-center items-center md:justify-start">
              <ButtonCTA></ButtonCTA>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Benefícios de Cercas Concertinas
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

export default CercasSection;
