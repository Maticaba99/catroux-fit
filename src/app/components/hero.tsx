'use client'
import "@fontsource/poppins";
import Button from "./button";
import { useEffect } from 'react';
import AOS from 'aos';

function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true, 
    });
  }, []);

  return (
    <div className="pt-10 pb-20 bg-gray-800 px-4 sm:px-6 lg:px-8 ">
      <section className="flex flex-col items-center text-center space-y-4 min-w-64 mx-auto">
        <h1
        data-aos="fade-up"
          className="font-bold text-center leading-tight text-3xl md:text-4xl lg:text-4xl text-white m-4 "
          style={{
            fontFamily: "Poppins, sans-serif",
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          Te enseño a transformar <span className="text-[#4370f1]">tu físico </span> y mantenerlo sin depender <span className="text-[#4370f1]">de ningun coach</span>
        </h1>

        <p
          className="mt-2 font-sans text-sm text-[#ADADAD]"
          style={{ fontFamily: "Poppins, sans-serif" }}
          data-aos="fade-up"
        >
          Aprende conmigo a tomar el control de tu nutrición y entrenamiento, obten resultados y sigue progresando sin depender de nadie
        </p>

        <div className="relative w-full max-w-full overflow-hidden" data-aos="fade-up">
          <div className="flex justify-center max-h-[350px] md:max-h-[700px]  md:h-[700px]">
            <iframe
              className="max-w-6xl w-full h-full min-h-[250px]"
              src="https://player.vimeo.com/video/1028529428"
              title="VSL"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <section className="mt-12" data-aos="fade-up">
          <Button text="Reserva una llamada conmigo" subText="Empieza tu transformación" />
        </section>
      </section>
    </div>
  );
}

export default Hero;
