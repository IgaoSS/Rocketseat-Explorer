// Estruturando a modal
// Esse objeto fica responsável por orquestrar toda ação relacionada a modal
export const Modal = {
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

// ***** [FUNÇÕES PARA A MODAL] ***** //
// Função para fechar a modal no X
Modal.buttonClose.onclick = () => {
    Modal.close();
}

// Função para fechar a modal com a tecla Esc
window.addEventListener('keydown', handleKeydown);
function handleKeydown(event){
    if(event.key == 'Escape'){
        Modal.close();
    }
}