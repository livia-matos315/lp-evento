import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    const permissao = await Notification.requestPermission();

    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    const registro = await navigator.serviceWorker.ready;

    await registro.showNotification("Nome do Evento", {
      body: "Não se esqueça! O evento está prestes a começar.",
      icon: "/icone-192.png",
    });

    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-6">
      <button type="button" onClick={ativarLembrete} className="...">
        Me lembre do evento
      </button>

      {mensagem && (
        <p role="status" className="mt-2">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
