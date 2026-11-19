import Navbar from "@/components/navbar";
import { Home } from "@/feature/home";
import { About } from "@/feature/about";
import { Skills } from "@/feature/skills";
import Projects from "@/feature/projects";
import ContactDetails from "@/feature/contact";
import Footer from "@/feature/Footer";
import { Qualifications } from "@/feature/qualifications";

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Home />
        <Projects />
        <About />
        <Skills />
        <Qualifications />
        <ContactDetails />
      </main>
      <Footer />
    </>
  );
}
