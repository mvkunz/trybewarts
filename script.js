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
  const input = textArea.value.length;
  const characters = 500;
  const remainingCharacters = characters - input;
  counter.value = remainingCharacters;
};

const countCharacters = () => {
  const inputLength = textArea.value.length;
  const maxCharacters = 500;
  if (inputLength < maxCharacters) {
    counter.value -= 1;
  } else if (inputLength > 0) {
    counter.value += 1;
  }
};

textArea.addEventListener('keypress', countCharacters);
textArea.addEventListener('keydown', updateValue);
// o evento keydown chama a função updateValue sempre que uma é dado um clique dentro do textarea
