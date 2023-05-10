const usuarios = [
    { email: "usuario1@exemplo.com", senha: "senha1" },
    { email: "usuario2@exemplo.com", senha: "senha2" },
    { email: "usuario3@exemplo.com", senha: "senha3" },
    { email: "rocha.joao.victor.50@gmail.com", senha: "joao1234" },
];

const btnCadastrar = document.querySelector('.btn-cadastrar');

btnCadastrar.addEventListener('click', () => {
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const senhaConfirm = document.querySelector('input[name="senhaConfirm"]').value;
  
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const msgUsuario = document.querySelector('.mensagem');
    msgUsuario.style.color = 'red';
    msgUsuario.style.textAlign = 'center';

    if (!senha && !email && !senhaConfirm) {
        msgUsuario.innerHTML = 'Preencha todos os campos!';
    } else if (!email) {
        msgUsuario.innerHTML = 'Preencha o campo email!';
    } else if (!senha) {
        msgUsuario.innerHTML = 'Preencha o campo senha!';
    } else if (!senhaConfirm) {
        msgUsuario.innerHTML = 'Preencha o campo de confirmar a senha!';
    } else if (!emailRegex.test(email)) {
        msgUsuario.innerHTML = 'Email inválido';
    } else if (senha.length < 8) {
        msgUsuario.innerHTML = 'A senha deve ter pelo menos 8 caracteres';
    } else if (senha !== senhaConfirm) {
        msgUsuario.innerHTML = 'As senhas não conferem';
    } else {
        const novoUsuario = { email: email, senha: senha };
        usuarios.push(novoUsuario);
        window.location.href = './../PageLogin/index.html';
    }
});
