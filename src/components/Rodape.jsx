import { evento } from '../data/evento';

function Rodape() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800"> 
      <p>&copy; 2026 {evento.nome} — {evento.data}</p> 
    </footer>
  );
}

export default Rodape;
