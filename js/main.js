var tmp1 = null,
    tmp2 = null,
    stageSoma = false,
    stageSub = false,
    stageDiv = false,
    stageMult = false,
    result = 0,
    input = '';

//* Estagiar a operação
function estagiar(valor1) {
    if (tmp1 != null) {
        tmp2 = valor1;
        resultado();
        return 0;
    } else {
        tmp1 = valor1;
    }
    document.querySelector("#result").value = "";
}

function addNumber(number) {
    document.querySelector("#result").value += number;
}

function resultado() {
    result = verificarOperacao(tmp1, tmp2);
    mostrarResultado();
    console.log(result);
    cleanVars();
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

//* Reseta todas as variáveis
function cleanVars() {
    tmp1 = null;
    tmp2 = null;
    stageSoma = false;
    stageSub = false;
    stageMult = false;
    stageDiv = false;
    result = 0;
    input = '';
    console.log("cleaned");
}

function cleanInput() {
    document.querySelector("#result").value = '';
}

function mostrarResultado() {
    document.querySelector("#result").value = result;
}