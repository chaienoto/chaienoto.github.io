const ITEM_PRICE = document.getElementsByName("itemPrice");
const ITEM_CHECKBOX = document.getElementsByName("editAmountCheckbox");
const ITEM_AMOUNT = document.getElementsByName("itemAmount");
const ITEM_TOTAL_PRICE = document.getElementsByName("itemOutPrice");
var billPrice = 0

window.onload = function() {
    initialCheckBoxValue()
}

function initialCheckBoxValue() {
    console.log(ITEM_CHECKBOX.length);
    for (let index = 0; index <= ITEM_CHECKBOX.length - 1; index++) {
        ITEM_CHECKBOX[index].value = index
        ITEM_AMOUNT[index].readOnly = !ITEM_CHECKBOX[index].checked
        console.log("initialValue:" + ITEM_CHECKBOX[index].value);
    }
    console.log("initialValue");
}

function reloadByPrice() {
    var currentChoicePrice = getCurrentChoicePrice()
    for (let index = 0; index <= ITEM_PRICE.length - 1; index++) {
        console.log("select: " + index);
        console.log("price: " + parseInt(ITEM_PRICE[index].innerText));
        console.log("priceSelect: " + currentChoicePrice);
        if (parseInt(ITEM_PRICE[index].innerText) <= currentChoicePrice) {
            ITEM_PRICE[index].parentElement.style.display = ""
        } else {
            ITEM_CHECKBOX[index].checked = false
            ITEM_AMOUNT[index].readOnly = !ITEM_CHECKBOX[index].checked
            ITEM_TOTAL_PRICE[index].innerHTML = ""
            ITEM_PRICE[index].parentElement.style.display = "none"
        }
    }
    updateTotalPriceForItem()
}

function getCurrentChoicePrice() {
    return parseInt(document.getElementById("sortPrice").value);
}

function enableEdit(position) {
    var indexPrice = 0
    if (ITEM_TOTAL_PRICE[position].innerText == "") itemPrice = 0
    else indexPrice = parseInt(ITEM_TOTAL_PRICE[position].innerText)
    console.log(indexPrice);
    ITEM_AMOUNT[position].readOnly = !ITEM_CHECKBOX[position].checked
    if (ITEM_AMOUNT[position].readOnly) {
        ITEM_TOTAL_PRICE[position].innerHTML = ""
        document.getElementById("totalPrice").innerHTML = billPrice - indexPrice
    } else updateTotalPriceForItem()
    console.log("checkbox posi:" + position, ITEM_AMOUNT[position].readOnly)
}

function updateTotalPriceForItem() {
    var itemTotalPrice = 0
    var itemPrice
    billPrice = 0
    var itemQuantity = 0
    for (let index = 0; index <= ITEM_AMOUNT.length - 1; index++) {
        if (!ITEM_AMOUNT[index].readOnly) {
            itemPrice = parseInt(ITEM_PRICE[index].innerText)
            if (ITEM_AMOUNT[index].value == "") itemQuantity = 0
            else itemQuantity = parseInt(ITEM_AMOUNT[index].value)
            itemTotalPrice = itemQuantity * itemPrice
            billPrice += itemTotalPrice
            if (itemTotalPrice == 0) ITEM_TOTAL_PRICE[index].innerHTML = ""
            else ITEM_TOTAL_PRICE[index].innerHTML = itemTotalPrice
            console.log("item price:" + itemPrice)
            console.log("item quantity:" + itemQuantity)
            console.log("index total price:" + itemTotalPrice)
        }
    }
    document.getElementById("totalPrice").innerHTML = billPrice
}