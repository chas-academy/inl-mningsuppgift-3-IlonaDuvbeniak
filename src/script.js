const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const cartList = document.getElementById("cartList")

document.getElementById("addButton").addEventListener("click", () => {
    addToCart()
})

let products = []

function addToCart() {
    let product = {
        name: productInput.value, 
        price: priceInput.value,
        quantity: 1
    }

    let productFound = false

    for (let newProduct of products) {

        if (newProduct.name === productInput.value && newProduct.price === priceInput.value) {
            newProduct.quantity += 1
            productFound = true
        }

    }

    if (!productFound) {
        products.push(product)
    }

    productInput.value = "";
    priceInput.value = "";

    showList()

}

function showList() {

    cartList.innerHTML = ""

    for (let product of products){
        let listItem = document.createElement("li")
        listItem.innerHTML = `${product.name} - ${product.price}kr (x${product.quantity})`
        cartList.appendChild(listItem)
    }
}