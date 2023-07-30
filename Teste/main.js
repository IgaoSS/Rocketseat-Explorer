const btnStart = document.querySelector('#btnStartApp');

btnStart.onclick = toggleScreen;

function toggleScreen(){
    let divIndex = 1;
    let nextDivIndex = divIndex + 1;

    console.log(divIndex, nextDivIndex);

    document.querySelector(`#div${divIndex}`).classList.toggle('hide');
    document.querySelector(`#div${nextDivIndex}`).classList.toggle('hide');
}