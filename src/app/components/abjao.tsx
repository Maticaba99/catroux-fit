import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "@fontsource/poppins";

function Features() {
  return (
    <div className="bg-gray-800 py-10">
      <section className="bg-gray ">
        <div className="max-w-7xl mx-auto px-4">
          <div style={{ fontFamily: "Poppins, sans-serif" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-white ">
              TRANSPARENCIA Y HONESTIDAD{" "}
            </h2>
            <hr className="border-white" />
          </div>

          <p
            className="text-center mt-2 text-gray-600 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            A diferencia de otros entrenadores, mi objetivo no es mantenerte en
            una asesoría indefinidamente. Me enfoco en enseñarte a gestionar tu
            físico por tu cuenta, para que no dependas de un entrenador a largo
            plazo. Así, te conviertes en tu propio guía y ahorras tiempo y
            dinero.{" "}
          </p>

          <div className="mt-12 space-y-8">
            {/* Feature 1 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base text-2xl sm:text-lg relative top-1" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Independencia para el Futuro{" "}
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

            <div className="flex">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base text-2xl sm:text-lg relative top-1" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Desarrollo de Conocimientos Reales{" "}
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

            <div className="flex">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base text-2xl sm:text-lg mt-1 text-center" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Estrategias Basadas en Resultados{" "}
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

            <div className="flex">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base text-2xl sm:text-lg text-lg relative top-1" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Flexibilidad en la Alimentación{" "}
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

            <div className="flex">
              <div className="flex-shrink-0">
                <FaChevronRight className="text-blue-500 mr-2 text-base md:text-lg lg:text-xl text-lg relative top-1" />
              </div>

              <div className="ml-4">
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Ahorro a Largo Plazo{" "}
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
