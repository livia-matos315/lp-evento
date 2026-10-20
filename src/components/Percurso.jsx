import { niveis } from "../data/evento"; // O array de dados correto
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
          <CartaoPercurso key={item.nome} descricao={item.descricao}>
            {item.nome} —{" "}
            <span className="text-sm font-normal text-slate-500 italic">
              {item.nivel}
            </span>
          </CartaoPercurso>
        ))}
      </div>
    </section>
  );
}

export default Percursos;
