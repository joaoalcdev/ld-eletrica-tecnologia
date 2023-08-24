/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";

import ButtonCTA from "../ButtonCTA/Button";

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
              create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 text-center md:text-left font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <div className="flex justify-center items-center md:justify-start">
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
      </section>
    </>
  );
};

export default CasaInteligenteSection;
