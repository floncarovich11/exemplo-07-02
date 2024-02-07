document.addEventListener("DOMContentLoaded",function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message")

    loginForm.addEventListener("submit",function(e){
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        const senha = "123";
        const usuario = "Felipe";

        if (username === usuario && password === senha){
            errorMessage.textContent = "Login bem-sucedido!";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Nome de usuário/senha incorretos.";
            errorMessage.style.color = "red";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastro-form");
    const errorMessage = document.getElementById("error-message-cadastro");

    cadastroForm.addEventListener("submit", function(e){
        e.preventDefault();
        const password = cadastroForm.password.value;
        const confirpassword = cadastroForm.confirmarPassword.value;

        if (password === senha) {
            errorMessage.textContent = 'Cadastro realuzado com sucesso!';
            errorMessage.style.color = 'green';
        } else {
            errorMessage.textContent = 'As senhas estão diferentes';
            errorMessage.style.color = 'red';
        }
    });

});