import { useState } from 'react';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Percursos from './components/Percurso';
import Programacao from './components/Programacao';
import Faq from './components/Faq';
import Rodape from './components/Rodape';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  function enviar(e) {
    e.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="max-w-md mx-auto my-10 p-6 bg-green-50 text-green-800 rounded-lg text-center font-medium shadow">
         Pronto! Vamos avisar {email} sobre as novidades da corrida.
      </div>
    );
  }
  
  return (
    <section className="bg-azul py-16 px-4 text-white">
      <form onSubmit={enviar} className="bg-white text-slate-800 p-8 flex flex-col gap-4 max-w-md mx-auto rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-azul text-center">Fique por dentro!</h3>
        <p className="text-sm text-slate-500 text-center mb-2">Receba avisos de lotes e novidades da corrida no seu e-mail.</p>
        <label className="flex flex-col gap-2 font-semibold text-sm">
          E-mail do corredor
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2.5 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-azul"
          />
        </label>
        <button type="submit" className="bg-amarelo text-azul font-extrabold py-3 px-4 rounded-lg hover:bg-yellow-400 transition shadow">
          Quero Receber Alertas
        </button>
      </form>
    </section>
  );
}

function App() {
  return (
    <main className="bg-white min-h-screen font-sans antialiased text-slate-800">
      <Hero />
      <Sobre />
      <Percursos />
      <Programacao />
      <Newsletter />
      <Faq />
      <Rodape />
    </main>
  );
}
export default App;
