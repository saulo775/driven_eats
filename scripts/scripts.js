let priceDishe = null;
let priceDrink = null;
let priceDessert = null;

let dishe;
let drink;
let dessert;

let cont = 0;

function selectItem(item, foodCategory) {
    deselectItem(foodCategory);
    item.classList.add('active');
    cont ++;
    if (cont>=3) {
        activeSendButton();
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

function activeSendButton() {
    let selecionado = document.querySelector('.button_container');
    selecionado.classList.add('button_active');

    selecionado.querySelector('button').innerHTML = "Fechar pedido"; 
}

function confirmOrdered(params) {
    
}

function sendOrdered() {
    let ordered = document.querySelectorAll('.active');
    
    dishe = ordered[0].querySelector('h3').innerText;
    drink = ordered[1].querySelector('h3').innerText;
    dessert = ordered[2].querySelector('h3').innerText;

    let total = (priceDessert + priceDishe + priceDrink);    
    let numeroCelular = 5594991791695;
    let userName = window.prompt('Qual o seu nome:');
    let userEnder = window.prompt('Qual o endereço de entrega (Rua/bairro/numero)');

    let mensagem=  `
    Olá, gostaria de fazer o pedido:
- Prato: ${dishe}
- Bebida: ${drink}
- Sobremesa: ${dessert}
Total: R$ ${total}


Nome: ${userName}
Endereço: ${userEnder}
`;


    let mensagemTransformada = encodeURIComponent(mensagem);

    
    let mensagemWhatsapp = `https://wa.me/${numeroCelular}?text=${mensagemTransformada}`;
    
    window.open(mensagemWhatsapp);
}

function activeModal() {

    if (cont >=3) {
        let modal = document.querySelector(".modal");
        modal.classList.add("activeModal");

        let ordered = document.querySelectorAll('.active');
    
        dishe = ordered[0].querySelector('h3').innerText;
        drink = ordered[1].querySelector('h3').innerText;
        dessert = ordered[2].querySelector('h3').innerText;

        let strPriceDishe = priceDishe.toString().replace(".",",");
        let strPriceDrink = priceDrink.toString().replace(".",",");
        let strPriceDessert = priceDessert.toString().replace(".",",");

        let finalprice = (priceDishe + priceDrink + priceDessert).toFixed(2).toString().replace(".",",");

        modal.querySelector('.product1 h5').innerText = `${dishe}`;
        modal.querySelector('.product2 h5').innerText = `${drink}`;
        modal.querySelector('.product3 h5').innerText = `${dessert}`;

        modal.querySelector('.product1 h6').innerText = `${strPriceDishe}`;
        modal.querySelector('.product2 h6').innerText = `${strPriceDrink}`;
        modal.querySelector('.product3 h6').innerText = `${strPriceDessert}`;

    
        modal.querySelector('.finalPrice').innerText = `${finalprice}`
    }
}

function closeModal() {
    let selected = document.querySelector(".activeModal");

    if (selected !== null) {
        selected.classList.remove("activeModal")
    }

}
