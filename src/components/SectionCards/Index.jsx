import "./SectionCards.css";
import ImgAcidente from "../../assets/acidente.jpg";
import ImgDoenca from "../../assets/doenca.jpg";
import ImgInvalidez from "../../assets/invalidez.jpg";

const SectionCards = () => {
  return (
    <section className="section_card">
      <h1 className="titulo">Areas de Atuação</h1>
      <div className="card_content">
        <div className="card">
          <img
            src={ImgAcidente}
            alt="Imagem do Card"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title red">Benefícios por Incapacidade</h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <button>
              <a
                href="https://wa.me//5521964356715?text=Gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                className="btn btn-danger fs-5"
              >
                <span>Fale com um especialista</span>
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img src={ImgDoenca} alt="Imagem do Card" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title red">Benefícios por Incapacidade</h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <button>
              <a
                href="https://wa.me//5521964356715?text=Gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                className="btn btn-danger fs-5"
              >
                <span>Fale com um especialista</span>
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src={ImgInvalidez}
            alt="Imagem do Card"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title red">Benefícios por Incapacidade</h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <button>
              <a
                href="https://wa.me//5521964356715?text=Gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                className="btn btn-danger fs-5"
              >
                <span>Fale com um especialista</span>
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={ImgDoenca} alt="Imagem do Card" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title red">Benefícios por Incapacidade</h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <button>
              <a
                href="https://wa.me//5521964356715?text=Gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                className="btn btn-danger fs-5"
              >
                <span>Fale com um especialista</span>
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src={ImgAcidente}
            alt="Imagem do Card"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title red">Benefícios por Incapacidade</h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <button>
              <a
                href="https://wa.me//5521964356715?text=Gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                className="btn btn-danger fs-5"
              >
                <span>Fale com um especialista</span>
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src={ImgInvalidez}
            alt="Imagem do Card"
            className="card-img-top"
          />

          <div className="card-body">
            <h5 className="card-title red">Benefícios por Incapacidade</h5>
            <p>
              Auxílio Doença <br />
              Para quem precisa se afastar para cuidar da saúde
            </p>
            <button>
              <a
                href="https://wa.me//5521964356715?text=Gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                className="btn btn-danger fs-5"
              >
                <span>Fale com um especialista</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default SectionCards;
