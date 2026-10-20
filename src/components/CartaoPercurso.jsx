function CartaoPercurso({ children, descricao }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-md border-t-4 border-amarelo">
      <h3 className="text-xl font-bold text-azul mb-2">{children}</h3>
      <p className="text-slate-600 text-sm">{descricao}</p>
    </article>
  );
}
export default CartaoPercurso;
