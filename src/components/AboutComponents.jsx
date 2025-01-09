import logo from "../assets/favicon.png";


const About = () => {
  return (
    <section className="text-slate-100 p-20 bg-slate-950">
      <h1 className="uppercase md:text-4xl text-3xl font-bold text-center pb-12">
        Sobre <span className="text-red-700"> Nós</span>
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo LLM ADVOCACIA" className="w-2/4 " />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center pb-8">
            A LLM <span className=" text-red-700">ADVOCACIA</span>
          </h1>
          <p className="text-justify pb-4  indent-20">
            A LLM advocacia é um escritório comprometido com excelência jurídica
            e ainda possibilita atendimentos personalizados.
          </p>
          <p className="text-justify pb-4  indent-20">
            Atuamos em diversas áreas do Direito, como cível, trabalhista,
            consumidor, previdenciário oferecendo soluções estratégicas e
            eficientes para nossos clientes.
          </p>
          <p className="text-justify pb-4  indent-20">
            Nossa equipe é formada por profissionais altamente qualificados, que
            aliam conhecimento técnico à experiência prática, garantindo
            segurança e agilidade em cada caso.
          </p>
          <p className="text-justify pb-4  indent-20">
            Valorizamos a ética, a transparência e a construção de relações
            sólidas, focadas em resultados e na satisfação de nossos clientes.
          </p>
          <p className="text-justify pb-4  indent-20">
            Na LLM advocacia, o compromisso é transformar seus problemas e
            soluções através do ordenamentos jurídicos bem como procedimentos
            administrativos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
