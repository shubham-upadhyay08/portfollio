document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const messages = document.getElementById("chat-messages");

  function appendMessage(text, fromUser = true) {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = (fromUser ? "You: " : "Bot: ") + text;
    msgDiv.style.padding = "5px 10px";
    msgDiv.style.borderRadius = "5px";
    msgDiv.style.backgroundColor = fromUser ? "#d1e7dd" : "#f8d7da";
    msgDiv.style.color = fromUser ? "#0f5132" : "#842029";
    messages.appendChild(msgDiv);
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;
    appendMessage(text, true);
    input.value = "";

    setTimeout(() => {
      appendMessage("Sorry, मैं अभी तुम्हारी बात समझ नहीं पाया हूँ।", false);
    }, 1000);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
});