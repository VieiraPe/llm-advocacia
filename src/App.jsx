import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import SectionCards from "./Components/SectionCards";
import About from "./Components/Pages/About";
import SectionWhatsApp from "./Components/Pages/SectionWhatsApp";
import Services from "./Components/Pages/Services";

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
