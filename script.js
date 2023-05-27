const myEmail = document.querySelector('.trybewarts-login.email');
const myPassword = document.querySelector('.trybewarts-login.password');
const myButtons = document.querySelectorAll('.submit');

for (let index = 0; index < myButtons.length; index += 1) {
  myButtons[index].addEventListener('click', (event) => {
    event.preventDefault();

    const userEmail = myEmail.value;
    const userPassword = myPassword.value;

    if (userEmail === 'tryber@teste.com' && userPassword === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos');
    }
  });
}
