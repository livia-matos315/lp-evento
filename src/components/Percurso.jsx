import { niveis } from "../data/evento";
import CartaoPercurso from "./CartaoPercurso";

function Percursos() {
  return (
    <section id="percursos" className="bg-slate-50 py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-azul text-center mb-2">Nossos Percursos</h2>
      <p className="text-center text-slate-500 mb-8">Valores: 10 km — R$ 50 | 5 km — R$ 40 | Caminhada — R$ 25</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Percursos.map((percursos) => (
          <CartaoPercurso key={percursos.nome}>
            {percursos.nome} — {percursos.nivel}
          </CartaoPercurso>
        ))}
      </div>
    </section>
  );
}

export default Percursos;
