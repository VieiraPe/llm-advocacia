import "./Main.css";

const Main = () => {
  return (
    <main className="container">
      <div className="main_text">
        <h1 className="text_h1">
          A LLM <span className="red">ADVOCACIA</span>
        </h1>
        <p>É um escritório comprometido com seus clientes.</p>
        <button>
          <a
            href="https://wa.me//5521964356715?text=Gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            className="btn btn-danger fs-5"
          >
            <span>FALE CONOSCO</span>
          </a>
        </button>
      </div>
    </main>
  );
};

export default Main;
