window.onload = function (e) {

    //programar aqui

    var btn1 = document.getElementById("btn1");
    

    btn1.onclick = function (e) {

        var numeroDigitado = document.getElementById("txt1").value;
        var numero = parseFloat(numeroDigitado);

        var calculo = raizQuadrada(numero);
        alert(calculo);

    };

    function raizQuadrada(numero) {
        var raiz = numero * numero;

        return raiz;
    }
}