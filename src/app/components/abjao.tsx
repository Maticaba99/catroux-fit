import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "@fontsource/poppins";

function Features() {
  return (
    <div className="bg-gray-800">
      <section className="bg-gray py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div style={{ fontFamily: "Poppins, sans-serif" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-white">
              TRANSPARENCIA Y HONESTIDAD{" "}
            </h2>
          </div>

          <p className="text-center mt-2 text-gray-600 text-white">
            A diferencia de otros entrenadores, mi objetivo no es mantenerte en
            una asesoría indefinidamente. Me enfoco en enseñarte a gestionar tu
            físico por tu cuenta, para que no dependas de un entrenador a largo
            plazo. Así, te conviertes en tu propio guía y ahorras tiempo y
            dinero.{" "}
          </p>

          <div className="mt-12 space-y-8">
            {/* Feature 1 */}
            <div className="flex">
              <div className="flex-shrink-0"></div>
              <FaChevronRight
                className="text-blue-500 mr-2 text-base text-lg relative top-1"
                style={{
                  fontSize: "16px",
                }}
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-white">
                  Independencia para el Futuro{" "}
                </h3>
                <p className="text-gray-600 mt-2 text-white">
                  Aprenderás a gestionar tu físico por ti mismo, evitando la
                  dependencia continua de asesorías.{" "}
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0"></div>
              <FaChevronRight
                className="text-blue-500 mr-2 text-base text-lg relative top-1"
                style={{
                  fontSize: "16px",
                }}
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-white">
                  Desarrollo de Conocimientos Reales{" "}
                </h3>
                <p className="text-white-600 mt-2 text-white">
                  Obtendrás herramientas prácticas que te permitirán tomar
                  decisiones con seguridad, incluso después de nuestro trabajo
                  juntos.{" "}
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0"></div>
              <FaChevronRight
                className="text-blue-500 mr-2 text-base text-lg relative top-1"
                style={{
                  fontSize: "16px",
                }}
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-white">
                  Estrategias Basadas en Resultados{" "}
                </h3>
                <p className="text-gray-600 mt-2 text-white">
                  Diseñadas para cambios visibles, sostenibles y en un tiempo
                  optimizado.{" "}
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0"></div>
              <FaChevronRight
                className="text-blue-500 mr-2 text-base text-lg relative top-1"
                style={{
                  fontSize: "16px",
                }}
              />

              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-white">
                  Flexibilidad en la Alimentación{" "}
                </h3>
                <p className="text-gray-600 mt-2 text-white">
                  Diseñaremos un plan que incluya solo comida que disfrutes y
                  que ya tengas en casa, sin alimentos que te desagraden. Solo
                  comerás alimentos que ya comes a diario, pero ajustare todo
                  para conseguir los cambios deseados.{" "}
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0"></div>
              <FaChevronRight
                className="text-blue-500 mr-2 text-base md:text-lg lg:text-xl relative top-1"
                style={{
                  fontSize: "16px",
                }}
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-white">
                  Ahorro a Largo Plazo{" "}
                </h3>
                <p className="text-gray-600 mt-2 text-white">
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
