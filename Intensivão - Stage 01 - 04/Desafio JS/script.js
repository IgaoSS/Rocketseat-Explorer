const numberOne = 20;
const numberTwo = 5;
const otherNumber = 13;

/************** Exercício 1 **************/
alert(`Hello world!`);

/************** Exercício 2 **************/
let sum = numberOne + numberTwo;
alert(`O resultado da adição é: ${numberOne} + ${numberTwo} = ${sum}`);

/************** Exercício 3 **************/
let num = 12;
if(typeof num == "number"){
    alert('É um número');
}
else{
    alert('Não é um número');
}

/************** Exercício 4 **************/
let text = "Igor";
if(typeof text == "string"){
    alert('É uma string');
}
else{
    alert('Não é uma string');
}

/************** Exercício 5 **************/
let bool = true;
if(typeof bool == "boolean"){
    alert('É um boolean');
}
else{
    alert('Não é um boolean');
}

/************** Exercício 6 **************/
let sub = numberOne - numberTwo;
alert(`O resultado da subtração é: ${numberOne} - ${numberTwo} = ${sub}`);

/************** Exercício 7 **************/
let mult = numberOne * numberTwo;
alert(`O resultado da multiplicação é: ${numberOne} * ${numberTwo} = ${mult}`);

/************** Exercício 8 **************/
let div = numberOne / numberTwo;
alert(`O resultado da divisão é: ${numberOne} / ${numberTwo} = ${div}`);

/************** Exercício 9 **************/
let numberIsEven = otherNumber % 2 === 0
if(numberIsEven){
    alert(`${otherNumber} é um número par!`);
}
else{
    alert(`${otherNumber} não é um número par!`);
}

/************** Exercício 10 **************/
let numberIsOdd = otherNumber % 2 > 0
if(numberIsOdd){
    alert(`${otherNumber} é um número ímpar!`);
}
else{
    alert(`${otherNumber} não é um número ímpar!`);
}