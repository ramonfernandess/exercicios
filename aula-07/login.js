window.onload = function (e) {

    var btnEntrar = document.getElementById("btnEntrar");
    var txtEmail = document.getElementById("txtEmail");
    txtEmail.focus();
    var txtSenha = document.getElementById("txtSenha");

    btnEntrar.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;
        var senha = txtSenha.value;

        if (email == "") {
            mensagemErro("Campo E-mail obrigatório.");
        }

        else if (senha == "") {
            mensagemErro("Campo Senha obrigatório.");
        }

        else {
            realizarLogin(email, senha);
        }
    };

    function mensagemErro(mensagem) {
        var spnErro = document.getElementById("spnErro");
        spnErro.innerText = mensagem;
        spnErro.style.display = "block";
        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }

    function realizarLogin(email, senha) {
        alert("O login foi realizado para o usuário " + email);
    }
}