import Footer from "@/components/footer/Footer";
import HamburgerMenu from "@/components/hamburger-menu/HamburgerMenu";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import Partners from "@/components/partners/Partners";
import Perks from "@/components/perks/Perks";

export default function Home() {
  return (
    <section>
      <div className="py-5 px-5">
        <Navbar />
      </div>
      <section className="p-5">
        <Hero />
        <Partners />
        <Perks />
      </section>
      <Footer />
    </section>
  );
}
