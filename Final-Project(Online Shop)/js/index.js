// cart

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded",ready);
} else {
    ready();
}


// Making Function
function ready(){
    // remove Items From cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < removeCartButtons.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    //Add To Cart
    var addCard = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCard.length; i++){
        var button = addCard[i];
        button.addEventListener("click",addCartClicked);
    }
     //Buy Button Work
    document
        .getElementsByClassName("btn-buy")[0]
        .addEventListener("click", buyButtonClicked);
}
    //Buy Button
    function buyButtonClicked(){
        alert('Your Order is placed');
        var cartContent = document.getElementsByClassName('cart-content')[0];
        while (cartContent.hasChildNodes()){
            cartContent.removeChild(cartContent.firstChild);
        }
        updatetotal();
    }


//remove Items From Cart
function removeCartItem(event){
    var buttonsClicked = event.target;
    buttonsClicked.parentElement.remove();
    updatetotal();
}

// Quantity Changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
//Add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classlist.add('card');
    var cartItem = document.getElementsByClassName('cart-content')[0];
    var cartItemNames = cartItem.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        alert("You have already add this item to cart");
        return;
    }
}
var cartBoxContent = `
                <img src="${product-img}" alt="" class="cart-img">
                  <div class="detail-box">
                  <div class="cart-product-title">${title}</div>
                  <div class="cart-price">${price}</div>
                  <input type="number" value="1" class="cart-quantity">
              </div>            
                  <!-- remove cart -->
                  <i class="fa-solid fa-trash cart-remove"></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItem.append(cartShopBox);
cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("change", removeCartItem);
cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);

//update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBox = cartContent.getElementsByClassName('cart');
    for (var i = 0; i < cartBox.length; i++) {
        var cartBox = cartBox[i];
        var pricetElement = cartBoxes.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBoxes.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total= total + price * quantity;
    }
        //If price Contain some Sents value 
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    
}
