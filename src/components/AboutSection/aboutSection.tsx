/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

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
              <a
                href="https://wa.me/5588993368262?text=Ol%C3%A1%21+Vi+seu+n%C3%BAmero+pelo+site.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os."
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Solicitar serviços
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Image
                className="w-full rounded-lg"
                src="/images/background_image.jpg"
                width={50}
                height={50}
                alt="office content 1"
              />
              <Image
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="/images/background_image.jpg"
                width={50}
                height={50}
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
