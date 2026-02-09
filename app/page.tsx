import Navbar from "@/components/navbar";
import { Home } from "@/feature/home";
import Stack from '@mui/material/Stack';
import {About} from "@/feature/about";

export default function Page() {
  return <Stack>
   <Navbar />
      <Home />
      <About/>
  </Stack>;
}
