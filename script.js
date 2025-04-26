const streamId = "748c0ff7"; // substitui se necessário
const statusDiv = document.getElementById('status');

try {
  const socket = new WebSocket(`wss://io.socialstream.ninja?streamId=${streamId}`);

  socket.addEventListener("open", () => {
    statusDiv.textContent = "✅ Ligação WebSocket bem-sucedida!";
    statusDiv.style.color = "lime";
  });

  socket.addEventListener("error", () => {
    statusDiv.textContent = "❌ Erro ao conectar ao WebSocket.";
    statusDiv.style.color = "red";
  });

  socket.addEventListener("close", () => {
    statusDiv.textContent = "⚠️ Ligação WebSocket fechada.";
    statusDiv.style.color = "orange";
  });
} catch (e) {
  statusDiv.textContent = "❌ Erro no código WebSocket.";
  statusDiv.style.color = "red";
}
