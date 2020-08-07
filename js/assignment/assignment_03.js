function reloadByPrice() {
    var x = document.getElementById("sortPrice").value;
    var itemPrice = document.getElementsByName("itemPrice");
    
    for (let index = 0; index <= itemPrice.length -1; index++) {
        console.log("select: "+ index );
        console.log("price: "+ parseInt(itemPrice[index].innerText) );
        console.log("priceSelect: "+ parseInt(x) );
        if (parseInt(itemPrice[index].innerText) <= parseInt(x)){
            itemPrice[index].parentElement.style.display = ""
        } 
        else itemPrice[index].parentElement.style.display = "none"
    }
    
}