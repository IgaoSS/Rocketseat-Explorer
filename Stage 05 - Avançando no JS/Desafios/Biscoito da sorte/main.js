// Variáveis da aplicação
const screen1 = document.querySelector('.gameScreen');
const screen2 = document.querySelector('.cookieOpenned');
const btnOpenCookie = document.querySelector('#btnOpenCookie');
const btnOpenOtherCookie = document.querySelector('#btnOpenOtherCookie');
const phrases = [
    "Acredite em si mesmo, pois você é mais forte do que imagina.",
    "O sucesso chegará a você através da persistência e do trabalho duro.",
    "A maior aventura está esperando por você além de sua zona de conforto.",
    "Acredite em suas ideias, pois elas têm o poder de transformar o mundo.",
    "As melhores coisas da vida estão reservadas para aqueles que arriscam.",
    "Seja gentil e espalhe amor por onde passar; isso voltará para você multiplicado.",
    "A sabedoria está em aprender com o passado, viver o presente e sonhar com o futuro.",
    "Não tema falhas, pois são oportunidades disfarçadas para aprender e crescer.",
    "A maior jornada começa com um único passo. Dê o primeiro hoje.",
    "Seja grato pelas pequenas coisas; elas são as que fazem a vida valer a pena."
]
let randomNumber, phrase;

// Eventos
btnOpenCookie.addEventListener('click', openCookie);
btnOpenOtherCookie.addEventListener('click', toogleScreen);

// Funções da aplicação
function openCookie(){
    phrase = getPhrase();
    screen2.querySelector('#txtMesssage').innerText = phrase;
    toogleScreen();
}

function toogleScreen(){
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

function getPhrase(){
    randomNumber = Math.round(Math.random() * 10);
    return phrases[randomNumber];
}
