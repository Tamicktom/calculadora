var tmp1 = null,
    tmp2 = null,
    stageSoma = false,
    stageSub = false,
    stageDiv = false,
    stageMult = false,
    result = 0;

//* Estagiar a operação
function estagiar(valor1) {
    if (tmp1 != null) {
        tmp2 = valor1;
        resultado();
    } else {
        tmp1 = valor1;
    }
}

function verificarOperacao(valor1, valor2) {
    if (stageSoma == true) {
        return parseFloat(valor1) + parseFloat(valor2);
    } else if (stageSub == true) {
        return parseFloat(valor1) - parseFloat(valor2);
    } else if (stageDiv == true) {
        return parseFloat(valor1) / parseFloat(valor2);
    } else if (stageMult == true) {
        return parseFloat(valor1) * parseFloat(valor2);
    } else {
        alert("Erro");
    }
}

function resultado() {
    result = verificarOperacao(tmp1, tmp2);
    console.log(result);
    clean();
}

//* Reseta todas as variáveis
function clean() {
    tmp1 = null;
    tmp2 = null;
    stageSoma = false;
    stageSub = false;
    stageMult = false;
    stageDiv = false;
    result = 0;
    console.log("limpado pai");
}