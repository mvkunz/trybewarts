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
