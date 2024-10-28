function Hero() {
  return (
    <div>
      <button className="-translate-y-2 mt-8 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex flex-col items-center">
        <span className="text-lg">Reserva una llamada conmigo</span>
        <span className="text-sm mt-1 opacity-80">
          y empieza tu transformación
        </span>
      </button>
    </div>
  );
}

export default Hero;
