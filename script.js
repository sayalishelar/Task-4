// Simulate user typing indicator
let typingTimeout;
let isTyping = false;

const messageInput = document.getElementById('messageInput');
const typingIndicator = document.getElementById('typingIndicator');
const messagesContainer = document.getElementById('messages');

messageInput.addEventListener('input', () => {
  if (messageInput.value) {
    if (!isTyping) {
      typingIndicator.style.display = 'block';
      isTyping = true;
    }

    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      typingIndicator.style.display = 'none';
      isTyping = false;
    }, 1000);
  } else {
    typingIndicator.style.display = 'none';
    isTyping = false;
  }
});

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText === '') return;

  const timestamp = new Date().toLocaleTimeString();
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.innerHTML = `<p>${messageText}</p><p class="timestamp">${timestamp}</p>`;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  messageInput.value = '';
  typingIndicator.style.display = 'none';
  isTyping = false;
}
