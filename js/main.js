var tmp1 = null,
    tmp2 = null,
    stageSoma = false,
    stageSub = false,
    stageDiv = false,
    stageMult = false,
    stagePorcent = false,
    preview = false,
    result = 0,
    input = '',
    userView = document.querySelector("#result");

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
    userView.value = "";
}

function addNumber(number) {
    userView.value += number;
    if (preview == true) { //* update preview
        mostrarPreview(verificarOperacao(tmp1, userView.value));
    }
}

function resultado() {
    mostrarResultado(result = verificarOperacao(tmp1, tmp2));
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
    } else if (stagePorcent == true) {
        return (parseFloat(valor1) / 100) * parseFloat(valor2);
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
    stagePorcent = false;
    preview = false;
    result = 0;
    input = '';
    mostrarPreview('');
    console.log("cleaned");
}

function cleanInput() {
    userView.value = '';
}

function mostrarResultado(resultado) {
    userView.value = resultado;
}

function mostrarPreview(preview) {
    document.querySelector("#preview").innerHTML = preview;
}

function inverterValor() {
    if (userView.value > 0) {
        userView.value = userView.value * (-1);
    } else {
        userView.value = userView.value * (1);
    }
}