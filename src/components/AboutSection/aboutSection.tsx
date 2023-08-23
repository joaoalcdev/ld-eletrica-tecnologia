/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

import ButtonCTA from "../ButtonCTA/Button";

const AboutSection = () => {
  return (
    <>
      <div className="bg-blue-100 py-24" id="sobre">
        <section className="px-4 sm:px-12 md:px-16 lg:px-20 flex relative h-full lg:h-screen bg-blue-100">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-black sm:text-lg ">
              <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-black">
                LD Elétrica e Tecnologia
              </h2>
              <p className="mb-4 text-justify">
                Somos especializados em fornecer serviços de elétrica e
                tecnologia de alta qualidade que atendem às suas necessidades.
              </p>
              <p className="mb-4 text-justify">
                Com nossos profissionais qualificados e anos de experiência,
                estamos comprometidos em oferecer excelência em cada projeto que
                realizamos.
              </p>
              <ButtonCTA></ButtonCTA>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Image
                className="w-full rounded-lg"
                src="/images/background_image.jpg"
                width={500}
                height={500}
                alt="office content 1"
              />
              <Image
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="/images/background_image.jpg"
                width={500}
                height={500}
                alt="office content 2"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutSection;
