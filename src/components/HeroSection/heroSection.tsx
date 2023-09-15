/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const current = "currentColor";
const newColorSvg = "#ebf8ee";

import Navbar from "../navbar/navbarComponent";
import ButtonCTA from "../ButtonCTA/Button";
import CarouselImages from "./CarouselImages";
// import CarouselImages from "./Carousel";

const HeroSection = () => {
  return (
    <>
      <div className="">
        <div className="h-full md:h-screen md:max-h-full relative flex flex-col-reverse sm:py-0 md:pt-0 md:flex-col md:pb-0 bg-blue-200 pb-24">
          <div className="bg-black inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-0 mx-auto md:px-0 md:pr-0 md:mb-0 md:mx-0 md:w-7/12 md:max-w-full md:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 md:block"
              viewBox="0 0 100 100"
              fill={newColorSvg}
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            {/* <Image
              className="object-cover w-full h-56 rounded shadow-md md:rounded-none md:shadow-none md:h-96 md:h-full"
              src={ImageHero}
              alt=""
            /> */}
            <CarouselImages></CarouselImages>
          </div>
          <div className="px-6 sm:px-12 md:px-16 lg:px-20 relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 md:pl-4 md:max-w-screen-xl">
            <Navbar></Navbar>
            <div className="mb-16 md:my-40 md:max-w-md md:pr-5">
              <h2 className="tracking-tighter text-left lg:text-left mb-5 font-sans text-2xl font-bold text-gray-900 sm:text-3xl ">
                Não deixe sua tranquilidade ao acaso, invista em segurança
                eletrônica confiável e eficiente. Proteja o que é importante para
                você. Entre em contato conosco agora mesmo!
              </h2>
              {/* <p className="text-left pr-5 mb-5 text-base text-gray-700 md:text-md"> </p> */}
              <ButtonCTA></ButtonCTA>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
