const addBtn1 = document.querySelector('#add-btn-1');
const addBtn2 = document.querySelector('#add-btn-2');
const removeBtn1 = document.querySelector('#remove-btn-1');
const removeBtn2 = document.querySelector('#remove-btn-2');
const counterItem1 = document.querySelector('.num-1');
const counterItem2 = document.querySelector('.num-2');
const priceItem1 = document.querySelector('.sale-price-1');
const priceItem2 = document.querySelector('.sale-price-2');
let totalPrice = document.querySelector('.total-price')


function removeDollarSign(str) {
    const arr = str.split('');
    arr.shift();
    return parseFloat(arr.join(''));
}

addBtn1.addEventListener('click', () => {
    counterItem1.innerHTML = parseFloat(counterItem1.innerHTML) + 1;
    let price1 = removeDollarSign(priceItem1.innerHTML);
    let total = removeDollarSign(totalPrice.innerHTML);

    totalPrice.innerHTML = "$" + (price1 + total).toFixed(2);
    console.log(totalPrice.innerHTML)

})
addBtn2.addEventListener('click', () => {
    counterItem2.innerHTML = parseFloat(counterItem2.innerHTML) + 1;

    let price2 = removeDollarSign(priceItem2.innerHTML);
    let total = removeDollarSign(totalPrice.innerHTML);

    totalPrice.innerHTML = "$" + (price2 + total).toFixed(2);
    console.log(totalPrice.innerHTML)

})

removeBtn1.addEventListener('click', () => {
    counterItem1.innerHTML = parseFloat(counterItem1.innerHTML) - 1;
    let temp1 = counterItem1.innerHTML

    let price1 = removeDollarSign(priceItem1.innerHTML);
    let price2 = removeDollarSign(priceItem1.innerHTML);
    let total = removeDollarSign(totalPrice.innerHTML);


    if (temp1 >= 0) {
        totalPrice.innerHTML = "$" + (total - price1).toFixed(2);
    } else {
        counterItem1.innerHTML = 0;
    }

    console.log(totalPrice.innerHTML)

})

removeBtn2.addEventListener('click', () => {
    counterItem2.innerHTML = parseFloat(counterItem2.innerHTML) - 1;
    let temp = counterItem2.innerHTML
    let price2 = removeDollarSign(priceItem2.innerHTML);
    let total = removeDollarSign(totalPrice.innerHTML);

    if (temp >= 0) {
        totalPrice.innerHTML = "$" + (total - price2).toFixed(2);
    } else {
        counterItem2.innerHTML = 0;
    }
    console.log(totalPrice.innerHTML)

})