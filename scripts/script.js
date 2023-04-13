// IMPEDE QUE O FOCO SAIA DO INPUT
// display.addEventListener("blur", function () {
//   
// })
// // COLOCA O FOCO PARA O INPUT ASSIM QUE A PAGINA É CARREGADA
// window.onload = function () {
//   
// }



let display = document.getElementById("display");

let values = {
    operator: "",
    valueOne: null,
    valueTwo: null,
    valueOperation: null,
}

// ESSA FUNÇÃO IMPEDE QUE TECLAS QUE NÃO CORRESPONDAM COM A CALCULADORA SEJAM DIGITADAS
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        reset();
    } if (e.key === "Backspace") {
        backspace();
    } if (e.key === "Enter") {
        resolveOperation();
    }

    let numberKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
    let operations = ["+", "-", "*", "/"]

    let valueBoolean = false;
    for (let i = 0; i <= numberKey.length; i++) {
        if (e.key == numberKey[i]) {
            enterNumber(e.key);
            valueBoolean = true;
            break;
        }
    } if (!valueBoolean) {
        for (let i = 0; i < operations.length; i++) {
            if (e.key == operations[i]) {
                enterOperation(e.key);
                break;
            }
        }
    }
})


// RESETA TODOS OS VALORES DA CALCULADORA
function reset() {
    display.textContent = 0;
}

// APAGA O ÚLTIMO DIGITO
function backspace() {
    let valor = display.textContent;
    valor = valor.slice(0, -1);
    display.textContent = valor;

    let evento = new Event("keyup");
    display.dispatchEvent(evento);
    if(display.textContent == ""){
        display.textContent = 0;
    }
}

// RESOLVE A OPERAÇÃO
function resolveOperation() {
    valueChecker(values.operator)
}


// QUANDO UMA TECLA DE OPERAÇÃO É ACIONADA
function enterOperation(op) {
    formatDisplay(op)
    if (typeof parseFloat(display.textContent) === "number") {
        valueChecker(op)
    }
}

// DIGITA O NÚMERO SELECIONADO NA CALCULADORA
function enterNumber(value) {
    if(display.textContent == 0){
        display.textContent = `${value}`;
    } else {
        display.textContent += `${value}`;
        let evento = new Event("keyup");
        display.dispatchEvent(evento);
    }
}

// VERIFICA SE O DISPLAY ESTÁ APTO PARA CONTINUAR A OPERAÇÃO
function formatDisplay(op) {
    if (op === "+" && (display.textContent === "" || display.textContent === "0" || display.textContent === "-" || display.textContent === "+")) {
        console.log(op);
        display.textContent = "+"
    }
    if (op === "-" && (display.textContent === "" || display.textContent === "0" || display.textContent === "+" || display.textContent === "-")) {
        console.log(op);
        display.textContent = "-"
    }
    if (op === "×" && (display.textContent === "0" || display.textContent === "" || display.textContent === "+" || display.textContent === "-")) {
        console.log(op);
        reset()
    }
    if (op === "÷" && (display.textContent === "0" || display.textContent === "" || display.textContent === "+" || display.textContent === "-")) {
        console.log(op);
        reset()
    }
}


// FAZ CHEGAGEM SE OS TEM VALORES PARA EFETUADA A OPERAÇÃO
function valueChecker(op) {
    if ((display.textContent && display.textContent !== "+" && display.textContent !== "-") && !values.valueOne) {
        values.valueOne = parseFloat(display.textContent);
        console.log(values.valueOne)
        reset()
        values.operator = op;
    } else if ((display.textContent && display.textContent !== "+" && display.textContent !== "-") && !values.valueTwo) {
        values.valueTwo = parseFloat(display.textContent);
        reset()
    }
    if (values.valueOne && values.valueTwo) {
        operation(values.valueOne, values.valueTwo, values.operator)
    }
}


// REALIZA A OPERAÇÃO
function operation(num1, num2, op) {
    if (op == "+") {
        values.valueOperation = num1 + num2;
        display.textContent = values.valueOperation;
        values.valueOne = null
        values.valueTwo = null
    } else if (op == "-") {
        values.valueOperation = num1 - num2;
        display.textContent = values.valueOperation;
        values.valueOne = null
        values.valueTwo = null
    } else if (op == "÷") {
        values.valueOperation = num1 / num2;
        display.textContent = values.valueOperation;
        values.valueOne = null
        values.valueTwo = null
    } else if (op == "×") {
        values.valueOperation = num1 * num2;
        display.textContent = values.valueOperation;
        values.valueOne = null
        values.valueTwo = null
    }
}




