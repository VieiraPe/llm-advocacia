import "./MainSobre.css";
import logoLLM from "../../assets/logo-arounded.png";
import Button from "../Button/Button";

const MainSobre = () => {
  return (
    <section className="Sobre">
      <div className="sobre_content">
        <a href="#">
          <img src={logoLLM} className="img-sobre" alt="Logo LLM Advocacia" />
        </a>
        <div className="sobre_text">
          <h1>A LLM ADVOCACIA </h1>
          <p>
            A LLM advocacia é um escritório comprometido com excelência jurídica
            e ainda possibilita atendimentos personalizados.
          </p>
          <p>
            Atuamos em diversas áreas do Direito, como cível, trabalhista,
            consumidor, previdenciário oferecendo soluções estratégicas e
            eficientes para nossos clientes.
          </p>
          <p className="hiden_text">
            Nossa equipe é formada por profissionais altamente qualificados, que
            aliam conhecimento técnico à experiência prática, garantindo
            segurança e agilidade em cada caso.
          </p>
          <p>
            Na LLM advocacia, o compromisso é transformar seus problemas e
            soluções através do ordenamentos jurídicos bem como procedimentos
            administrativos.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default MainSobre;
