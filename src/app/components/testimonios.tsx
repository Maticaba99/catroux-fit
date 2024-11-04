'use client'
import React from "react";
import "@fontsource/poppins";
import Button from "./button";
import { useEffect } from 'react';
import AOS from 'aos';

function Features() {

  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true, 
    });
  }, []);

  return (
    <section className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Testimonios{" "}
        </h2>

        <div className="flex justify-center pt-2 pb-6">
          <img
            src="https://www.oneonfitprogram.com/hosted/images/cd/5695e06fa8491aa076ece14cc466eb/Stars.png"
            alt="puntuacion de clientes"
            className="w-32 h-auto"
          />
        </div>
        <p className="text-center mt-2 text-gray-600"></p>
        <p
          data-aos="fade-up"
          className="text-center mt-2 text-gray-600 text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Mis clientes y amigos han logrado cambios físicos y ahora gestionan su
          nutrición y entrenamiento sin ningun coach. 
          <br/>
          Cada testimonio refleja no
          solo un cambio físico, sino un cambio de vida. 
          <br/>
          Han aprendido a
          planificar su alimentación y ajustar sus entrenamientos según sus
          objetivos, sin depender de asesorías constantes, manteniendo sus
          resultados a largo plazo.
        </p>

        <div className="mt-12 flex justify-center flex-wrap gap-16">
          {/* Feature 1 */}
          <div className="flex justify-center" data-aos="fade-right">
            <div className="flex-shrink-0">
              <img
                src="fototransformacion1.jpeg"
                alt="transformacion"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex justify-center" data-aos="fade-left">
            <div className="flex-shrink-0">
              <img
                src="fototransformacion2.jpeg"
                alt="transformacion cliente"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex justify-center" data-aos="fade-right">
            <div className="flex-shrink-0">
              <img
                src="fototransformacion3.jpg"
                alt="transformacion cliente"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
              />
            </div>
          </div>
          
        </div>
        <section className="mt-12 flex justify-center" data-aos="fade-up">
        <Button text="Reserva una llamada conmigo" subText="Empieza tu transformación" />
          </section>
      </div>
    </section>
  );
}

export default Features;
