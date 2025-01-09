import logo from "../assets/logo.png";
import whats from "../assets/WhatsApp.png";

const SectionWhatsApp = () => {
  return (
    <section className="text-slate-100 md:p-20 p-5 bg-black">
      <h1 className="uppercase md:text-4xl text-2xl font-bold text-center pb-12">
        Nosso <span className="text-red-700"> Whatsapp</span>
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo LLM ADVOCACIA" className="w-2/4 mb-10" />
        </div>
        <div>
          <h1 className="text-3xl font-bold pb-4 text-center">
            ATENDIMENTO PELO <span className="text-red-700">WHATSAPP</span>
          </h1>{" "}
          <p className="text-justify pb-8  font-bold">
            Entre em contato e fale imediatamente com um advogado especialista
            sobre a sua situação. Estamos à disposição para oferecer a melhor
            solução para o seu caso.
          </p>
          <a
            className="flex  justify-center"
            href="https://wa.me//5521964356715?text=Gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
          >
            <img src={whats} alt="Logo Whatsapp" className="md:w-2/4 " />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWhatsApp;
