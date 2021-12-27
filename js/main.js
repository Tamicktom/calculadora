var tmp1 = null,
    tmp2 = null,
    stage = 0,
    stageSoma = false,
    stageSub = false,
    stageDiv = false,
    stageMult = false,
    result = 0;

//* Funções básicas
function somar(valor1, valor2) {
    return parseFloat(valor1) + parseFloat(valor2);
}

function subtrair(valor1, valor2) {
    return parseFloat(valor1) - parseFloat(valor2);
}

function dividir(valor1, valor2) {
    return parseFloat(valor1) / parseFloat(valor2);
}

function multiplicar(valor1, valor2) {
    return parseFloat(valor1) * parseFloat(valor2);
}

//* Estagiar a operação
function estagiar(valor1) {
    if (tmp1 != null) {
        tmp2 = valor1;
        resultado();
    } else {
        tmp1 = valor1;
    }
}

function verificarStage() {
    if (stage > 1) {
        stage = 0;
        return true;
    }
    return false;
}

function verificarOperacao(valor1, valor2) {
    if (stageSoma == true) {
        return somar(valor1, valor2);
    } else if (stageSub == true) {
        return subtrair(valor1, valor2);
    } else if (stageDiv == true) {
        return dividir(valor1, valor2);
    } else if (stageMult == true) {
        return multiplicar(valor1, valor2);
    } else {
        alert("Erro");
    }
}

function resultado() {
    result = verificarOperacao(tmp1, tmp2);
    console.log(result);
    clean();
}

function clean() {
    tmp1 = null;
    tmp2 = null;
    stage = 0;
    stageSoma = false;
    stageSub = false;
    stageMult = false;
    stageDiv = false;
    result = 0;
    console.log("limpado pai");
}