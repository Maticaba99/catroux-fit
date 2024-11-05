import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Abjao from "./components/abjao";
import Pro from "./components/pro";
import Logros from "./components/logros";
import Testimonios from "./components/testimonios";
import Objesiones from "./components/objeciones";

export default function Home() {
  return (
    <div className="bg-cover bg-center bg-fixed">
      <Header />
      <Hero />
      <hr className="my-0 border-t-1 border-[#393f53]" />
      <Abjao />
      <hr className="my-0 border-t-1 border-[#393f53]" />
      <Pro />
      <hr className="my-0 border-t-1 border-[#393f53]" />

      <Logros />
      <hr className="my-0 border-t-1 border-[#393f53]" />
      <Testimonios />
      <hr className="my-0 border-t-1 border-[#393f53]" />
      <Objesiones />
      
      <Footer />
    </div>
  );
}
