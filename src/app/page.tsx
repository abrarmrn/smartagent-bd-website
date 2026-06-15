import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pain } from "@/components/Pain";
import { Solution } from "@/components/Solution";
import { Integrations } from "@/components/Integrations";
import { Features } from "@/components/Features";
import { Spotlights } from "@/components/Spotlights";
import { Showcase } from "@/components/Showcase";
import { Niches } from "@/components/Niches";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Stats, Testimonials } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SocialProofPopups } from "@/components/SocialProofPopups";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Pain />
      <Solution />
      <Integrations />
      <Features />
      <Spotlights />
      <Showcase />
      <Niches />
      <Stats />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <SocialProofPopups />
    </main>
  );
}
