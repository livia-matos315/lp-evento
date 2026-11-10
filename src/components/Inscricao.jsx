import { useState } from 'react';

function Inscricao() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    cpf: ''
  });
  const [enviado, setEnviado] = useState(false);

  function lidarComCpf(e) {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    if (valor.length <= 11) {
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    setDados({ ...dados, cpf: valor });
  }

  function enviarInscricao(e) {
    e.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div 
        role="status" 
        className="max-w-md mx-auto my-12 p-6 bg-green-50 text-green-800 rounded-xl text-center font-medium shadow-md border border-green-200"
      >
        <p className="text-lg font-bold mb-1">🎉 Inscrição realizada com sucesso!</p>
        <p className="text-sm text-green-700">
          Confirmamos os dados de <strong>{dados.nome}</strong>. Um e-mail de confirmação foi enviado para {dados.email}.
        </p>
      </div>
    );
  }

  return (
    <section id="inscricao" className="bg-slate-50 py-16 px-4">
      <div className="bg-white text-slate-800 p-8 flex flex-col gap-6 max-w-md mx-auto rounded-xl shadow-lg border border-slate-100">
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-azul">Garanta sua vaga</h2>
          <p className="text-sm text-slate-500 mt-1">Preencha os campos abaixo para se inscrever na corrida.</p>
        </div>

        <form onSubmit={enviarInscricao} className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nome-completo" className="font-semibold text-sm text-slate-700">
              Nome completo
            </label>
            <input
              id="nome-completo"
              type="text"
              required
              autoComplete="name"
              value={dados.nome}
              onChange={(e) => setDados({ ...dados, nome: e.target.value })}
              className="border p-2.5 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-azul transition-all"
              placeholder="Digite seu nome completo"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email-corredor" className="font-semibold text-sm text-slate-700">
              E-mail do corredor
            </label>
            <input
              id="email-corredor"
              type="email"
              required
              autoComplete="email"
              value={dados.email}
              onChange={(e) => setDados({ ...dados, email: e.target.value })}
              className="border p-2.5 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-azul transition-all"
              placeholder="exemplo@email.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="cpf-corredor" className="font-semibold text-sm text-slate-700">
              CPF
            </label>
            <input
              id="cpf-corredor"
              type="text"
              required
              inputMode="numeric" 
              maxLength="14"
              value={dados.cpf}
              onChange={lidarComCpf}
              className="border p-2.5 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-azul transition-all"
              placeholder="000.000.000-00"
            />
          </div>

          <button 
            type="submit" 
            className="bg-amarelo text-azul font-extrabold py-3.5 px-4 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 transition-all shadow-md mt-2"
          >
            Confirmar Minha Inscrição
          </button>

        </form>
      </div>
    </section>
  );
}

export default Inscricao;
