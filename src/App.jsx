import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./contents/HeroSection";
import AboutSection from "./contents/AboutSection";
import CompanySection from "./contents/CompanySection";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <HeroSection />
      <CompanySection />
      <AboutSection />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
