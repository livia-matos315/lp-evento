import { useState } from "react";

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const navegarPara = (idSecao) => {
    setMenuAberto(false); // Fecha o menu móvel ao clicar
    const elemento = document.getElementById(idSecao);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  const itensMenu = [
    { nome: "Sobre", id: "sobre" },
    { nome: "Percurso", id: "percurso" },
    { nome: "Programação", id: "programacao" },
    { nome: "Notificações", id: "notificacoes" },
    { nome: "Dúvidas", id: "duvidas" },
  ];

  return (
    <header className="bg-azul text-white sticky top-0 z-50 shadow-md backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="font-extrabold text-xl tracking-tight cursor-pointer"
          onClick={() => navegarPara("inicio")}
        >
          🏃‍♂️ <span className="text-amarelo">Corrida</span>OsvaldoCruz
        </div>

        <nav className="hidden md:flex space-x-8 font-medium">
          {itensMenu.map((item) => (
            <button
              key={item.id}
              onClick={() => navegarPara(item.id)}
              className="hover:text-amarelo transition-colors duration-200"
            >
              {item.nome}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {menuAberto ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.83-4.828 4.83a1 1 0 01-1.414-1.414l4.829-4.83-4.829-4.83a1 1 0 011.414-1.414l4.828 4.83 4.829-4.83a1 1 0 011.414 1.414l-4.829 4.83 4.829 4.83z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {menuAberto && (
        <div className="md:hidden bg-azul/95 border-t border-slate-700 font-medium px-4 pt-2 pb-4 space-y-3 flex flex-col">
          {itensMenu.map((item) => (
            <button
              key={item.id}
              onClick={() => navegarPara(item.id)}
              className="text-left py-2 hover:text-amarelo transition-colors duration-200"
            >
              {item.nome}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Cabecalho;
