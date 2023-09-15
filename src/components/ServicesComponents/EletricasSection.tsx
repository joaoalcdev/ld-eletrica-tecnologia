/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";

import {
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ChartBarSquareIcon,
  GlobeAmericasIcon,
  HomeModernIcon,
  HomeIcon,
  BoltIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import ButtonCTA from "../ButtonCTA/Button";
import DividerComponent from "../Dividers/dividerComponent";

const Image1 = require("/public/images/Services/Eletricas/industrial_01.webp");
const Image4 = require("/public/images/Services/Eletricas/predial_01.webp");

const features = [
  {
    name: "Instalações Elétricas Modernas e Confiáveis",
    description:
      "Utilização de equipamentos elétricos avançados, automação, sensores inteligentes e controle digital em instalações modernas aprimora a eficiência energética e simplifica a integração de sistemas, permitindo a coleta de dados para análises e decisões mais informadas.",
    icon: HomeModernIcon,
  },
  {
    name: "Projetos Personalizados de Elétrica",
    description:
      "Capacidade de atender às necessidades exclusivas de cada instalação industrial, garantindo que o sistema elétrico seja eficiente, seguro e confiável. Isso não apenas melhora a produtividade e a eficiência operacional, mas também pode resultar em economia de energia e redução de custos a longo prazo.",
    icon: BoltIcon,
  },
  {
    name: "Atualizações Tecnológicas para Eficiência Energética",
    description:
      "Reduzir o consumo de energia, o que não apenas resulta em economia de custos a longo prazo, mas também contribui para a redução das emissões de carbono e para a sustentabilidade ambiental. Além disso, as atualizações tecnológicas podem melhorar a confiabilidade dos sistemas elétricos e reduzir os riscos de falhas elétricas.",
    icon: CpuChipIcon,
  },
  {
    name: "Manutenção Preventiva e Corretiva",
    description:
      "Avaliação e a manutenção de todos os aspectos da infraestrutura elétrica de uma instalação industrial. Inspeções regulares para identificar e corrigir potenciais pontos de falha, a atualização de equipamentos obsoletos ou danificados e o cumprimento rigoroso das normas de segurança elétrica.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Garantindo Conforto e Segurança Elétrica",
    description:
      "Criação de ambientes de trabalho e produção que sejam eficientes e agradáveis para os funcionários e operadores industriais. Isso inclui a instalação de sistemas de iluminação adequados, sistemas de climatização eficientes e o design de layouts elétricos que facilitem a operação.",
    icon: HomeIcon,
  },
  {
    name: "Foco na Sustentabilidade e Economia de Energia",
    description:
      "Implementação de estratégias e tecnologias que minimizam o impacto ambiental das operações industriais. Isso inclui a adoção de fontes de energia renovável, como painéis solares ou turbinas eólicas, a otimização dos processos para reduzir o desperdício de energia, e a implementação de medidas de conservação de recursos.",
    icon: GlobeAmericasIcon,
  },
];

const featuresSection2 = [
  {
    name: "Projeto e Instalação de Sistemas Elétricos Industriais",
    description:
      "Desenvolver um plano personalizado para atender às exigências de uma instalação industrial, abrangendo a avaliação das necessidades de energia, dimensionamento dos componentes elétricos, cumprimento de regulamentações de segurança e meio ambiente, e identificação de estratégias eficazes de distribuição de energia.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Diagnóstico Avançado de Falhas e Reparos Rápidos",
    description:
      "Aplicação de tecnologia avançada, incluindo equipamentos de teste e monitoramento, para identificar de maneira precisa e ágil problemas elétricos, como curtos-circuitos, sobrecargas, desgaste de componentes e falhas em sistemas de energia, evitando interrupções na indústria.",
    icon: BoltIcon,
  },
  {
    name: "Automação e Controle de Processos Elétricos",
    description:
      "Implementação de sistemas avançados que permitem o controle automatizado e inteligente de processos elétricos. Isso envolve a integração de sensores, dispositivos de controle e sistemas de software para monitorar e regular as operações elétricas em tempo real.",
    icon: CpuChipIcon,
  },
  {
    name: "Manutenção Preventiva para Minimizar Paradas",
    description:
      "A manutenção preventiva não apenas aumenta a confiabilidade dos sistemas elétricos, mas também ajuda a evitar paradas não planejadas, que podem resultar em perdas financeiras significativas devido a interrupções na produção.",
    icon: ShieldExclamationIcon,
  },
  {
    name: "Energizando Seu Crescimento Industrial.",
    description:
      "Compreendemos a importância crítica de sistemas elétricos confiáveis para suas operações. Seja uma fábrica, planta de produção ou instalação industrial, estamos equipados para lidar com os desafios elétricos mais complexos, permitindo que você se concentre no crescimento dos seus negócios.",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Consultoria Especializada Gratuita",
    description:
      "Coloque a sua indústria em uma trajetória de eficiência elétrica e sucesso. Agende uma consulta gratuita para discutir suas necessidades e objetivos. Nossa equipe irá fornecer recomendações personalizadas e um orçamento transparente.",
    icon: UserGroupIcon,
  },
];

const EletricasSection = () => {
  return (
    <>
      <section
        className="pt-20 pb-16 bg-white dark:bg-gray-900"
        id="EletricasSection"
      >
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Elétrica Predial
          </h1>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            width={992}
            height={678}
            className="w-full dark:hidden"
            src={Image4}
            alt="Imagem Casa Inteligente"
          />
          <Image
            width={992}
            height={678}
            className="w-full hidden dark:block"
            src={Image4}
            alt="Imagem Casa Inteligente"
          />
          <div className="mt-4 md:mt-0">
            <div className="inline-flex w-full justify-center md:justify-start items-center text-left">
              <h1 className="text-center md:text-left mb-4 text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
                Elétrica Predial
              </h1>
            </div>
            <h2 className="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Problemas Elétricos? <br></br> Nós Temos a Solução!
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              Seu prédio merece sistemas elétricos seguros e eficientes.
              Apresentamos a você a nossa equipe especializada em serviços de
              elétrica predial. Com anos de experiência e conhecimento técnico,
              estamos prontos para atender às suas necessidades elétricas com
              excelência.
            </p>
            <div className="flex justify-center items-center md:justify-start">
              <ButtonCTA></ButtonCTA>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Benefícios da Elétrica Predial
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
        <DividerComponent></DividerComponent>
        {/* section 2 - elétricas 2 */}
        <div className="inline-flex w-full justify-center items-center text-center mt-12">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Elétrica Industrial
          </h1>
        </div>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <div className="inline-flex w-full justify-center md:justify-start items-center text-left">
              <h1 className="text-center md:text-left mb-4 text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
                Elétrica Industrial
              </h1>
            </div>
            <h2 className="mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Serviços Especializados de Elétrica Industrial
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              Bem-vindo ao seu parceiro confiável em soluções elétricas
              industriais de ponta. Apresentamos nossa equipe de especialistas
              prontos para atender às necessidades elétricas específicas da sua
              indústria. Desde instalações até manutenção e otimização, estamos
              aqui para energizar o seu sucesso.
            </p>
            <div className="flex justify-center items-center md:justify-start">
              <ButtonCTA></ButtonCTA>
            </div>
          </div>
          <Image
            width={992}
            height={678}
            className="w-full dark:hidden"
            src={Image1}
            alt="Imagem Casa Inteligente"
          />
          <Image
            width={992}
            height={678}
            className="w-full hidden dark:block"
            src={Image1}
            alt="Imagem Casa Inteligente"
          />
        </div>
        <div className="inline-flex w-full justify-center items-center text-center">
          <h1 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-blue-200 dark:text-blue-300">
            Benefícios da Elétrica Industrial
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

export default EletricasSection;
