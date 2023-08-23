import React from "react";

import ButtonCTA from "../ButtonCTA/Button";

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
              <div className="mt-6 flex w-full justify-center items-center">
                <ButtonCTA></ButtonCTA>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CTASection;
