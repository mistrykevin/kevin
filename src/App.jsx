import Navbar from "./components/Navbar";
import About from "./page/About";
import Projects from "./page/Projects";
import Vision from "./page/Vision";
import Contact from "./page/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects/>
      <Vision />
      <Contact />
      <Footer />
    </>
  );
}

export default App;