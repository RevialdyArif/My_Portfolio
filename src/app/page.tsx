import { Header } from '../sections/Header';
import { HeroSection } from '../sections/Hero';
import { ProjectsSection } from '../sections/Projects';
import { TapeSection } from "../sections/Tape";
import { AboutSection } from "../sections/About";
import { ContactSection } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <section id="hero">
        <HeroSection />
      </section>

      <TapeSection />

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />

    </div>
  );
}
