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
checkbox.addEventListener('change', function () {
  const checkedBox = checkbox.checked;
  if (checkedBox) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
