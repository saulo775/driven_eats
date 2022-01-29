let priceDishe = null;
let priceDrink = null;
let priceDessert = null;
let cont = 0;

function selectItem(item, foodCategory) {
    deselectItem(foodCategory);
    item.classList.add('active');
    cont ++;
    console.log(cont);

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
        console.log(cont);

    }
}


function formatAndSavePrice(item, foodCategory) {
    let valor = item.querySelector('.price h4').innerHTML.slice(3);

    if (foodCategory === 'dishes') {
        priceDishe = parseFloat(valor.replace(',', '.'))
    }else if(foodCategory === 'drinks'){
        priceDrink = parseFloat(valor.replace(',', '.'))
    }else if(foodCategory === 'desserts'){
        priceDessert = parseFloat(valor.replace(',', '.'))
    }
    console.log(foodCategory)
}


function activeButton() {
    let selecionado = document.querySelector('.button_container')
    selecionado.classList.add('button_active');
}
