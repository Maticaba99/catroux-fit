import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Abjao from "./components/abjao";
import Pro from "./components/pro";
import Logros from "./components/logros";
import Testimonios from "./components/testimonios";
import Objesiones from "./components/objesiones";

export default function Home() {
  return (
    <div className="bg-cover bg-center bg-fixed">
      <Header />
      <hr className="my-0 border-t-4 border-blue-500" />

      <Hero />
      <hr className="my-0 border-t-4 border-blue-500" />
      <Abjao />
      <hr className="my-0 border-t-4 border-blue-500" />
      <Pro />
      <hr className="my-0 border-t-4 border-blue-900" />

      <Logros />
      <hr className="my-0 border-t-4 border-blue-900" />
      <Testimonios />
      <hr className="my-0 border-t-4 border-blue-900" />
      <Objesiones />

      <Footer />
    </div>
  );
}
