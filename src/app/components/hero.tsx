import "@fontsource/poppins";

function Hero() {
  return (
    <div className="py-10 bg-gray-800">
      <section className="flex flex-col items-center text-center space-y-4 min-w-64 mx-auto">
        <h1
          className="font-bold text-center leading-tight text-3xl md:text-4xl lg:text-4xl  text-white m-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          Te enseño cómo cambiar tu físico y a seguir mejorándolo por ti mismo
          para no depender de un entrenador y nutricionista a largo plazo
        </h1>

        <p
          className="text-1x1 md:text-1xl lg:text-1xl mt-4 font-sans text-lg text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          &quot;Aprende conmigo a tomar el control de tu nutrición y
          entrenamiento, obten resultados y sigue progresando sin depender de
          nadie&quot;.
        </p>
        <div className="relative w-full max-w-full overflow-hidden">
          <div className="flex justify-center  h-screen">
            {" "}
            <iframe
              className="max-w-6xl w-full h-3/3"
              src="https://player.vimeo.com/video/359553297"
              title="VSL"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <section className="mt-32">
          <button className="-translate-y-2  bg-blue-600 text-white font-semibold py-5 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex flex-col items-center">
            <span className="text-lg">Reserva una llamada conmigo</span>
            <span className="text-sm mt-1 opacity-80">
              y empieza tu transformación
            </span>
          </button>
        </section>
      </section>
    </div>
  );
}

export default Hero;
