import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./contents/HeroSection";
import AboutSection from "./contents/AboutSection";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <HeroSection />
      <AboutSection />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
