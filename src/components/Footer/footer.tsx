/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const LogoLD = require("/public/images/logowhite.svg");

const Footer = () => {
  // codigo para atualizar o ano atual do texto do footer
  const anoAtual = new Date().getFullYear();

  return (
    <>
      <footer className="p-4 bg-[#071028] sm:p-4">
        <div className="px-4 sm:px-12 md:px-16 lg:px-20 mx-auto max-w-screen-xl">
          <div className="w-full md:flex md:justify-between">
            <div className="mx-auto md:mx-0 my-6 md:mb-0">
              <a
                href="#"
                className="flex md:block justify-center md:justify-start items-center"
              >
                <Image src={LogoLD} className="h-16 w-auto" alt="Logo" />
              </a>
            </div>
            <div className="w-full md:w-1/2 md:flex md:justify-end">
              <div className="mx-auto md:mx-0 my-6 md:mb-0">
                <p className="text-md mx-auto text-white text-md text-center md:text-justify">
                  <p className="w-full flex justify-center md:justify-start md:text-start text-gray-400">
                    Endereço:
                  </p>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/R.+Chico+Fran%C3%A7a,+727+-+Messejana,+Fortaleza+-+CE,+60871-100/@-3.8350671,-38.4968276,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7501d1625f6c7:0x897dc67a40abcba2!8m2!3d-3.8350671!4d-38.4968276!16s%2Fg%2F11cs727tkd?entry=ttu"
                    className="flex md:block justify-center md:justify-start items-center text-center md:text-justify"
                  >
                    Rua Chico França, 727 - Messejana, Fortaleza
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"></div>
            <div className="md:flex md:justify-between">
              <div className="mx-auto md:mx-0 my-6 md:mb-0">
                <div className="">
                  <p className="text-white text-md">
                    {/* mailto:contato@ldeletricaetecnologia.com.br?subject="Olá! Gostaria de mais informações."&body="Olá! Entrei em contato através do email que vi no site da LD. Por favor, gostaria de mais informações. Obrigado!"  */}
                    <p className="text-md mx-auto text-white text-md text-center md:text-justify">
                      <p className="w-full flex justify-center md:justify-start md:text-start text-gray-400">
                        Email:
                      </p>
                      <a
                        href="mailto:contato@ldeletricaetecnologia.com.br?subject=Olá! Gostaria de mais informações.&body=Olá! Entrei em contato através do email que vi no site da LD. Por favor, gostaria de mais informações. Obrigado!"
                        className="flex md:block justify-center md:justify-start items-center"
                      >
                        contato@ldeletricaetecnologia.com.br
                      </a>
                    </p>
                  </p>
                  <div className="flex justify-center md:justify-start md:block">
                    <p className="text-md mx-auto text-white text-md">
                      <p className="flex justify-start text-start text-white">
                        <p className="text-gray-400 pr-1">Tel:</p>
                        <a
                          href="https://wa.me/5585985747802?text=Ol%C3%A1%21+Vi+seu+n%C3%BAmero+pelo+site.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os."
                          className="flex text-center md:text-justify md:block justify-center md:justify-start items-center"
                        >
                          (85) 98574-7802
                        </a>
                      </p>
                    </p>
                  </div>
                  {/* <div className="flex justify-center md:justify-start md:block">
                    <p className="text-md mx-auto text-white text-md">
                      <p className="flex justify-start text-start text-white">
                        <p className="text-gray-400 pr-1">Tel:</p>
                        <a
                          href="https://wa.me/5585985747802?text=Ol%C3%A1%21+Vi+seu+n%C3%BAmero+pelo+site.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os."
                          className="flex text-center md:text-justify md:block justify-center md:justify-start items-center"
                        >
                          (85) 98574-7802
                        </a>
                      </p>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between sm:text-justify text-center">
            <span className="text-sm text-gray-500 sm:text-justify text-center dark:text-gray-400">
              © {anoAtual}{" "}
              <a
                href="https://ldeletricaetecnologia.com.br/"
                target="_blank"
                className="hover:underline"
              >
                LD Elétrica e Tecnologia
              </a>
              . Todos os direitos reservados.
            </span>
            <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
              <a
                href="https://www.instagram.com/ldeletrica_tecnologia/"
                className="ease-in-out duration-300 text-gray-500 hover:text-blue-900 dark:hover:text-blue-100"
              >
                {/* icone do instagram */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/5585985747802?text=Ol%C3%A1%21+Vi+seu+n%C3%BAmero+pelo+site.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os."
                className="ease-in-out duration-300 text-gray-500 hover:text-blue-900 dark:hover:text-blue-100"
                target="_blank"
              >
                {/* icone do whatsapp */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                  aria-hidden="true"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5585985747802?text=Ol%C3%A1%21+Vi+seu+n%C3%BAmero+pelo+site.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os."
                className="ease-in-out duration-300 text-gray-500 hover:text-blue-900 dark:hover:text-blue-100"
                target="_blank"
              >
                {/* icone do whatsapp */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                  aria-hidden="true"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
