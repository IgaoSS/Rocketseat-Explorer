let option;
let items = [];
let textMenu = `Olá usuário! Digite o número da opção desejada:
    
1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`;

while(option != 3){
    option = Number(prompt(textMenu)); 
    
    switch (option) {
        case 1:
            let itemName = prompt("Informe o item que será cadastrado na lista:");
            items.push(itemName);
            break;
        case 2:
            if(items.length > 0){
                alert(`Abaixo a lista dos itens cadastrados:\n\n${items}`);
            }
            else{
                alert("Não existem itens cadastrados!");
            }
            break;
        case 3:
            alert("Aplicação encerrada!");
            break;
        default:
            alert("Opção inválida. Digite novamente!");
            break;
    }
}