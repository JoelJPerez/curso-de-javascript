class Calculadora {
    constructor(){
    };
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    };
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    potencia(num, exp){
        return Math.pow(num, exp);
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("Que operacion quieres realizar?");
let operacion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    let resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    let resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3){
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    let resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4){
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    let resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5){
    let numero1 = prompt("numero a potenciar");
    let numero2 = prompt("exponente");
    let resultado = calculadora.potencia(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6){
    let numero = prompt("conocer la raiz cuadrada de:");
    let resultado = calculadora.raizCuadrada(numero);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7){
    let numero = prompt("conocer la raiz cubica de:");
    let resultado = calculadora.raizCubica(numero);
    alert(`tu resultado es ${resultado}`);
}
else{
    alert("no se ha encontrado la operacion");
}