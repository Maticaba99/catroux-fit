'use client'

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "@fontsource/poppins";
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
    <div className="bg-[#171c2b] py-20 px-4 sm:px-6 lg:px-8">
      <section className="relative bg-gray bg-cover bg-no-repeat bg-responsive">
      <div className="absolute inset-0 bg-gradient-to-tl from-[#171c2b] to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10" >
          <div style={{ fontFamily: "Poppins, sans-serif" }}  data-aos="fade-up" >
            <h2 className="text-[#4370f1] text-3xl md:text-4xl lg:text-5xl text-center pb-4 font-bold">
              Transparencia y Honestidad
            </h2>
            <hr className="border-[#393f53]  w-[200px] sm:w-[400px] m-[auto] pb-8" />
          </div>

          <p
           data-aos="fade-up"
            className="text-center mt-2 text-gray-600 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Mi enfoque no es retenerte indefinidamente como cliente. 
            <br/>
            Te capacito para manejar tu físico de manera independiente, ahorrándote tiempo y dinero al convertirte en tu propio guía..
            <br/>
          </p>

          <div className="mt-12 space-y-8">
            {/* Feature 1 */}
            <div className="flex"  data-aos="fade-left">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base text-2xl sm:text-lg relative top-1" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                 Independencia para el  <span className="text-[#4370f1]">Futuro</span>{" "}
                </h3>
                <p
                  className="text-1x1 md:text-1xl lg:text-1xl  mt-2 text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Aprenderás a gestionar tu físico por ti mismo, evitando la
                  dependencia continua de asesorías.{" "}
                </p>
              </div>
            </div>

            <div className="flex"  data-aos="fade-left">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base text-2xl sm:text-lg relative top-1" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Desarrollo de <span className="text-[#4370f1]">Conocimientos Reales</span>{" "}
                </h3>
                <p
                  className="text-1x1 md:text-1xl lg:text-1xl  mt-2 text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Obtendrás herramientas prácticas que te permitirán tomar
                  decisiones con seguridad, incluso después de nuestro trabajo
                  juntos.{" "}
                </p>
              </div>
            </div>

            <div className="flex"  data-aos="fade-left">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base text-2xl sm:text-lg mt-1 text-center" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Estrategias Basadas en <span className="text-[#4370f1]">Resultados</span>{" "}
                </h3>
                <p
                  className="text-1x1 md:text-1xl lg:text-1xl mt-4 font-sans text-lg text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Diseñadas para cambios visibles, sostenibles y en un tiempo
                  optimizado.{" "}
                </p>
              </div>
            </div>

            <div className="flex"  data-aos="fade-left">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base text-2xl sm:text-lg text-lg relative top-1" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Flexibilidad en la <span className="text-[#4370f1]">Alimentación</span>{" "}
                </h3>
                <p
                  className="text-1x1 md:text-1xl lg:text-1xl mt-4 font-sans text-lg text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Diseñaremos un plan que incluya solo comida que disfrutes y
                  que ya tengas en casa, sin alimentos que te desagraden. Solo
                  comerás alimentos que ya comes a diario, pero ajustare todo
                  para conseguir los cambios deseados.{" "}
                </p>
              </div>
            </div>

            <div className="flex"  data-aos="fade-left">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base md:text-lg lg:text-xl text-lg relative top-1" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Ahorro a <span className="text-[#4370f1]">Largo Plazo</span>{" "}
                </h3>
                <p
                  className="text-1x1 md:text-1xl lg:text-1xl mt-2 text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Invierte en tu conocimiento para reducir los costos
                  recurrentes de las asesorías perpetuas.{" "}
                </p>
              </div>
            </div>

            {/* Agrega más features como secciones aquí */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
