const displayCartItems = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProducts(name);
    }
}

const addItem = () => {
    const nameFild = document.getElementById('inputFild');
    if (!nameFild.value) {
        return
    }
    displayProducts(nameFild.value);
    addProductsToCart(nameFild.value);
    nameFild.value = '';
}
const displayProducts = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);

}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj = {}
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {}
    }
    return cartObj;
}


// const getCart = () => {
//     const cart = localStorage.getItem('cart');
//     let cartObj;
//     if (cart) {
//         cartObj = JSON.parse(cart);
//     }
//     else {
//         cartObj = {};
//     }
//     return cartObj;
// }
const addProductsToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

// const addProductsToCart = name => {
//     const cart = getCart();
//     cart[name] = 1;
//     // console.log(cart);
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem('cart', cartStringified);
// }

const placeOreder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
displayCartItems();