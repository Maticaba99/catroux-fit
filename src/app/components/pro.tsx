// components/Features.js
import React from "react";
import "@fontsource/poppins";

function Features() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <h2 className="text-white text-4xl font-poppins text-center">
            RESUMEN DE PROMESAS{" "}
          </h2>
          <hr />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/foto2.png"
              alt="Cambio Físico Visible"
              className="rounded-md "
            />
            <p className="text-white mt-2">
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
            <p className="text-white mt-2">
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
            <p className="text-white mt-2">
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
            <p className="text-white mt-2">
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
            <p className="text-white mt-2">
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
            <p className="text-white mt-2">
              Desarrollarás la confianza para tomar decisiones informadas sobre
              tu físico y bienestar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
