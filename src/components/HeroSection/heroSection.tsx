/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const current = "currentColor";
const newColorSvg = "#ebf8ee";
const ImageHero = require("/public/images/background_image.jpg");

import Navbar from "../navbar/navbarComponent";
import DividerComponent from "../Dividers/dividerComponent";

const HeroSection = () => {
  return (
    <>
      <div className="h-full md:h-screen md:max-h-full relative flex flex-col-reverse sm:py-0 md:pt-0 md:flex-col md:pb-0 bg-blue-100">
        <div className="bg-black inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-0 mx-auto md:px-0 md:pr-0 md:mb-0 md:mx-0 md:w-7/12 md:max-w-full md:absolute xl:px-0">
          {/* <div className="bg-black inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-0 mx-auto md:px-0 md:pr-0 md:mb-0 md:mx-0 md:w-7/12 md:max-w-full md:absolute xl:px-0"> */}
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 md:block"
            viewBox="0 0 100 100"
            fill={newColorSvg}
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <Image
            className="object-cover w-full h-56 rounded shadow-md md:rounded-none md:shadow-none md:h-96 md:h-full"
            src={ImageHero}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-0 mx-auto md:px-0 md:pl-4 md:max-w-screen-xl">
          <Navbar></Navbar>
          <div className="mb-16 md:my-40 md:max-w-md md:pr-5">
            <p className="inline-block px-3 pt-[0.2rem] mb-4 text-xs font-semibold  text-gray-800 uppercase rounded-full bg-blue-400">
              LOREM IPS
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Lorem ipsum dolor sit
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-blue-400">is real</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-md">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque quae.
              explicabo.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                Lorem Ipsum
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
              >
                LOREM IPSU
              </a>
            </div>
          </div>
        </div>
      </div>
      <DividerComponent></DividerComponent>
    </>
  );
};

export default HeroSection;
