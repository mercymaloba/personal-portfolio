import Navbar from "@/components/navbar";
import { Home } from "@/feature/home";
import Stack from '@mui/material/Stack';
import {About} from "@/feature/about";
import {Skills} from "@/feature/skills";
import Projects from "@/feature/projects";
import ContactDetails from "@/feature/contact";
import Footer from "@/feature/Footer";

export default function Page() {
  return <Stack>
   <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Projects />
      <ContactDetails />
      <Footer />
  </Stack>
}
