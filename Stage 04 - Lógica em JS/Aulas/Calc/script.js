let student = prompt("Qual o nome do(a) aluno(a)?");

let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;
average = average.toFixed(2);

let result = average > 6

if(result){
    alert(`Parabéns, ${student}!\n\nA sua média foi de: ${average}.`);
}
else if(average < 4){
    alert(`${student},\n\nVocê está reprovado!\nA sua média foi de: ${average}.`)
}
else{
    alert(`${student},\n\nEstude mais para sua prova de recuperação.\nA sua média foi de: ${average}.`);
}