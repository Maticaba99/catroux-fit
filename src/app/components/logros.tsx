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
    <div className="py-20 bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div style={{ fontFamily: "Poppins, sans-serif" }} data-aos="fade-up">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl  text-center pb-6 font-bold">
            Transformaciones{" "}
          </h2>
        </div>

        <hr data-aos="fade-up" className="border-[#7a7a7a]  w-[200px] sm:w-[400px] m-[auto] pb-8" />
        <p
          className="text-center mt-2 text-gray-600 text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
          data-aos="fade-up"
        >
          He ayudado a mis amigos a transformar sus físicos, ganando músculo o
          perdiendo grasa sin perder fuerza. 
          <br/>
          Lo mejor ha sido ver cómo han
          aprendido a gestionar su nutrición y entrenamientos de forma
          independiente gracias a mi ayuda, y ademas logrando y manteniendo
          resultados visibles a largo plazo.{" "}
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" >
          {/* Feature 1 */}
          <div className="flex justify-center" data-aos="fade-right">
            <div className="flex-shrink-0">
              <img
                src="/fotopro1.jpeg"
                alt="cambio de fisico"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex justify-center" data-aos="fade-left">
            <div className="flex-shrink-0">
              <img
                src="/fotopro2.jpeg"
                alt="cambio de fisico"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
              />
            </div>
          </div>

          
        </div>
        <div className="flex justify-center mt-12" data-aos="fade-up">
        <Button text="Reserva una llamada conmigo" subText="Empieza tu transformación" />
          </div>
      </div>
    </div>
  );
}

export default Features;
