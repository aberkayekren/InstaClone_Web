function scrollToBottom() {
  const container = document.getElementById('message-container');
  container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
}

      const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatLogs = document.querySelector('.chatlogs');

sendButton.addEventListener('click', function() {
  const message = messageInput.value;
  if (message !== '') {
    addMessage('self', message);
    messageInput.value = '';
    setTimeout(function() {
      addMessage('friend', 'Bir şeyler yazıyor...');
    }, 1000);
  }
});

function addMessage(user, message) {
  const chat = document.createElement('div');
  const userPhoto = document.createElement('div');
  const chatMessage = document.createElement('p');
  chat.classList.add('chat', user);
  userPhoto.classList.add('user-photo');
  chatMessage.classList.add('chat-message');
  chatMessage.innerText = message;
  chat.appendChild(userPhoto);
  chat.appendChild(chatMessage);
  chatLogs.appendChild(chat);
  scrollToBottom();
}