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
checkbox.addEventListener('change', submitForm);
