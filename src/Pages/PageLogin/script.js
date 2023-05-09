const usuarios = [
    { email: "usuario1@exemplo.com", senha: "senha1" },
    { email: "usuario2@exemplo.com", senha: "senha2" },
    { email: "usuario3@exemplo.com", senha: "senha3" },
    { email: "rocha.joao.victor.50@gmail.com", senha: "joao1234" },
];

const btnLogar = document.querySelector('.btn-logar');

btnLogar.addEventListener('click', () => {
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
  
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  
    const msgUsuario = document.querySelector('.mensagem');
    msgUsuario.style.color = 'red';
    msgUsuario.style.textAlign = 'center';

    if (!senha && !email) {
        msgUsuario.innerHTML = 'Preencha os campos!';
    } else if (!email) {
        msgUsuario.innerHTML = 'Preencha o campo email';
    } else if (!senha) {
        msgUsuario.innerHTML = 'Preencha o campo senha';
    } else if (usuario) {
        console.log(usuario);
        window.location.href = './../PageHome/index.html';
    } else {
        msgUsuario.innerHTML = 'Email ou senha incorretos. Tente novamente.';
    }
});