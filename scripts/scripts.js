let priceDishe = null;
let priceDrink = null;
let priceDessert = null;


function selectItem(item, foodCategory) {
    deselectItem(foodCategory);
    item.classList.add('active');

    formatAndSavePrice(item, foodCategory);
}

function deselectItem(foodCategory) {
    let category = document.querySelector(`.${foodCategory}`);
    let selecionado = category.querySelector('.active');

    if (selecionado !== null) {
        selecionado.classList.remove('active');
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
}