import React from "react";

function Features() {
  return (
    <section className="bg-blue-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-4xl font-bold text-center">
          TRANSFORMACIONES{" "}
        </h2>
        <hr></hr>
        <p className="mt-4 text-lg text-white text-center">
          He ayudado a muchos de mis amigos a transformar sus físicos y superar
          sus propios límites. Desde aumentar masa muscular de manera
          consistente hasta perder grasa sin sacrificar fuerza, juntos hemos
          logrado cambios notables. Lo más gratificante ha sido ver cómo han
          adquirido la confianza para gestionar su nutrición y entrenamientos
          por sí mismos. Al aplicar estrategias personalizadas y una estructura
          bien planificada, mis amigos no solo han conseguido resultados
          visibles, sino que también han aprendido a mantenerlos a largo plazo.{" "}
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                src="/fotopro1.jpeg"
                alt="cambio de fisico"
                className="w-80 h-auto rounded-lg translate-x-40	"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <img
                src="/fotopro2.jpeg"
                alt="cambio de fisico"
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
