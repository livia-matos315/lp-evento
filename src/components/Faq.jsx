import { faq } from '../data/evento';

function Faq() {
  return (
    <section id="faq" className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-azul text-center mb-8">Dúvidas Frequentes</h2>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-azul text-lg mb-2">{item.pergunta}</h3>
            <p className="text-slate-600">{item.resposta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Faq;
