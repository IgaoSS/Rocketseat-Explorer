const randomNumber = Math.round(Math.random() * 10);
let result = prompt("Adivinhe o número que estou pensando? Entre 0 e 10");

let xAttempts = 1;
while (Number(result) != Number(randomNumber)) {
    result = prompt("Errado! Tente novamente: ");
    xAttempts++;
}

if(xAttempts == 1){
    xAttempts += ' tentativa';
}
else{
    xAttempts += ' tentativas';
}

alert(`Parabéns! Você adivinhou o número!\n\nO número que pensei foi o ${randomNumber}, e você acertou em ${xAttempts}!`);