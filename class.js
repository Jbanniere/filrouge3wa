// CREATION CLASS POUR GENERER LES PRODUITS //

class CartProduct {
    /**
     * 
     * @param {string} title
     * @param {string} description
     * @param {string} img
     */

    constructor(title, description, image) {
        this.title = title
        this.description = description
        this.image = image
        // this.id = id
    }


    // Function pour créer les évènements quantité + addtocart

    createListener(element) {
        // console.log(element)
        //element.addEventListener("click", () => {
        // })

        const btn = element.getElementsByClassName('btn-product-qte')
        let value = btn[0].parentElement.getElementsByTagName("strong")[0] // parentElement permet de remonter à l'élément parent, pour ensuite sélectionner le strong enfant
        
        // let moins = document.getElementsByClassName('moins')
        // let btnQte = document.getElementsByClassName('btn-product-qte')
        let qte = document.getElementById('quantite')
        let q = 0
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", () => {
                if (btn[i].innerText === "+") {
                    value.innerText = parseInt(value.innerText) + 1
                     
                    console.log(value)
                    
                } else if (btn[0].innerText === "-") {
                    value = parseInt(value.innerText) - 1
                }
            })
        }


        // btnQte[0].addEventListener('click', () => {
        //     // for (let i = 0 ; i<10 ; i++)
        //     if (btnQte[0].innerText === "+") {
        //         q++
        //         qte.innerText = q

        //     } else if (btnQte[0].innerText === "-") {
        //         q--
        //         qte.innerText = q
        //     }
        // })
    }


    // Function pour générer un produit

    generateProduct() {
        const productInfo =
            `<div class="container-product-img"><img class='product-img' src=""></div>
            <div class="card-bodroduct">
                <h3 class="title-product"></h3>
                <p class="description-product"></p>
                <div class="footer-card">
                    <div class="footer-card-qte">
                        <button class="btn-product-qte">-</button>
                        <strong id="quantite" >0</strong>
                        <button class="btn-product-qte">+</button>
                    </div>
                    <button class="btn-product">Ajouter au panier</button>
                </div>
            </div>`
        // Création de la div et ajout de son contenu
        const div = document.createElement("div")
        div.innerHTML = productInfo
        div.classList.add('card-product')

        // On récupère les éléments de la card
        const imgElement = div.getElementsByClassName("product-img")
        const titleElement = div.getElementsByClassName("title-product")
        const descriptionElement = div.getElementsByClassName("description-product")

        // On met les valeurs dans chaque élément
        imgElement[0].src = this.image
        titleElement[0].innerText = this.title
        descriptionElement[0].innerText = this.description

        this.createListener(div)

        this.addProductToDOM(div)
    }


    // Function pour ajouter les produits générés, dans le HTML
    /**
     * 
     * @param {HTMLElement} element 
     * @return {void}
     */
    addProductToDOM(element) {
        let containerProduct = document.querySelector('.container-products')
        containerProduct.append(element)
    }
}


export default CartProduct;
