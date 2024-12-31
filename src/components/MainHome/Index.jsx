import Button from "../Button/Button";
import "./Main.css";

const Main = () => {
  return (
    <main className="container">
      <div className="main_text">
        <h1 className="text_h1">
          A LLM <span className="red">ADVOCACIA</span>
        </h1>
        <p>É um escritório comprometido com seus clientes.</p>
        <Button />
      </div>
    </main>
  );
};

export default Main;
