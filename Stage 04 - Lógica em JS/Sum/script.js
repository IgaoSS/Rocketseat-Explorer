alert("Bem-vindo a calculadora!\n\nIremos realizar a soma de dois números");

let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

let numberOneConvert = Number(numberOne);
let numberTwoConvert = Number(numberTwo);

let sum = numberOneConvert + numberTwoConvert;
    
alert(`A soma dos números é: ${sum}`);