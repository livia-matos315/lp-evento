import { useEffect, useRef } from "react";

const dados = [
  // 3 itens do seu evento, ex.: ingressos vendidos por tipo, inscritos por percurso...
  { rotulo: "5 km", valor: 185 },
  { rotulo: "10 km", valor: 120 },
  { rotulo: "Caminhada", valor: 65 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 380, 170);
    ctx.font = "14px sans-serif";
    ctx.textBaseline = "middle";
    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      ctx.fillStyle = "#1e3a8a";
      ctx.fillRect(110, y, largura, 30);
      ctx.fillStyle = "#111827";
      ctx.fillText(item.rotulo, 10, y + 15);
      ctx.fillText(item.valor, 110 + largura + 8, y + 15);
    });
  }, []);

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-azul">Inscritos por percurso</h2>
      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Gráfico de barras com inscritos da Corrida Noturna: 5 km com 185, 10 km com 120 e Caminhada com 65"
        className="mt-6 max-w-full"
      />
    </section>
  );
}

export default Grafico;
