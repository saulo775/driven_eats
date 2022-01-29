
function selectItem(item, foodCategory) {
    deselectItem(foodCategory);
    item.classList.add('active');
}

function deselectItem(foodCategory) {
    let category = document.querySelector(`.${foodCategory}`);
    let selecionado = category.querySelector('.active');

    if (selecionado !== null) {
        selecionado.classList.remove('active');
    }
}