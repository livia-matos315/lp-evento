import { evento } from "../data/evento";

function Hero() {
  const rolarParaInscricao = () => {
    const elemento = document.getElementById("inscricao");
    if (element) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-azul px-4 py-24 text-white text-center flex flex-col items-center justify-center">
      <span className="bg-amarelo text-azul px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow">
        Inscrições Abertas
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        {evento.nome}
      </h1>
      <p className="mt-2 text-xl font-medium text-amarelo italic">
        "{evento.slogan}"
      </p>
      
      <div className="mt-6 text-sm md:text-base text-slate-200 bg-black/20 px-6 py-3 rounded-lg backdrop-blur-sm space-y-1 mb-6">
        <p className="font-semibold text-white">🗓️ {evento.data}</p>
        <p>📍 Centro, Osvaldo Cruz - SP</p>
      </div>

      <button
        type="button"
        onClick={rolarParaInscricao}
        className="bg-amarelo text-azul font-extrabold py-3.5 px-8 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 transition-all shadow-lg text-lg transform hover:scale-105"
      >
        Quero me Inscrever 🏃‍♂️
      </button>
    </section>
  );
}

export default Hero;
