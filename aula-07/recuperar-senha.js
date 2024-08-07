window.onload = function (e) {
    var bntRecuperarEmail = document.getElementById("bntRecuperarEmail");
    var txtEmail = document.getElementById("txtEmail");
    txtEmail.focus();

    bntRecuperarEmail.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            mensagemErro("Campo E-mail obrigatório.");
        }

        else {
            esqueciSenha(email);
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

    function esqueciSenha(email) {
        alert("Foi enviado um link de recuperação da senha para " + email);
    }
}