import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import SectionCards from "./Components/SectionCards";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
