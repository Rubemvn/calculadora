let display = document.getElementById("display");

let values = {
    operator: "",
    valueOne: null,
    valueTwo: null,
    valueOperation: null,
}

// COLOCA O FOCO PARA O INPUT ASSIM QUE A PAGINA É CARREGADA
window.onload = function () {
    display.focus();
}


// ESSA FUNÇÃO IMPEDE QUE TECLAS QUE NÃO CORRESPONDAM COM A CALCULADORA 
document.addEventListener("keydown", function (e) {
    if (!checkChar(e)) {
        e.preventDefault();
    } if (e.key === "Escape") {
        reset();

    } if (e.key === "Backspace") {
        backspace();
    }



})


// IMPEDE QUE O FOCO SAIA DO INPUT
display.addEventListener("blur", function () {
    display.focus();
})


// FAZ A CHECAGEM SE O CARACTERE É UMA TECLA VÁLIDA
function checkChar(e) {
    const char = e.key
    // console.log(char)

    const numbers = '[0-9]';

    if (char.match(numbers) || char == "ArrowLeft" || char == "ArrowRight") {
        return true
    }
}





function enterOperation(op){
    formatDisplay(op)
    if(typeof parseFloat(display.value) === "number"){
        valueChecker(op)
    }
    console.log(values)



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

function valueChecker(op){
    if((display.value && display.value !== "+" && display.value !== "-") && !values.valueOne){
        values.valueOne = parseFloat(display.value);
        console.log(values.valueOne)
        reset()
        values.operator = op;
    }else if((display.value && display.value !== "+" && display.value !== "-") && !values.valueTwo){
        values.valueTwo = parseFloat(display.value);
        reset()
    }
    if(values.valueOne && values.valueTwo){
        operation(values.valueOne, values.valueTwo, values.operator)
    }
}


function resolveOperation(op) {
    valueChecker(values.operator)
}

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

// DIGITA O NÚMERO SELECIONADO NA CALCULADORA
function enterNumber(value) {
    display.focus();

    display.value += `${value}`;
    let evento = new Event("keyup");
    display.dispatchEvent(evento);
}


// RESETA TODOS OS VALORES DA CALCULADORA
function reset() {
    display.value = "";
}

function backspace() {
    let valor = display.value;
    valor = valor.slice(0, -1);
    display.value = valor;

    let evento = new Event("keyup");
    display.dispatchEvent(evento);
}

