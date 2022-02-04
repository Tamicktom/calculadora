let temporary = null,
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
        userView.innerHTML = "";
    } else {
        mostrarResultado(temporary = verificarOperacao(temporary, valor1));
        preview = true;
        userView.innerHTML = "";
    }
}

function addNumber(number) {
    userView.innerHTML += number;
    if (stageDot == true) {
        userView.innerHTML = (userView.innerHTML.toString()).slice(0, -2) + number;
        stageDot = false;
    }
    if (preview == true) { //* update preview
        mostrarPreview(verificarOperacao(temporary, userView.innerHTML));
    }
}

function resultado() {
    mostrarResultado(verificarOperacao(temporary, userView.innerHTML));
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
    userView.innerHTML = '';
}

function mostrarResultado(resultado) {
    userView.innerHTML = parseFloat(resultado);
}

function mostrarPreview(preview) {
    document.querySelector("#preview").innerHTML = preview;
}

function inverterValor() {
    if (userView.innerHTML == 0) {
        return 0;
    } else {
        userView.innerHTML = (parseFloat(userView.innerHTML) * (-1));
    }
    if (preview == true)
        mostrarPreview(verificarOperacao(temporary, userView.innerHTML));
}

function addDot() {
    if (hasDot != true) {
        userView.innerHTML = userView.innerHTML + '.' + 0;
        stageDot = true;
        hasDot = true;
    }
}

function erase() {
    var temp = userView.innerHTML.toString();
    temp = temp.slice(0, -1);
    if ('.' == temp[temp.length - 1]) {
        temp = temp.slice(0, -1);
        hasDot = false;
    }
    userView.innerHTML = parseFloat(temp);
    if (preview == true)
        mostrarPreview(verificarOperacao(temporary, userView.innerHTML));
}

function finalizar() {
    userView.innerHTML = parseFloat(document.querySelector("#preview").innerHTML);
    cleanVars();
}