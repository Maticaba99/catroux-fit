import { FaQuestionCircle } from "react-icons/fa";
import "@fontsource/poppins";

const Faq = () => {
  return (
    <div
      className="bg-gray-800 py-10"
      style={{
        padding: "20px",
        color: "#fff",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <p
          className="text-3xl md:text-4xl lg:text-4xl text-center text-white uppercase"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Porqué elegirme a mí:
        </p>
        <p
          className=" text-1x1 md:text-1xl lg:text-1xl mt-4 font-sans text-lg text-white mb-4 text-center
          
"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Mientras otros entrenadores buscan mantenerte atado a sus servicios,
          yo me centro en que logres la independencia. No solo cambiarás tu
          físico, sino que aprenderás a mantener y mejorar tus resultados sin
          depender de asesorías constantes para que no tengas que pagar a nadie
          todos los meses.{" "}
        </p>
        <h3
          className="text-6xl text-center text-white mt-4"
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
            <div className="bg-gray-800 p-4 rounded-lg">
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
            <div className="bg-gray-800 p-4 rounded-lg">
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
            <div className="bg-gray-800 p-4 rounded-lg">
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

            <div className="bg-gray-800 p-4 rounded-lg">
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

            <div className="bg-gray-800 p-4 rounded-lg">
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

            <div className="bg-gray-800 p-4 rounded-lg">
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

            <div className="bg-gray-800 p-4 rounded-lg">
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

            <div className="bg-gray-800 p-4 rounded-lg">
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

            <div className="bg-gray-800 p-4 rounded-lg">
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

            <div className="bg-gray-800 p-4 rounded-lg">
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
            <section className="mt-6 flex justify-center">
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
    </div>
  );
};

export default Faq;
