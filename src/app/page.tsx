import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceFeatures from "@/components/ServiceFeatures";
import Screenshots from "@/components/Screenshots";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceFeatures />
        <Screenshots />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
