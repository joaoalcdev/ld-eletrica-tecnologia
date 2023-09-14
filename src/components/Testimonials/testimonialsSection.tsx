/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Image from "next/image";

import BG_01 from "../../../public/testimonials/recautec.png";
import BG_02 from "../../../public/testimonials/extrafarma.png";
import BG_03 from "../../../public/testimonials/gov_ceara.png";
import BG_04 from "../../../public/testimonials/odontocenter.png";
import BG_05 from "../../../public/testimonials/pref_russas.png";
import BG_06 from "../../../public/testimonials/recautec.png";

const TestimonialsSection = () => {
  return (
    <>
      <section className="pt-20 pb-16 bg-white" id="clientes">
        <div className="flex justity-center items-center py-auto my-auto container mx-auto px-5 lg:px-32">
          <div className="w-full -m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/3 h-full flex-wrap justify-center items-center my-auto">
              <div className="w-2/3 h-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={BG_01}
                />
              </div>
            </div>
            <div className="flex w-1/3 h-full flex-wrap justify-center items-center my-auto">
              <div className="w-2/3 h-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={BG_02}
                />
              </div>
            </div>
            <div className="flex w-1/3 h-full flex-wrap justify-center items-center my-auto">
              <div className="w-2/3 h-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={BG_03}
                />
              </div>
            </div>
            <div className="flex w-1/3 h-full flex-wrap justify-center items-center my-auto">
              <div className="w-2/3 h-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={BG_04}
                />
              </div>
            </div>
            <div className="flex w-1/3 h-full flex-wrap justify-center items-center my-auto">
              <div className="w-2/3 h-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={BG_05}
                />
              </div>
            </div>
            <div className="flex w-1/3 h-full flex-wrap justify-center items-center my-auto">
              <div className="w-2/3 h-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={BG_06}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
