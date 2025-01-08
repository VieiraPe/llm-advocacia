import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative text-white mt-50">
      <div className="absolute top-0 left-0 w-full overflow-hidden ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-20 w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block fill-black"
          ></path>
        </svg>
      </div>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 text-center gap-20 p-20">
        <div className="flex flex-col items-center md:items-start gap-5">
          <img src={logo} alt="Imagem logo LLM-Advocacia" className="w-40 " />
        </div>
        <div className="flex flex-col gap-5">
          <ul>
            <li className="text-[22px] list-none font-semibold text-slate-300 py-2 uppercase">
              Menu
            </li>
            <li className="my-4 list-none">
              <a
                className="text-white text-lg  hover:border-red-600 hover:text-slate-300 transform hover:scale-150  transition-all duration-150 ease-in-out   "
                href=""
              >
                Areas de atuação
              </a>
            </li>
            <li className="my-4 list-none">
              <a
                className="text-white text-lg  hover:text-slate-300 transform  duration-300    "
                href=""
              >
                Sobre nós
              </a>
            </li>
            <li className="my-4 list-none">
              <a
                className="text-white text-lg hover:text-slate-300 transform   duration-150    "
                href=""
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start gap-5">
          <ul>
            <li className="text-[22px] list-none font-semibold text-slate-300 py-2 uppercase">
              Contatos
            </li>
            <li className="my-4 list-none flex items-center gap-2 ">
              <FaEnvelope /> llmadvocacia@bol.com.br
            </li>
            <li className="my-4 list-none flex items-center gap-2 ">
              <FaWhatsapp /> 21 96435-6715
            </li>
          </ul>
          <div className="flex space-x-4  ">
            <a
              className="text-white text-2xl  hover:text-red-500 transform hover:scale-150  transition-all duration-150 ease-in-out   "
              href=""
            >
              <FaFacebook />
            </a>
            <a
              className="text-white text-2xl hover:text-red-500 transform hover:scale-150 transition-all duration-150 ease-in-out   "
              href=""
            >
              <FaWhatsapp />
            </a>
            <a
              className="text-white text-2xl hover:text-red-500 transform hover:scale-150 transition-all duration-150 ease-in-out   "
              href=""
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <h6 className="text-center pb-4">
        &copy; Copy right - Desenvolvido por Vieira Pedro {year}
      </h6>
    </footer>
  );
};

export default Footer;
