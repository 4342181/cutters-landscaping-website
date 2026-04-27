import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import TrustBand from "./components/TrustBand";
import AestheticGrid from "./components/AestheticGrid";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <Loader />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Philosophy />
        <Services />
        <TrustBand />
        <AestheticGrid />
        <Process />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
