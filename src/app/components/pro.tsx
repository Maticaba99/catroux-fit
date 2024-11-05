// components/Features.js
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
    <div className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div style={{ fontFamily: "Poppins, sans-serif" }} data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-[#4370f1] pb-4 ">
          Esto es lo que vas a lograr
          <br/>
          con <span className="text-white">Catroux</span>
          </h2>
          <hr className="border-[#393f53] w-[200px] sm:w-[400px] m-[auto] pb-8" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center" data-aos="fade-right">
            <img
              src="/foto2.png"
              alt="Cambio Físico Visible"
              className="rounded-md "
            />
            <p
              className="text-white mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Te ayudaré a lograr un cambio físico notorio y sostenido en el
              menor tiempo posible.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center" data-aos="fade-left">
            <img
              src="/foto3.png"
              alt="Independencia Total"
              className="rounded-md"
            />
            <p
              className="text-white mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Aprenderás a gestionar tu entrenamiento y nutrición sin depender
              de asesorías constantes.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center" data-aos="fade-right">
            <img
              src="/foto4.png"
              alt="Resultados Basados en Ciencia"
              className="rounded-md"
            />
            <p
              className="text-white mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Diseñaré estrategias personalizadas y probadas para alcanzar tus
              objetivos.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center" data-aos="fade-left">
            <img
              src="/foto5.png"
              alt="Adherencia Garantizada"
              className="rounded-md"
            />
            <p
              className="text-white mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Crearé un plan de alimentación y entrenamiento basado en tus
              preferencias para garantizar tu compromiso.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center" data-aos="fade-right">
            <img
              src="/foto6.png"
              alt="Ahorro Financiero"
              className="rounded-md"
            />
            <p
              className="text-white mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Evitarás los gastos recurrentes de asesorías perpetuas al dominar
              tu propio plan.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-center" data-aos="fade-left">
            <img
              src="/foto7.png"
              alt="Crecimiento Personal"
              className="rounded-md"
            />
            <p
              className="text-white mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Desarrollarás la confianza para tomar decisiones informadas sobre
              tu físico y bienestar.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12" data-aos="fade-center">
        <Button text="Reserva una llamada conmigo" subText="Empieza tu transformación" />
          </div>
      </div>
    </div>
  );
}

export default Features;
