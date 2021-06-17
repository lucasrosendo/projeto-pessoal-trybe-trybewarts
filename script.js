const log = document.querySelector('#button-logar')

function loginCorreto() {
var login = document.querySelector('.login-value');
var pass = document.querySelector('.pass-value');

  if ((login === 'tryber@teste.com') || (pass === '123456')) {
    window.alert('Olá, Tryber');
  } else{
    window.alert('Login ou senha inválidos.!');
  }
}

log.addEventListener('click', loginCorreto);
