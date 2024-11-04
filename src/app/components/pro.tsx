// components/Features.js
import React from "react";
import "@fontsource/poppins";

function Features() {
  return (
    <div className="bg-gray-800 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-white pb-4">
            RESUMEN DE PROMESAS{" "}
          </h2>
          <hr className="border-white pb-4" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
          <section className="mt-6">
            <button
              className="          bg-blue-700 text-white font-semibold py-5 px-8 rounded-full 
          shadow-[0_0_60px_20px_rgba(0,128,255,0.6)] 
          transform transition-all duration-300 
          hover:scale-105 
          hover:shadow-[0_0_80px_30px_rgba(0,128,255,0.8)]
          focus:outline-none flex flex-col items-center space-y-1"
            >
              <span className="text-lg">Reserva una llamada conmigo</span>
              <span className="text-sm mt-1 opacity-80">
                y empieza tu transformación
              </span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Features;
