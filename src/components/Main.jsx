import Button from "./Button/Button";
import "./main.css";

const Main = () => {
  return (
    <main className="text-slate-100 main">
      <div className="md:pt-60 pt-80 w-full md:w-2/4 text-center text-xl md:p-20 p-5 absolute z-0">
        <h1 className="text-3xl	font-bold	x ">
          {" "}
          A LLM <span className="text-red-700">ADVOCACIA</span>
        </h1>
        <p>É um escritório comprometido com seus clientes.</p>
        <Button />
      </div>
    </main>
  );
};

export default Main;
