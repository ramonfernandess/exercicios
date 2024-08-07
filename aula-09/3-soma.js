window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {
        var number1 = parseFloat(document.getElementById("number1").value);
        var number2 = parseFloat(document.getElementById("number2").value);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var resposta = this.responseText;
                alert(resposta);
            }
        });

        xhr.open("GET", "https://localhost:44326/api/aula8/somar?number1=" + number1 + "&number2=" + number2);

        xhr.send();
    }
}
