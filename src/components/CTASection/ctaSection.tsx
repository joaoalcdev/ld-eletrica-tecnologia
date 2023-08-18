import React from "react";

const CTASection = () => {
  return (
    <>
      <div className="bg-blue-100 py-24 px-8 sm:12 md:16 lg:20">
        <section className="">
          <div className="py-8 px-0 mx-auto max-w-screen-xl sm:py-16 lg:px-0">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">
                Faça seu orçamento agora
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg">
                Entre em contato conosco e faça seu orçamento agora mesmo!
              </p>
              <a
                href="https://wa.me/5588993368262?text=Ol%C3%A1%21+Vi+seu+n%C3%BAmero+pelo+site.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os."
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CTASection;
