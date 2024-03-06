import React from "react";

const ButtonCTA = () => {
  return (
    <>
      <div className="flex items-center">
        <a
          href="https://wa.me/5585985747802?text=Ol%C3%A1%21+Vi+seu+n%C3%BAmero+pelo+site.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os."
          className="inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
        >
          Solicitar orçamento
          <div className="icon">
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </>
  );
};

export default ButtonCTA;
