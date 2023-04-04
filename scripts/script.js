let display = document.getElementById("display");


// COLOCA O FOCO PARA O INPUT ASSIM QUE A PAGINA É CARREGADA
window.onload = function () {
    display.focus();
}

// ESSA FUNÇÃO IMPEDE QUE TECLAS QUE NÃO CORRESPONDAM COM A CALCULADORA 
document.addEventListener("keydown", function (e) {
    if (!checkChar(e)) {
        e.preventDefault();
    }
})


// IMPEDE QUE O FOCO SAIA DO INPUT
display.addEventListener("blur", function () {
    display.focus();
})


// FAZ A CHECAGEM SE O CARACTERE É UMA TECLA VÁLIDA
function checkChar(e) {
    const char = e.key
    console.log(e.key)

    const numbers = '[0-9"Arrow""Backspace"]';

    if (char.match(numbers)) {
        console.log(char)
        return true
    }
}

// DIGITA O NÚMERO SELECIONADO NA CALCULADORA
function enterNumber(value) {
    display.focus();

    display.value += `${value}`;
    let evento = new Event("keyup");
    display.dispatchEvent(evento);
    

}

