// creer une class productCart pour pouvoir ajouter un produit avec titre / prix / image / description
// addEventListener sur les boutons qute et ajouter au panier
// quantité : innerHTML avec incrémentation
// 


import CartProduct from './class.js'


document.addEventListener('DOMContentLoaded', () => {

    const products = [
        { title: "Petit dej", image: "assets/images/product_0.jpg", description: "isisojfisjfd" },
        { title: "mon titre", image: "assets/images/product_1.jpg", description: "sdfisdjfisjf" },
    ]
    
    
     // Boucle pour générer tous les produits

    for (let i = 0; i < products.length; i++) {
        let card1 = new CartProduct(products[i].title, products[i].description, products[i].image)
        card1.generateProduct()
        // card1.createListener()
        console.log(card1)
    }

})
