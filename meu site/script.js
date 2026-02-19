const form = document.getElementById("formAgendamento");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if (!nome || !servico || !data || !hora) {
    alert("Preencha tudo certinho!");
    return;
  }

  // Bloquear domingo (0 = domingo)
  const dataEscolhida = new Date(data + "T00:00:00");
  const diaSemana = dataEscolhida.getDay();

  if (diaSemana === 0) {
    alert("A barbearia não atende no domingo. Escolha outra data.");
    return;
  }

  // Formatar data para ficar bonita
  const [ano, mes, dia] = data.split("-");
  const dataFormatada = ${dia}/${mes}/${ano};

  const mensagem =
    Olá! Quero agendar um horário na Barbearia Paulo Silva.%0A%0A +
    👤 Nome: ${nome}%0A +
    ✂️ Serviço: ${servico}%0A +
    📅 Data: ${dataFormatada}%0A +
    🕒 Horário: ${hora}%0A%0A +
    Pode confirmar pra mim?;

  // Número do WhatsApp (sem + e sem espaços)
  const telefone = "5563992131295";

  const link = https://wa.me/${telefone}?text=${mensagem};

  window.open(link, "_blank");
});