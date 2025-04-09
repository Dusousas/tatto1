import About from "@/components/About";
import Artists from "@/components/Artists";
import Contact from "@/components/Contact";
import Depoiments from "@/components/Depoiments";
import Galery from "@/components/Galery";
import Main from "@/components/Main";
import Maps from "@/components/Maps";
import Numbers from "@/components/Numbers";
import Seta from "@/components/Seta";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Galery />
      <Numbers />
      <Artists />
      <Depoiments />
      <Contact />
      <Maps />
      <Seta />
    </>
  );
}
