import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer_content">
        <div id="footer_contact">
          <a href="#">
            <img src={logo} className="logo" alt="Logo LLM Advocacia" />
          </a>

          <div id="footer_social_media">
            <a href="#" className="footer_link" id="instagram">
              <FaInstagram />
            </a>
            <a href="#" className="footer_link" id="facebook">
              <FaFacebook />
            </a>
            <a href="#" className="footer_link" id="whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <ul className="footer_list">
          <li>
            <h1>Menu</h1>
          </li>
          <li>
            <h3>
              <a href="#" className="footer_link">
                Areas de atuação
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#" className="footer_link">
                Sobre nós
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#" className="footer_link">
                Contato
              </a>
            </h3>
          </li>
        </ul>
        <ul className="footer_list">
          <li>
            <h1>Contato</h1>
          </li>
          <li>
            <h3>
              <a href="#" className="footer_link">
                <FaPhone /> 21 96435-6715
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#" className="footer_link">
                <FaWhatsapp /> 21 96435-6715
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#" className="footer_link">
                <FaEnvelope /> llmadvocacia@gmail.com
              </a>
            </h3>
          </li>
        </ul>
      </div>
      <div id="footer_copyright">
        &#169 2024 All right reserved <br /> Developed by Vieira Pedro{" "}
      </div>
    </footer>
  );
};

export default Footer;
