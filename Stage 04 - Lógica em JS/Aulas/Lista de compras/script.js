let arrayItems = []

for (let index = 0; index < 10; index++) {
    let itemName = prompt("Digite o item nº " + (index + 1));
    arrayItems.push(itemName);
}

console.log(arrayItems);
alert("Aqui está a sua lista de compras do mercado:\n\n" + arrayItems);