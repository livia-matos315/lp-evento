import { useState } from 'react';
import { faq } from '../data/evento';

function ItemFaq({ item, index }) {
  const [aberta, setAberta] = useState(false);
  const idResposta = `resposta-${index}`;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <h3>
        <button
          type="button"
          aria-expanded={aberta}
          aria-controls={idResposta}
          onClick={() => setAberta(!aberta)}
          className="w-full text-left p-6 font-bold text-azul text-lg flex justify-between items-center hover:bg-slate-50 focus:outline-none focus:bg-slate-50"
        >
          <span>{item.pergunta}</span>
          <span aria-hidden="true" className={`transform transition-transform ${aberta ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
      </h3>
      <div
        id={idResposta}
        hidden={!aberta}
        className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4"
      >
        <p>{item.resposta}</p>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section id="duvidas" className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-azul text-center mb-8">Dúvidas Frequentes</h2>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <ItemFaq key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Faq;
