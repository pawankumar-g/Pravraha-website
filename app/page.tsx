import Hero from "./components/Hero";
// import Services from "./components/Services";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
// import LogoMarquee from "./components/LogoMarquee";
import CtaMain from "./components/CtaMain";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <ProductsSection />
      <ContactSection />
      {/* <LogoMarquee /> */}
      <CtaMain />
      

    
      <Footer />
    </>
  );
}
