/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Image from "next/image";

import BG_01 from "../../../public/images/background_image.jpg";
import BG_02 from "../../../public/testimonials/extrafarma.png";
import BG_03 from "../../../public/testimonials/gov_ceara.png";
import BG_04 from "../../../public/testimonials/odontocenter.png";
import BG_05 from "../../../public/testimonials/pref_russas.png";
import BG_06 from "../../../public/testimonials/recautec.png";

const Image_BG_01 = () => {
  return (
    <>
      <div className="relative h-64 w-full">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_01}
          alt="bg_01"
        />
      </div>
    </>
  );
};
const Image_BG_02 = () => {
  return (
    <>
      <div className="relative h-64 w-full">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_02}
          alt="bg_01"
        />
      </div>
    </>
  );
};
const Image_BG_03 = () => {
  return (
    <>
      <div className="relative h-64 w-full">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_03}
          alt="bg_01"
        />
      </div>
    </>
  );
};
const Image_BG_04 = () => {
  return (
    <>
      <div className="relative h-64 w-full">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_04}
          alt="bg_01"
        />
      </div>
    </>
  );
};
const Image_BG_05 = () => {
  return (
    <>
      <div className="relative h-64 w-full">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_05}
          alt="bg_01"
        />
      </div>
    </>
  );
};
const Image_BG_06 = () => {
  return (
    <>
      <div className="relative h-64 w-full">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={BG_06}
          alt="bg_01"
        />
      </div>
    </>
  );
};

const IMAGES = [
  <Image_BG_01 />,
  <Image_BG_02 />,
  <Image_BG_03 />,
  <Image_BG_04 />,
  <Image_BG_05 />,
  <Image_BG_06 />,
];

export const InfiniteSlider = () => {
  return (
    <>
      <div className="relative mx-auto w-11/12 overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]">
          {IMAGES.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {IMAGES.map((logo, index) => (
            <div
              className="bg-red-500 slide flex w-full items-center justify-center text-black"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const TestimonialsSection = () => {
  return (
    <>
      <div className="flex relative flex-row w-full w-max-full">
        {/* <InfiniteSlider /> */}
        <div className="slider">
          <div className="slide-track">
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
