import React from "react";
import "@fontsource/poppins";

function Features() {
  return (
    <section className="bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-4xl text-white font-bold text-center pb-4 "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          TESTIMONIOS{" "}
        </h2>
        <hr className="border-white pb-4" />

        <div className="flex justify-center">
          <img
            src="https://www.oneonfitprogram.com/hosted/images/cd/5695e06fa8491aa076ece14cc466eb/Stars.png"
            alt="puntuacion de clientes"
            className="w-32 h-auto"
          />
        </div>
        <p className="text-center mt-2 text-gray-600"></p>
        <p
          className=" text-center mt-2 text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Mis clientes y amigos han logrado cambios físicos y ahora gestionan su
          nutrición y entrenamiento sin ningun coach. Cada testimonio refleja no
          solo un cambio físico, sino un cambio de vida. Han aprendido a
          planificar su alimentación y ajustar sus entrenamientos según sus
          objetivos, sin depender de asesorías constantes, manteniendo sus
          resultados a largo plazo.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                src="fototransformacion1.jpeg"
                alt="transformacion"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <img
                src="fototransformacion2.jpeg"
                alt="transformacion cliente"
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
    </section>
  );
}

export default Features;
