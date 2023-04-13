// IMPEDE QUE O FOCO SAIA DO INPUT
// display.addEventListener("blur", function () {
//     display.focus();
// })
// // COLOCA O FOCO PARA O INPUT ASSIM QUE A PAGINA É CARREGADA
// window.onload = function () {
//     display.focus();
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
// FAZ A CHECAGEM SE O CARACTERE É UMA TECLA VÁLIDA
function checkChar(e) {
    // console.log(char)



}





// RESETA TODOS OS VALORES DA CALCULADORA
function reset() {
    display.value = "";
}

// APAGA O ÚLTIMO DIGITO
function backspace() {
    let valor = display.value;
    valor = valor.slice(0, -1);
    display.value = valor;

    let evento = new Event("keyup");
    display.dispatchEvent(evento);
}

// RESOLVE A OPERAÇÃO
function resolveOperation() {
    valueChecker(values.operator)
}



// QUANDO UMA TECLA DE OPERAÇÃO É ACIONADA
function enterOperation(op) {
    // formatDisplay(op)
    // if (typeof parseFloat(display.value) === "number") {
    //     valueChecker(op)
    // }
    // console.log(values)
    console.log(op)
}

// DIGITA O NÚMERO SELECIONADO NA CALCULADORA
function enterNumber(value) {
    console.log(value)
    // display.focus();

    // display.value += `${value}`;
    // let evento = new Event("keyup");
    // display.dispatchEvent(evento);
}

function teste() {
    console.log("rubem")
}

// VERIFICA SE O DISPLAY ESTÁ APTO PARA CONTINUAR A OPERAÇÃO
function formatDisplay(op) {
    if (op === "+" && (display.value === "" || display.value === "0" || display.value === "-" || display.value === "+")) {
        console.log(op);
        display.value = "+"
    }
    if (op === "-" && (display.value === "" || display.value === "0" || display.value === "+" || display.value === "-")) {
        console.log(op);
        display.value = "-"
    }
    if (op === "×" && (display.value === "0" || display.value === "" || display.value === "+" || display.value === "-")) {
        console.log(op);
        reset()
    }
    if (op === "÷" && (display.value === "0" || display.value === "" || display.value === "+" || display.value === "-")) {
        console.log(op);
        reset()
    }
}


// FAZ CHEGAGEM SE OS TEM VALORES PARA EFETUADA A OPERAÇÃO
function valueChecker(op) {
    if ((display.value && display.value !== "+" && display.value !== "-") && !values.valueOne) {
        values.valueOne = parseFloat(display.value);
        console.log(values.valueOne)
        reset()
        values.operator = op;
    } else if ((display.value && display.value !== "+" && display.value !== "-") && !values.valueTwo) {
        values.valueTwo = parseFloat(display.value);
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
        display.value = values.valueOperation;
        values.valueOne = null
        values.valueTwo = null
    } else if (op == "-") {
        values.valueOperation = num1 - num2;
        display.value = values.valueOperation;
        values.valueOne = null
        values.valueTwo = null
    } else if (op == "÷") {
        values.valueOperation = num1 / num2;
        display.value = values.valueOperation;
        values.valueOne = null
        values.valueTwo = null
    } else if (op == "×") {
        values.valueOperation = num1 * num2;
        display.value = values.valueOperation;
        values.valueOne = null
        values.valueTwo = null
    }
}




