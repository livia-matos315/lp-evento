function Hero() {
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
      <div className="mt-6 text-sm md:text-base text-slate-200 bg-black/20 px-6 py-3 rounded-lg backdrop-blur-sm space-y-1">
        <p className="font-semibold text-white">🗓️ {evento.data} · {evento.horario}</p>
        <p>📍 {evento.local}</p>
      </div>
    </section>
  );
}
export default Hero;

