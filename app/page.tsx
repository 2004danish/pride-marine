import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import StowageFactor from "../components/StowageFactor";
import Fleet from "../components/Fleet";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-[#111111] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <StowageFactor />
      <Fleet />
      <Footer />
    </main>
  );
}