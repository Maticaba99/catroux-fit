import { FaQuestionCircle } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="bg-gray-800">
      {" "}
      {/* Cambiado de <objesiones> a <div> */}
      <div className="bg-gray-900 text-white p-6 rounded-lg max-w-6xl mx-auto">
        <p className="text-center text-2xl font-bold mb-6">
          Valor Diferencial:{" "}
        </p>

        <p className="mt-2 text-lg text-white mb-6 space-y-4 max-w-4xl mx-auto">
          Mientras otros entrenadores buscan mantenerte atado a sus servicios,
          yo me centro en que logres la independencia. No solo cambiarás tu
          físico, sino que aprenderás a mantener y mejorar tus resultados sin
          depender de asesorías constantes para que no tengas que pagar a nadie
          todos los meses.{" "}
        </p>

        <h2 className="text-center text-2xl font-bold mb-6">
          PREGUNTAS FRECUENTES
        </h2>

        <div className="space-y-4">
          {/* Primera pregunta */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Cuánto tiempo necesito seguir tus asesorías para ver
                resultados?
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl ">
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
              <h3 className="font-semibold">
                ¿Qué sucede después de finalizar la asesoría?
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              Habrás aprendido a gestionar tu nutrición y entrenamiento de
              manera autónoma, evitando la necesidad de una asesoría continua.
            </p>
          </div>

          {/* Otras preguntas */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Voy a tener que hacer dieta estricta?
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              No, crearemos un plan con alimentos que disfrutes y que ya sean
              parte de tu vida diaria, ajustados a tus objetivos.{" "}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Cómo puedo saber si el plan funcionará para mí?{" "}
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              Diseñaremos un plan basado en tus preferencias y necesidades
              específicas, asegurándonos de que sea sostenible y efectivo para
              ti.{" "}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Qué pasa si nunca he seguido un plan de entrenamiento?{" "}
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              Te guiaré paso a paso, enseñándote las técnicas y el enfoque
              correcto para que desarrolles confianza y conocimiento.{" "}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Qué diferencia hay entre tus asesorías y las de otros
                entrenadores?{" "}
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              Mi enfoque es enseñarte a gestionar tu físico por ti mismo, para
              que no dependas de asesorías a largo plazo.{" "}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Puedo adaptar mi plan si mi vida cambia?{" "}
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              Por supuesto. Tu plan será flexible y se ajustará a tu estilo de
              vida y cambios, garantizando su efectividad en cualquier
              situación.{" "}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Cuántas veces a la semana debo entrenar?{" "}
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              Diseñaremos un plan que se adapte a tus horarios y estilo de vida,
              garantizando que puedas mantener la constancia.{" "}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Y si no tengo experiencia en el gimnasio?{" "}
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              No te preocupes. Mis asesorías están diseñadas para todos los
              niveles, desde principiantes hasta avanzados.{" "}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-400 mr-2" />
              <h3 className="font-semibold">
                ¿Qué pasa si no veo resultados en un tiempo razonable?{" "}
              </h3>
            </div>
            <p className="mt-2 text-gray-300 mt-2 space-y-4 max-w-3xl">
              Revisaremos juntos el plan y haremos los ajustes necesarios para
              maximizar tus resultados. Estoy comprometido a guiarte hasta
              alcanzar tus objetivos.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
