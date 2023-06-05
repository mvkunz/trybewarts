const loginForm = document.querySelector('.trybewarts-login');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userEmail = loginForm.email.value;
  const userPassword = loginForm.password.value;

  if (userEmail === 'tryber@teste.com' && userPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const submitForm = () => {
  const markBox = checkbox.checked;
  if (markBox) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};
checkbox.addEventListener('input', submitForm);

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.value = 500;
const updateValue = () => {
  const characters = 500 - textArea.value.length;
  counter.innerText = characters;
};
const countCharacters = () => {
  const inputLength = textArea.value.length;
  const maxCharacters = 500;
  if (inputLength < maxCharacters) {
    counter.innerText -= 1;
  } else if (inputLength > 0) {
    counter.innerText += 1;
  }
};
textArea.addEventListener('keydown', updateValue);
textArea.addEventListener('input', updateValue);
textArea.addEventListener('input', countCharacters);
textArea.addEventListener('keyup', updateValue);
// o evento keydown chama a função updateValue sempre que é dado um clique dentro do textarea
// input updateValue : é acionada quando ocorre alguma mudança no textearea
// input countCharacters: é acionada quando o evento input responsável por contar o número de caracteres no textarea e atualizá-lo acontece
