// Variáveis da aplicação
const screen1 = document.querySelector('.mainScreen');
const screen2 = document.querySelector('.finalScreen'); 
const btnTry = document.querySelector("#btnTry"); 
const btnPlayAgain = document.querySelector("#btnPlayAgain"); 
let randomNumber = generateRandomNumber();
let xAttempts = 1;
let msgValidation, isOK;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnPlayAgain.addEventListener('click', handleResetClick);
document.addEventListener('keypress', handleEnterPress);

// Função callback
function handleTryClick(event){
    event.preventDefault(); //Não fazer o padrão do botão, que seria submitar
    
    const inputNumber = document.querySelector('#txtNumber');
    isOK = validateInput(inputNumber.value);

    if(isOK == 'ok'){
        if(Number(inputNumber.value) == Number(randomNumber)) {
            toggleScreen();
            screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas!`;
        }

        xAttempts++;
    }
    else{
        alert(isOK);
    }

    inputNumber.value = "";
}

function handleResetClick(){
    toggleScreen();
    xAttempts = 1;
    randomNumber = generateRandomNumber();
}

function toggleScreen(){
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

function generateRandomNumber(){
    return Math.round(Math.random() * 10);
}

function handleEnterPress(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick();
    };
}

function validateInput(input){
    if(input < 0 || input > 10){
        msgValidation = 'Por favor, informe um número válido.\n\nSão aceitos apenas números entre 0 e 10.';
    }
    else if(input == ''){
        msgValidation = 'Por favor, informe um número.';
    }
    else{
        msgValidation = 'ok';
    }

    return msgValidation;
}