/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="bg-blue-100 py-24">
        <section className="px-4 sm:px-12 md:px-16 lg:px-20 flex relative h-full lg:h-screen bg-blue-100">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-black sm:text-lg ">
              <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-black">
                Nós somos uma empresa...
              </h2>
              <p className="mb-4">
                We are strategists, designers and developers. Innovators and
                problem solvers.
              </p>
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="/images/background_image.jpg"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="/images/background_image.jpg"
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
