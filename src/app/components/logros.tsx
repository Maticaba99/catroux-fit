import React from "react";
import "@fontsource/poppins";

function Features() {
  return (
    <div className="py-10 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl  text-center pb-4">
            TRANSFORMACIONES{" "}
          </h2>
        </div>

        <hr className="border-white pb-4" />
        <p
          className="text-1x1 md:text-1xl lg:text-1xl mt-4 text-lg text-white text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          He ayudado a mis amigos a transformar sus físicos, ganando músculo o
          perdiendo grasa sin perder fuerza. Lo mejor ha sido ver cómo han
          aprendido a gestionar su nutrición y entrenamientos de forma
          independiente gracias a mi ayuda, y ademas logrando y manteniendo
          resultados visibles a largo plazo.{" "}
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                src="/fotopro1.jpeg"
                alt="cambio de fisico"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <img
                src="/fotopro2.jpeg"
                alt="cambio de fisico"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
              />
            </div>
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
