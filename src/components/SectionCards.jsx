import ImgAcidente from "../assets/acidente.jpg";
import ImgDoenca from "../assets/doenca.jpg";
import ImgInvalidez from "../assets/invalidez.jpg";
import ButtonEspecialista from "./Button/ButtonEspecialista";

const SectionCards = () => {
  return (
    <section className="bg-black pb-20 ">
      <h1 className="flex items-center text-3xl justify-center text-slate-100 font-bold py-8">
        Areas de Atuação
      </h1>
      <div className="px-20  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10">
        <div className="w-80 rounded-lg shadow-md bg-slate-900 p-1 overflow-hidden">
          <img
            src={ImgAcidente}
            alt="Imagem do Card"
            className="w-full h-52 object-cover"
          />
          <div className="p-4 justify-center text-center text-slate-100 my-5">
            <h5 className="text-lg mb-2 font-bold text-red-700">
              Benefícios por Incapacidade
            </h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <ButtonEspecialista />
          </div>
        </div>

        <div className="w-80 rounded-lg shadow-md bg-slate-900 p-1 overflow-hidden">
          <img
            src={ImgDoenca}
            alt="Imagem do Card"
            className="w-full h-52 object-cover"
          />
          <div className="p-4 justify-center text-center text-slate-100 my-5">
            <h5 className="text-lg mb-2 font-bold text-red-700">
              Benefícios por Incapacidade
            </h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <ButtonEspecialista />
          </div>
        </div>

        <div className="w-80 rounded-lg shadow-md bg-slate-900 p-1 overflow-hidden">
          <img
            src={ImgInvalidez}
            alt="Imagem do Card"
            className="w-full h-52 object-cover"
          />
          <div className="p-4 justify-center text-center text-slate-100 my-5">
            <h5 className="text-lg mb-2 font-bold text-red-700">
              Benefícios por Incapacidade
            </h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <ButtonEspecialista />
          </div>
        </div>
        <div className="w-80 rounded-lg shadow-md bg-slate-900 p-1 overflow-hidden">
          <img
            src={ImgDoenca}
            alt="Imagem do Card"
            className="w-full h-52 object-cover"
          />
          <div className="p-4 justify-center text-center text-slate-100 my-5">
            <h5 className="text-lg mb-2 font-bold text-red-700">
              Benefícios por Incapacidade
            </h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <ButtonEspecialista />
          </div>
        </div>

        <div className="w-80 rounded-lg shadow-md bg-slate-900 p-1 overflow-hidden">
          <img
            src={ImgAcidente}
            alt="Imagem do Card"
            className="w-full h-52 object-cover"
          />
          <div className="p-4 justify-center text-center text-slate-100 my-5">
            <h5 className="text-lg mb-2 font-bold text-red-700">
              Benefícios por Incapacidade
            </h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <ButtonEspecialista />
          </div>
        </div>
        <div className="w-80 rounded-lg shadow-md bg-slate-900 p-1 overflow-hidden">
          <img
            src={ImgInvalidez}
            alt="Imagem do Card"
            className="w-full h-52 object-cover"
          />

          <div className="p-4 justify-center text-center text-slate-100 my-5">
            <h5 className="text-lg mb-2 font-bold text-red-700">
              Benefícios por Incapacidade
            </h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <ButtonEspecialista />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default SectionCards;
