import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import Partners from "@/components/partners/Partners";
import Perks from "@/components/perks/Perks";

export default function Home() {
  return (
    <section>
      <section>
        <Hero />
        <Partners />
        <Perks />
      </section>
    </section>
  );
}
