// ***** [VARIÁVEIS DA APLICAÇÃO] ***** //

// Estruturando a modal
// Esse objeto fica responsável por orquestrar toda ação relacionada a modal
const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open');
    },
    close(){
        Modal.wrapper.classList.remove('open');
    }
}

// Estruturando o formulário
// Esse objeto fica responsável por orquestrar toda ação relacionada ao form
const Form = {
    form: document.querySelector('form'),
    inputWeight: document.querySelector('#txtWeight'),
    inputHeight: document.querySelector('#txtHeight')
}

// ***** [CRIAÇÃO DE EVENTOS] ***** //
Form.form.onsubmit = handleSubmitButton;
Modal.buttonClose.onclick = handleClickButton;

// ***** [FUNÇÕES] ***** //
function handleSubmitButton(event){
    event.preventDefault();
    
    const weight = Form.inputWeight.value;
    const height = Form.inputHeight.value;
    
    const result = calculateIMC(weight, height);
    const message = `Seu IMC é de ${result}`;
    
    Modal.message.innerText = message;
    Modal.open();
}

function handleClickButton(){
    Modal.close();
}

function calculateIMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2);
}
