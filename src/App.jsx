import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
