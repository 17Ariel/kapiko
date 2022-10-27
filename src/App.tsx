import About from "./components/About";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="font-fira">
      <Navbar />
      <Landing />
      <Products />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
