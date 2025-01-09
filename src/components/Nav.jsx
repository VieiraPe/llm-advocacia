import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";



const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className="xl:hidden block absolute top-20 w-full left-0 right-0 bg-slate-900 trasition z-10 opacity-70">
        <ul className="text-center text-lg p-20">
          <Link spy={true} smooth={true} to="/">
            <li className="uppercase my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/servicos">
            <li className="uppercase my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Areas de atuação
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/about">
            <li className="uppercase my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              Sobre nós
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/contatowhatsapp">
            <li className="uppercase my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {" "}
              WhatsApp
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-[10vh] flex justify-between top-20 z-50 text-white px-20  ">
        <div className="flex items-center flex-1">
          <img src={logo} alt="" className="w-24 " />
        </div>
        <div className="xl:flex lg:flex xl:flex-1 items bg-center justify-end font-normal hidden  ">
          <div className="flex items-center">
            <ul className="flex gap-8 mr-16 text-md ">
              <Link spy={true} smooth={true} to="/">
                <li className="uppercase  hover:text-slate-300 duration-700   transition border-b-2 border-slate-900 hover:border-red-600 text-slate-300 cursor-pointer">
                  {" "}
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/servicos">
                <li className="uppercase hover:text-slate-300 duration-700 transition border-b-2 border-slate-900 hover:border-red-600 text-slate-300 cursor-pointer">
                  {" "}
                  Areas de atuação
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/about">
                <li className="uppercase hover:text-slate-300 duration-700   transition border-b-2 border-slate-900 hover:border-red-600 text-slate-300 cursor-pointer">
                  {" "}
                  Sobre nós
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/contatowhatsapp">
                <li className="uppercase hover:text-slate-300 duration-700   transition border-b-2 border-slate-900 hover:border-red-600 text-slate-300 cursor-pointer">
                  {" "}
                  WhatsApp
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>

        <button className="block lg:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
