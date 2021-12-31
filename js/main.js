var tmp1 = null,
    tmp2 = null,
    stageSoma = false,
    stageSub = false,
    stageDiv = false,
    stageMult = false,
    preview = false,
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
        preview = true;
    }
    document.querySelector("#result").value = "";
}

function addNumber(number) {
    document.querySelector("#result").value += number;
    if (preview == true) { //* update preview
        document.querySelector("#preview").innerHTML = verificarOperacao(tmp1, document.querySelector("#result").value);
    }
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
    preview = false;
    result = 0;
    input = '';
    document.querySelector("#preview").innerHTML = '';
    console.log("cleaned");
}

function cleanInput() {
    document.querySelector("#result").value = '';
}

function mostrarResultado() {
    document.querySelector("#result").value = result;
}