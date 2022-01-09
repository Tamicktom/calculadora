var temporary = null,
    equationType = null,
    stageDot = false,
    hasDot = false,
    preview = false,
    input = '',
    userView = document.querySelector("#result");

function estagiar(valor1) {
    if (temporary == null) {
        temporary = valor1;
        preview = true;
        userView.value = "";
    } else {
        mostrarResultado(temporary = verificarOperacao(temporary, valor1));
        preview = true;
        userView.value = "";
    }
}

function addNumber(number) {
    userView.value += number;
    if (stageDot == true) {
        userView.value = (userView.value.toString()).slice(0, -2) + number;
        stageDot = false;
    }
    if (preview == true) { //* update preview
        mostrarPreview(verificarOperacao(temporary, userView.value));
    }
}

function resultado() {
    mostrarResultado(verificarOperacao(temporary, userView.value));
    cleanVars();
}

function verificarOperacao(valor1, valor2) {
    switch (equationType) {
        case 'soma':
            return parseFloat(valor1) + parseFloat(valor2);
            break;
        case 'subtracao':
            return parseFloat(valor1) - parseFloat(valor2);
            break;
        case 'divisao':
            return parseFloat(valor1) / parseFloat(valor2);
            break;
        case 'multiplicacao':
            return parseFloat(valor1) * parseFloat(valor2);
            break;
        case 'porcentagem':
            return (parseFloat(valor1) / 100) * parseFloat(valor2);
            break;
        default:
            return parseFloat(valor2);
    }
}

function cleanVars() {
    equationType = null;
    temporary = null;
    stageDot = false;
    preview = false;
    hasDot = false;
    input = '';
    mostrarPreview('');
}

function cleanInput() {
    userView.value = '';
}

function mostrarResultado(resultado) {
    userView.value = parseFloat(resultado);
}

function mostrarPreview(preview) {
    document.querySelector("#preview").innerHTML = preview;
}

function inverterValor() {
    if (userView.value == 0) {
        return 0;
    } else {
        userView.value = (parseFloat(userView.value) * (-1));
    }
    if (preview == true)
        mostrarPreview(verificarOperacao(temporary, userView.value));
}

function addDot() {
    if (hasDot != true) {
        userView.value = userView.value + '.' + 0;
        stageDot = true;
        hasDot = true;
    }
}

function erase() {
    var temp = userView.value.toString();
    temp = temp.slice(0, -1);
    if ('.' == temp[temp.length - 1]) {
        temp = temp.slice(0, -1);
        hasDot = false;
    }
    userView.value = parseFloat(temp);
}

function finalizar() {
    userView.value = parseFloat(document.querySelector("#preview").innerHTML);
    cleanVars();
}