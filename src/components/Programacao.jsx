import { programacao } from "../data/evento";

function Programacao() {
  return (
    <section id="programacao" className="bg-slate-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-azul text-center mb-8">
          Programação Oficial
        </h2>
        <div className="bg-white rounded-xl shadow overflow-hidden">
          {programacao.map((item, index) => (
            <div
              key={index}
              className="flex border-b last:border-0 p-4 hover:bg-slate-50 transition"
            >
              <span className="font-bold text-azul w-24">
                {item.horario}
              </span>
              <span className="text-slate-700">{item.atividade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Programacao;
