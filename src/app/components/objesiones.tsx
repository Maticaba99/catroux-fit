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
          className="text-6xl text-center text-white"
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
          className="mt-4 font-sans text-lg text-white text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Mientras otros entrenadores pueden buscar mantenerte dependiente de
          sus servicios, mi enfoque es empoderarte para lograr y mantener tus
          resultados de forma independiente. Utilizo métodos respaldados por la
          ciencia para diseñar planes personalizados y te proporciono todas las
          herramientas necesarias para que puedas gestionarte por ti mismo. Más
          allá de un simple cambio físico, busco ofrecer un servicio que cambie
          tu vida. Además, cada semana realizaremos una reunión en llamada para
          resolver cualquier duda compleja y garantizar un trato más personal y
          cercano, asegurando que entiendas cada aspecto de tu progreso y
          planificación.{" "}
        </p>
        <h3
          className="text-6xl text-center text-white"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "20px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          PREGUNTAS FRECUENTES
        </h3>
        <div className="bg-gray-900 text-white p-6 rounded-lg max-w-6xl mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
