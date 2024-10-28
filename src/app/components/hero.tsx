function Hero() {
  return (
    <div className="bg-gray-800">
      <section className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-montserrat text-white m-4 uppercase">
          Te enseño cómo cambiar tu físico y a seguir mejorándolo por ti mismo
          para no depender de un entrenador
        </h1>
        <p className="mt-4 font-sans text-lg text-white">
          &quot;Conmigo aprenderás a tomar el control de tu nutrición y
          entrenamiento para lograr resultados visibles y evitar errores que te
          hagan perder el tiempo. Te ayudaré a alcanzar tus objetivos y te
          enseñaré todo lo necesario para que puedas seguir progresando por tu
          cuenta a largo plazo&quot;.
        </p>
        <div className="mt-8">
          <iframe
            className="w-[1100px] h-[500px] mx-auto"
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
