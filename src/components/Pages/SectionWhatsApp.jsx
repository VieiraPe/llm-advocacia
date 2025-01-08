import logo from "../../assets/logo.png";
import whats from "../../assets/WhatsApp.png";

const SectionWhatsApp = () => {
  return (
    <section className="text-slate-100 p-20 bg-slate-950">
      <h1 className="uppercase md:text-4xl text-3xl font-bold text-center pb-12">
        Nosso <span className="text-red-700"> Whatsapp</span>
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo LLM ADVOCACIA" className="w-2/4 " />
        </div>
        <div>
          <h1 className="text-3xl font-bold pb-4">
            ATENDIMENTO PELO <span className="text-red-700">WHATSAPP</span>
          </h1>{" "}
          <p className="text-justify pb-8  font-bold">
            Entre em contato e fale imediatamente com um advogado especialista
            sobre a sua situação. Estamos à disposição para oferecer a melhor
            solução para o seu caso.
          </p>
          <img src={whats} alt="Logo Whatsapp" className="w-2/4 " />
        </div>
      </div>
    </section>
  );
};

export default SectionWhatsApp;
