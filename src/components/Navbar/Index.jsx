import "./navbar.css";
import logo from "../../assets/logo.png";
import { NavMobile } from "./NavMobile";

// teste
const mobileNavbar = NavMobile();

//teste

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-around items-center h-12">
        <a href="">
          {" "}
          <img className="logo" src={logo} alt="" />
        </a>
        <div className="mobile-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-list ">
          <li>
            {" "}
            <a className="" href="#">
              HOME
            </a>
          </li>
          <li>
            {" "}
            <a href="#">SOBRE NÓS </a>
          </li>
          <li>
            {" "}
            <a href="#">AREA DE ATUAÇÃO</a>
          </li>
          <li>
            {" "}
            <a href="#">CONTATO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

mobileNavbar.init();

export default Navbar;
