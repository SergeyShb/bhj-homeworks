let quantityControlDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));   //-  
console.log(quantityControlDec);

let quantityControlInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));   //+
console.log(quantityControlInc);

let btnProductAdd = Array.from(document.querySelectorAll(".product__add"));
console.log(btnProductAdd);

let cartProducts = document.querySelector(".cart__products");
console.log(cartProducts);



//Действие на кнопку "+"
for (let i = 0; i < quantityControlInc.length; i++ ) {
    quantityControlInc[i].addEventListener("click", event => {

        event.target.previousElementSibling.innerText = Number(event.target.previousElementSibling.innerText) + 1;   

    });
};

//действие на кнопку "-"
for (let i = 0; i < quantityControlDec.length; i++ ) {
    quantityControlDec[i].addEventListener("click", event => {

        if (event.target.nextElementSibling.innerText > 1) {
            event.target.nextElementSibling.innerText = Number(event.target.nextElementSibling.innerText) - 1;
        }
  
    });
};

//действие при клике на кнопку "Добавить в корзину"
for (let i = 0; i < btnProductAdd.length; i++ ) {
    btnProductAdd[i].addEventListener("click", event => { 


        let product = event.target.closest(".product");    //карточка добавляемого продукта
        console.log(event.target.closest(".product"));
        let productId = product.dataset.id;   //data-id дабавляемого продукта
        console.log(product.dataset.id);


        let productQuantityValue = event.target.previousElementSibling.querySelector(".product__quantity-value").innerText   //количество добавляемого продукта (строка)
        console.log(event.target.previousElementSibling.querySelector(".product__quantity-value").innerText);

        let productImage = event.target.closest(".product").querySelector(".product__image").src;   //поиск картинки добавляемого продукта
        console.log(productImage);  

        


        let allCartProduct = Array.from(event.target.closest(".products").previousElementSibling.querySelectorAll(".cart__product"));     //находим все продукты в корзине
        
        console.log(allCartProduct);
        

        if (allCartProduct.length != 0) {             
            //если колличество продуктов в массиве не равно нулю 

 
            let id = allCartProduct.find(item => item.dataset.id === productId)   //поиск в корзине продукта с таким же data-id как и data-id дабавляемого продукта  
            console.log(id);


            if (id != undefined) {
                //если в корзине продукт с таким же data-id как и data-id дабавляемого продукта найден, то добавляем к количеству продукта в корзине количество добавляемого продукта
                id.querySelector(".cart__product-count").innerText = Number(id.querySelector(".cart__product-count").innerText) + Number(productQuantityValue)

                event.target.previousElementSibling.querySelector(".product__quantity-value").innerText = 1;   //после добавления количества продуктов в корзине, делаем количество добавляемого продукта снова "1"


            } else {
                //иначе (если в корзине не найден продукт с таким же data-id) добавляем в корзину новый продукт
                                                   
        
                cartProducts.insertAdjacentHTML("beforeEnd", `
                
                    <div class="cart__product" data-id="` + productId + `">
                        <img class="cart__product-image" src="` + productImage + `">
                        <div class="cart__product-count"> ` + productQuantityValue + ` </div>
                    </div>
                
                `); 

                event.target.previousElementSibling.querySelector(".product__quantity-value").innerText = 1;   //после добавления нового элемента в корзину, делаем количество добавляемого продукта снова "1"
            }

            
            
        } else {
            //иначе (если колличество продуктов в массиве равно нулю)

    
            cartProducts.insertAdjacentHTML("beforeEnd", `
            
                <div class="cart__product" data-id="` + productId + `">
                    <img class="cart__product-image" src="` + productImage + `">
                    <div class="cart__product-count"> ` + productQuantityValue + ` </div>
                </div>
            
            `);

            event.target.previousElementSibling.querySelector(".product__quantity-value").innerText = 1;   //после добавления нового элемента в корзину, делаем количество добавляемого продукта снова "1"
        }

 
    })

};









// for (let i = 0; i < btnProductAdd.length; i++ ) {
//     btnProductAdd[i].addEventListener("click", event => { 

//         console.log('product');

//         let product = event.target.closest(".product");
//         console.log(event.target.closest(".product"));
//         let productId = product.dataset.id;
//         console.log(product.dataset.id);

//         let productQuantityValue = event.target.previousElementSibling.querySelector(".product__quantity-value").innerText
//         console.log(event.target.previousElementSibling.querySelector(".product__quantity-value").innerText);

//         let productImage = event.target.closest(".product").querySelector(".product__image").src;
//         console.log(productImage);                                      



//         cartProducts.insertAdjacentHTML("beforeEnd", `
        
//             <div class="cart__product" data-id="` + productId + `">
//                 <img class="cart__product-image" src="` + productImage + `">
//                 <div class="cart__product-count"> ` + productQuantityValue + ` </div>
//             </div>
        
        
//         `);


//     });
// }