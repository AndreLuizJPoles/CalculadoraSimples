function insert(num) {
    var conteudo = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = conteudo + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        if (resultado.substring(0, 1) == '*' || resultado.substring(0, 1) == '/') {
            document.getElementById('resultado').innerHTML = "Formato Inválido";
        }
        else {
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}