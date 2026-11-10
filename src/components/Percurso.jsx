import { niveis } from "../data/evento";
import CartaoPercurso from "./CartaoPercurso";

function Percursos() {
  return (
    <section
      id="percursos"
      className="bg-slate-50 py-16 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-azul text-center mb-8">
        Nossos Percursos
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {niveis.map((item) => (
          <CartaoPercurso key={item.nome} descricao={`Categoria recomendada: ${item.nivel}`}>
            {item.nome}
          </CartaoPercurso>
        ))}
      </div>
    </section>
  );
}

export default Percursos;
