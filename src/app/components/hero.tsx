import "@fontsource/poppins";

function Hero() {
  return (
    <div className="py-* bg-gray-800">
      <section className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <h1 className="text-3xl md:text-4xl lg:text-4xl  text-white m-4 uppercase">
            Te enseño cómo cambiar tu físico y a seguir mejorándolo por ti mismo
            para no depender de un entrenador
          </h1>
        </div>

        <p className="text-xl md:text-2xl lg:text-3xl mt-4 font-sans text-lg text-white">
          &quot;Conmigo aprenderás a tomar el control de tu nutrición y
          entrenamiento para lograr resultados visibles y evitar errores que te
          hagan perder el tiempo. Te ayudaré a alcanzar tus objetivos y te
          enseñaré todo lo necesario para que puedas seguir progresando por tu
          cuenta a largo plazo&quot;.
        </p>
        <div
          className="relative w-full max-w-full overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://player.vimeo.com/video/359553297"
            title="VSL"
            allowFullScreen
          ></iframe>
        </div>
        <button className="-translate-y-2 mt-8 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex flex-col items-center">
          <span className="text-lg">Reserva una llamada conmigo</span>
          <span className="text-sm mt-1 opacity-80">
            y empieza tu transformación
          </span>
        </button>
      </section>
    </div>
  );
}

export default Hero;
