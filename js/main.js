var tmp1 = null,
    tmp2 = null,
    equationType = null,
    stageDot = false,
    hasDot = false,
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

//* Adicionar numeros
function addNumber(number) {
    userView.value += number;
    if (stageDot == true) {
        userView.value = (userView.value.toString()).slice(0, -2) + number;
        stageDot = false;
    }
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
            console.log('Erro');
    }
}

//* Reseta todas as variáveis
function cleanVars() {
    tmp1 = null;
    tmp2 = null;
    equationType = null;
    hasDot = false;
    stageDot = false;
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
    if (userView.value == 0) {
        return 0;
    } else {
        userView.value = (parseFloat(userView.value) * (-1));
        console.log("valor: " + userView.value);
    }
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