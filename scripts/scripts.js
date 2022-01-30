let priceDishe = null;
let priceDrink = null;
let priceDessert = null;
let cont = 0;

function selectItem(item, foodCategory) {
    deselectItem(foodCategory);
    item.classList.add('active');
    cont ++;
    if (cont>=3) {
        activeButton();
    }
    formatAndSavePrice(item, foodCategory);
}

function deselectItem(foodCategory) {
    let category = document.querySelector(`.${foodCategory}`);
    let selecionado = category.querySelector('.active');

    if (selecionado !== null) {
        selecionado.classList.remove('active');
        cont--;
    }
}

function formatAndSavePrice(item, foodCategory) {
    let valor = item.querySelector('.price h4').innerHTML.slice(3);

    if (foodCategory === 'dishes') {
        priceDishe = parseFloat(valor.replace(',', '.'));
    }else if(foodCategory === 'drinks'){
        priceDrink = parseFloat(valor.replace(',', '.'));
    }else if(foodCategory === 'desserts'){
        priceDessert = parseFloat(valor.replace(',', '.'));
    }
}

function activeButton() {
    let selecionado = document.querySelector('.button_container');
    selecionado.classList.add('button_active');

    selecionado.querySelector('button').innerHTML = "Fechar pedido";

    activateConfimationModal();
    
}

function activateConfimationModal() {
    let modal = document.querySelector('.modal');
    modal.classList.add('activeModal');
}

function sendOrdered() {
    let ordered = document.querySelectorAll('.active');
    
    let dishes = ordered[0].querySelector('h3').innerText;
    let drinks = ordered[1].querySelector('h3').innerText;
    let dessert = ordered[2].querySelector('h3').innerText;
    
    let total = (priceDessert + priceDishe + priceDrink);    
    let numeroCelular = 559999999999;

    let mensagem=  `
    Olá, gostaria de fazer o pedido:
- Prato: ${dishes}
- Bebida: ${drinks}
- Sobremesa: ${dessert}
Total: R$ ${total}`;

    let mensagemTransformada = encodeURIComponent(mensagem);

    
    let mensagemWhatsapp = `https://wa.me/${numeroCelular}?text=${mensagemTransformada}`;
    
    window.open(mensagemWhatsapp);
}

function closeModal() {
    let selected = document.querySelector(".activeModal");

    if (selected !== null) {
        selected.classList.remove("activeModal")
    }

}

// Olá, gostaria de fazer o pedido:
// - Prato: ${prato1}
// - Bebida: ${prato2}
// - Sobremesa: ${prato3}
// Total: R$ ${total}
                
// Nome: ${nomeUsuario}
// Endereço: ${enderecoUsuario}
// [5:44 AM]
// let mensagemWhatsapp = https://wa.me/${numeroCelular}?text=${mensagemTransformada};

