import "./navbar.css";
import logo from "../../assets/logo.png";

// teste
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  "nav-list li"
);

mobileNavbar.init();

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

export default Navbar;
