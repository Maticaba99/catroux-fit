'use client'
import { FaQuestionCircle } from "react-icons/fa";
import "@fontsource/poppins";
import Button from "./button";
import { useEffect } from 'react';
import AOS from 'aos';


const Faq = () => {

  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true, 
    });
  }, []);

  return (
    <div
      className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8"
      style={{
        color: "#fff",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
      <h2
          className="text-4xl text-white font-bold text-center pb-6 "
          style={{ fontFamily: "Poppins, sans-serif" }}
          data-aos="fade-up"
        >
          Porqué elegirme
        </h2>
        <hr data-aos="fade-up" className="border-[#7a7a7a]  w-[200px] sm:w-[400px] m-[auto] pb-8" />
        
        <p
        data-aos="fade-up"
          className="text-center mt-2 text-gray-600 text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Mientras otros entrenadores buscan mantenerte atado a sus servicios,
          yo me centro en que logres la independencia.
          <br/>
          No solo cambiarás tu
          físico, sino que aprenderás a mantener y mejorar tus resultados sin
          depender de asesorías constantes para que no tengas que pagar a nadie
          todos los meses.{" "}
        </p>
        <h3
        data-aos="fade-up"
          className="text-6xl text-center text-white mt-8"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "20px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          PREGUNTAS FRECUENTES
        </h3>
        <div className="text-1x1 md:text-1xl lg:text-1xl  bg-gray-900 text-white p-6 rounded-lg max-w-6xl mx-auto">
          <div className="space-y-4">
            {/* Primera pregunta */}
            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Cuánto tiempo necesito seguir tus asesorías para ver
                  resultados?
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl "
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Los resultados visibles pueden comenzar en unas pocas semanas,
                pero mi objetivo es enseñarte a mantenerlos a largo plazo.
                Trabajaremos juntos hasta que te sientas seguro para manejarlo
                solo.
              </p>
            </div>

            {/* Segunda pregunta */}
            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Qué sucede después de finalizar la asesoría?
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Habrás aprendido a gestionar tu nutrición y entrenamiento de
                manera autónoma, evitando la necesidad de una asesoría continua.
              </p>
            </div>

            {/* Otras preguntas */}
            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Voy a tener que hacer dieta estricta?
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                No, crearemos un plan con alimentos que disfrutes y que ya sean
                parte de tu vida diaria, ajustados a tus objetivos.{" "}
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Cómo puedo saber si el plan funcionará para mí?{" "}
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Diseñaremos un plan basado en tus preferencias y necesidades
                específicas, asegurándonos de que sea sostenible y efectivo para
                ti.{" "}
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Qué pasa si nunca he seguido un plan de entrenamiento?{" "}
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Te guiaré paso a paso, enseñándote las técnicas y el enfoque
                correcto para que desarrolles confianza y conocimiento.{" "}
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Qué diferencia hay entre tus asesorías y las de otros
                  entrenadores?{" "}
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Mi enfoque es enseñarte a gestionar tu físico por ti mismo, para
                que no dependas de asesorías a largo plazo.{" "}
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Puedo adaptar mi plan si mi vida cambia?{" "}
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Por supuesto. Tu plan será flexible y se ajustará a tu estilo de
                vida y cambios, garantizando su efectividad en cualquier
                situación.{" "}
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Cuántas veces a la semana debo entrenar?{" "}
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Diseñaremos un plan que se adapte a tus horarios y estilo de
                vida, garantizando que puedas mantener la constancia.{" "}
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Y si no tengo experiencia en el gimnasio?{" "}
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                No te preocupes. Mis asesorías están diseñadas para todos los
                niveles, desde principiantes hasta avanzados.{" "}
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg" data-aos="fade-left">
              <div className="flex items-center">
                <FaQuestionCircle className="text-gray-400 mr-2" />
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  ¿Qué pasa si no veo resultados en un tiempo razonable?{" "}
                </h3>
              </div>
              <p
                className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Revisaremos juntos el plan y haremos los ajustes necesarios para
                maximizar tus resultados. Estoy comprometido a guiarte hasta
                alcanzar tus objetivos.{" "}
              </p>
            </div>
            
          </div>
          
        </div>
        <section className="mt-12 mb-2 flex justify-center" data-aos="fade-up">
            <Button text="Reserva una llamada conmigo" subText="Empieza tu transformación" />
            </section>
      </div>
    </div>
  );
};

export default Faq;
