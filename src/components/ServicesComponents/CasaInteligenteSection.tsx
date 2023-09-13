/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";

import {
  CpuChipIcon,
  SignalIcon,
  SpeakerWaveIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import ButtonCTA from "../ButtonCTA/Button";

const Image1 = require("/public/images/Services/CasaInteligente/Img_01.jpg");
const Image2 = require("/public/images/Services/CasaInteligente/Img_02.jpg");
const Image3 = require("/public/images/Services/CasaInteligente/Img_03.jpeg");
const Image4 = require("/public/images/Services/CasaInteligente/Img_04.jpeg");
const Image5 = require("/public/images/Services/CasaInteligente/Img_05.jpeg");
const Image6 = require("/public/images/Services/CasaInteligente/Img_06.jpeg");

const features = [
  {
    name: "Automação",
    description:
      "Automação Conectada: Controle dispositivos eletrônicos, como luzes, termostatos e eletrodomésticos, de qualquer lugar, através do nosso aplicativo intuitivo ou por meio de comandos de voz. Transforme sua casa em um ambiente adaptável às suas necessidades, economizando energia e dinheiro.",
    icon: CpuChipIcon,
  },
  {
    name: "Tecnologia de Áudio Multiroom",
    description:
      "Áudio Multiroom: histórias de música em alta qualidade em qualquer cômodo da sua casa. Com a tecnologia de áudio multiroom, você pode transmitir suas playlists favoritas em sincronia ou em diferentes ambientes, criando uma atmosfera perfeita para cada ocasião.",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Controle na Palma das mãos",
    description:
      "Controle de Ambientes: Personalize o ambiente da sua casa ajustando a iluminação, temperatura e cortinas automaticamente. Crie cenários para diferentes momentos do dia, como acordar, relaxar ou receber convidados. Tudo isso, com apenas um toque.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Segurança",
    description:
      "Segurança Inteligente: Mantenha sua casa protegida com nosso sistema de segurança inteligente. Receba notificações em tempo real sobre atividades suspeitas, controle de câmeras de segurança e tráfego de portas remotamente. Tenha paz de espírito, sabendo que sua casa está segura, mesmo quando você estiver longe",
    icon: ShieldCheckIcon,
  },
  {
    name: "Tecnologia de Integração",
    description:
      "Integração perfeita: Pronto para se integrar a outros dispositivos inteligentes, como assistentes de voz, bloqueios e sistemas de entretenimento. Crie uma experiência totalmente conectada e unificada ou controle de todos os seus dispositivos em um único aplicativo.",
    icon: SignalIcon,
  },
  {
    name: "Suporte",
    description:
      "Suporte e Atendimento Especializado: A equipe está disponível 24 horas por dia, 7 dias por semana para responder a todas as suas perguntas, fornece orientações e garantir que sua transição para uma casa inteligente seja suave e satisfatória.",
    icon: ChatBubbleLeftRightIcon,
  },
];

const CasaInteligenteSection = () => {
  return (
    <>
      <section
        className="pt-20 pb-16 bg-white dark:bg-gray-900"
        id="CasaInteligenteSection"
      >
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Casa Inteligente
          </h1>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <div className="inline-flex w-full justify-center md:justify-start items-center text-left">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
                Casa Inteligente
              </h1>
            </div>
            <h2 className="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Torne sua casa inteligente com os serviços da
              <span className="font-bold"> LD ELÉTRICA E TECNOLOGIA!</span>
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              Deseja transformar sua casa em um espaço inteligente, onde você
              pode controlar tudo com um simples toque? Apresentamos a você o
              LD, um assistente virtual perfeito para equipar sua casa com
              tecnologia de ponta e tornar sua vida mais fácil e conveniente.
            </p>
            <div className="py-8 md:py-0 flex justify-center items-center md:justify-start">
              <ButtonCTA></ButtonCTA>
            </div>
          </div>
          <Image
            width={992}
            height={678}
            className="w-full dark:hidden"
            src={Image2}
            alt="Imagem Casa Inteligente"
          />
          <Image
            width={992}
            height={678}
            className="w-full hidden dark:block"
            src={Image2}
            alt="Imagem Casa Inteligente"
          />
        </div>
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Benefícios de Casa Inteligente
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

export default CasaInteligenteSection;
