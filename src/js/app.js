const ws = new WebSocket('ws://localhost:7070/ws');
ws.binaryType = 'blob';

ws.addEventListener('open', () => {
  console.log('connected');
});

const inputName = document.getElementsByClassName('enter_name')[0];
const modal = document.getElementsByClassName('registr_modal')[0];
const chatPage = document.getElementsByClassName('chat_page')[0];
const users = document.getElementsByClassName('users')[0];

ws.addEventListener('message', (evt) => {
  if (evt.data === 'Такое имя уже есть!') {
    alert('Этот псевдоним уже занят! Выберите, пожалуйста, другое имя.');
  } else {
    modal.style.display = 'none';
    chatPage.style.display = 'flex';
    const you = document.createElement('li');
    you.classList = 'user';
    you.innerHTML += `<img src="./image/user.png" class="user_image"><span class="name">${inputName.value}</span>`;
    users.appendChild(you);
  }
});

const inputMess = document.getElementsByClassName('message_input')[0];
const enterMess = document.getElementsByClassName('enter_message')[0];
const listMess = document.getElementsByClassName('list_mess')[0];

enterMess.addEventListener('click', () => {
  if (inputMess.value === '') {
    alert('Невозможно отправить пустое сообщение!');
  } else {
    const yourMess = document.createElement('li');
    yourMess.classList = 'your_message';
    yourMess.innerHTML += `<span class="your_name">You</span><div class="text_message">${inputMess.value}</div>`;
    listMess.appendChild(yourMess);
  }
});