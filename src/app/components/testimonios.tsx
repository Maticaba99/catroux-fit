import React from "react";

function Features() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center">
          TESTIMONIOS{" "}
        </h2>
        <div className="flex justify-center">
          <img
            src="https://www.oneonfitprogram.com/hosted/images/cd/5695e06fa8491aa076ece14cc466eb/Stars.png"
            alt="Optimización de Nicho y Oferta"
            className="w-32 h-auto"
          />
        </div>
        <p className="text-center mt-2 text-gray-600"></p>
        <p className=" text-center mt-2 text-white">
          Mis clientes y amigos, no solo han logrado cambios físicos
          impresionantes, sino que ahora tienen el conocimiento para llevar por
          sí mismos su nutrición y entrenamiento. Cada testimonio refleja no
          solo un cambio externo, sino también una transformación interna. Han
          aprendido a planificar su alimentación y ajustar sus entrenamientos
          según sus metas, sin depender de asesorías perpetuas. Ahora pueden
          gestionar su progreso de forma independiente, manteniendo sus
          resultados a largo plazo.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                src="fototransformacion1.jpeg"
                alt="transformacion"
                className="w-80 h-auto rounded-lg translate-x-40	"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <img
                src="fototransformacion2.jpeg"
                alt="opiniones de google"
                className="w-80 h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Agrega más features como secciones aquí */}
        </div>
      </div>
    </section>
  );
}

export default Features;
