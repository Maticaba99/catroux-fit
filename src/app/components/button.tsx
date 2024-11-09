export default function Button({ text, subText }: { text: string, subText: string }) {
  return (
    <a href="https://calendly.com/catrouxbusiness/30min">
      <button
              className="          bg-blue-700 text-white font-semibold py-3 px-8 rounded-full 
            shadow-[0_0_1px_1px_rgba(0,128,255,0.6)] 
            transform transition-all duration-300  
            hover:shadow-[0_0_5px_5px_rgba(0,128,255,0.8)]
            focus:outline-none flex flex-col items-center space-y-1"
            >
              <span className="text-lg">{text}</span>
              <span className="text-sm mt-1 opacity-80">
                {subText}
              </span>
            </button>
      </a>
  );
}
