import React from "react";
import {
  HandThumbUpIcon,
  SparklesIcon,
  StarIcon,
  MapPinIcon,
  CheckBadgeIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import DividerComponent from "../Dividers/dividerComponent";

const features = [
  {
    name: "Confiança",
    description:
      "Construir confiança é essencial para nós. Conte conosco para soluções confiáveis ​​adaptadas às suas necessidades e na entrega consistente de resultados excepcionais",
    icon: HandThumbUpIcon,
  },
  {
    name: "Segurança",
    description:
      "Sua segurança é nossa prioridade máxima. Nossos profissionais são treinados para seguir os mais rigorosos protocolos de segurança em cada trabalho que realizamos, garantindo tranquilidade para você e para todos ao seu redor.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Qualidade",
    description:
      "A qualidade é a base de cada projeto que realizamos. Desde os materiais que utilizamos até a execução cuidadosa, estamos comprometidos em entregar resultados que superem suas expectativas e mantenham nossos padrões elevados.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Experiência e Agilidade",
    description:
      "Nossa equipe traz consigo anos de experiência combinados com agilidade excepcional. Isso significa que podemos resolver seus problemas de forma eficiente e com um toque de maestria que só a experiência pode proporcionar.",
    icon: BoltIcon,
  },
];

const AdvantageSection = () => {
  return (
    <>
      <div className="px-2 sm:px-12 md:px-16 lg:px-20 py-24 lg:pt-24 lg:pb-24 bg-white">
        <div
          className="flex relative h-full my-0 bg-white sm:py-0"
          id="beneficios"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="whitespace-normal mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base text-center font-semibold leading-7 text-blue-600">
                Porque nos escolher
              </h2>
              <p className="mt-2 text-3xl font-bold text-center md:text-center tracking-tight text-gray-900 sm:text-4xl">
                Não somos apenas prestadores de serviços, somos parceiros
                comprometidos em oferecer soluções excepcionais
              </p>
              <p className="mt-5 text-lg text-justify md:text-center leading-8 text-gray-600">
                Nossa dedicação vai além do óbvio, acreditamos que nossa
                abordagem única é o que nos diferencia. Algumas razões pelas
                quais somos a{" "}
                <span className="text-blue-500">melhor escolha</span> para suas
                necessidades em serviços elétricos e tecnológicos.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-justify text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvantageSection;
