const getProductName = () => {
    const productsName = document.getElementById('input-fiild');
    displayProduct(productsName.value);
    addProductsToCart(productsName.value);
    console.log(productsName.value);
    productsName.value = '';
}

const displayProduct = (name) => {
    const ul = document.getElementById('products-container');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const addProductsToCart = (name) => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);
}
const DisplayLOcalStorageProducts = () => {
    const cart = getCart();
    if (cart) {
        for (const name in cart) {
            displayProduct(name);
        }
    }
}

const placeOrder = () => {
    document.getElementById('products-container').textContent = '';
    localStorage.removeItem('cart')
}

DisplayLOcalStorageProducts();