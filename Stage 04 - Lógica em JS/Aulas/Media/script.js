alert("Bem-vindo a calculadora!");

let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

let numberOneConvert = Number(numberOne);
let numberTwoConvert = Number(numberTwo);

const sum = numberOneConvert + numberTwoConvert;
const sub = numberOneConvert - numberTwoConvert;
const mult = numberOneConvert * numberTwoConvert;
const div = numberOneConvert / numberTwoConvert;
const restDiv = numberOneConvert % numberTwoConvert;
    
alert(`A soma dos números é: ${sum}`);
alert(`A subtração dos números é: ${sub}`);
alert(`A multiplicação dos números é: ${mult}`);
alert(`A divisão dos números é: ${div}`);
alert(`O resto da divisão dos números é: ${restDiv}`);