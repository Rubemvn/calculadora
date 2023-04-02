let display = document.getElementById("display");


function enterNumber(value){
    console.log(display.value)
    let valor = value;


    console.log(valor)
    if(display.value != 0){
        let newValue = parseInt(`${display.value}${valor}`)
        display.value = newValue;
        
    }if(display.value == 0){
        display.value = valor;
    }

}