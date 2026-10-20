import { evento } from "../data/evento";

function Sobre() {
  return (
    <section
      id="sobre"
      className="py-16 px-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h2 className="text-3xl font-bold text-azul mb-4">Sobre o Evento</h2>
        <p className="text-slate-700 leading-relaxed">{evento.sobre}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        {evento.numeros.map((n, index) => (
          <div key={index} className="bg-azul text-white p-4 rounded-xl shadow">
            <span className="block text-3xl font-extrabold text-amarelo">
              {n.quantidade}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider">
              {n.item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Sobre;
