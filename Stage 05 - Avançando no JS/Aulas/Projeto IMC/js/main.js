// ***** [IMPORTS DA APLICAÇÃO] ***** //
import { Modal } from './modal.js';
import { AlertError } from "./alert-error.js";
import { calculateIMC, notNumber } from "./utils.js";

// ***** [VARIÁVEIS DA APLICAÇÃO] ***** //
const Form = {
    form: document.querySelector('form'),
    inputWeight: document.querySelector('#txtWeight'),
    inputHeight: document.querySelector('#txtHeight')
}

// ***** [CRIAÇÃO DE EVENTOS] ***** //
Form.inputWeight.oninput = () => AlertError.close();
Form.inputHeight.oninput = () => AlertError.close();
Form.form.onsubmit = event => {
    event.preventDefault();

    const weight = Form.inputWeight.value;
    const height = Form.inputHeight.value;

    const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height); 

    if(weightOrHeightIsNotNumber){
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculateIMC(weight, height);
    displayResultMessage(result);
};

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}