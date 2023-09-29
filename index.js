const venom = require("venom-bot");

venom
  .create({
    session: "bot",
  })
  .then((client) => sendMessage(client))
  .catch((erro) => {
    console.log(erro);
  });
async function sendMessage(client) {
  const interval = 2000;
  let count = 0;

  const sendInterval = setInterval(async () => {
    count++;

    await client
      .sendText(
        "000000000000@c.us",
        "Essa mensagem está sendo enviada por um bot!"
      )
      .then((result) => {
        console.log(`Mensagem ${count} enviada. Result:`, result);
      })
      .catch((erro) => {
        console.error(`Erro ao enviar mensagem ${count}:`, erro);
      });

    if (count >= 5) {
      clearInterval(sendInterval);
    }
  }, interval);
}
