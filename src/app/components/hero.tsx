import "@fontsource/poppins";

function Hero() {
  return (
    <div className="py-10 bg-gray-800">
      <section className="flex flex-col items-center text-center space-y-4 min-w-64 mx-auto">
        <h1
          className="font-bold text-center leading-tight text-3xl md:text-4xl lg:text-4xl text-white m-4"
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
          className="text-1x1 md:text-1xl lg:text-1xl mt-2 mb-6 font-sans text-lg text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          &quot;Aprende conmigo a tomar el control de tu nutrición y
          entrenamiento, obten resultados y sigue progresando sin depender de
          nadie&quot;.
        </p>

        <div className="relative w-full max-w-full overflow-hidden mt-4">
          <div className="flex justify-center h-screen">
            <iframe
              className="max-w-6xl w-full h-3/3"
              src="https://player.vimeo.com/video/359553297"
              title="VSL"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <section className="mt-32 flex justify-center">
          <button
            className="bg-yellow-500 text-black font-semibold py-5 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none flex flex-col items-center
    shadow-[0_0_30px_10px_rgba(255,193,7,0.4)]"
          >
            <span className="text-lg">Agenda tu llamada gratuita</span>
            <span className="text-sm mt-1 opacity-80">
              Para evaluar el caso de tu negocio
            </span>
          </button>
        </section>
      </section>
    </div>
  );
}

export default Hero;
