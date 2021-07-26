const products = [

    {
        productId: '1',
        productName: 'Case',
        productDescription: 'High quality case with high airflow',
        productPrice: 1200
    },
    {
        productId: '2',
        productName: 'RGB fans',
        productDescription: 'high quality fans',
        productPrice: 250
    },
    {
        productId: '3',
        productName: 'Nvidia rtx 2060s 12GB',
        productDescription: 'ROG Strix GeForce RTX™ 2060 OC edition 12GB GDDR6 with the all-new NVIDIA Turing™ GPU architecture',
        productPrice: 2000
    },
    {
        productId: '4',
        productName: 'rog-strix maximus',
        productDescription: 'Intel Z370 ATX gaming motherboard with Aura Sync RGB LEDs,DDR4 4133MHz, dual M.2 and USB 3.1 Gen 2',
        productPrice: 750
    },
    {
        productId: '5',
        productName: 'rog-strix z390',
        productDescription: 'Intel Z390 LGA 1151 ATX gaming motherboard with Aura Sync RGB, 802.11ac Wi-Fi, DDR4 4266z+, dual M.2 with heatsinks, SATA 6Gbps, HDMI, and USB 3.1 Gen 2',
        productPrice: 900
    },
    {
        productId: '6',
        productName: 'RAM',
        productDescription: 'Dual RGB RAM with 16GB of memory in each',
        productPrice: 200
    },
    {
        productId: '7',
        productName: 'I7 11700K 3.6GHZ',
        productDescription: 'The Intel Core i7-11700K is the best eight-core, 16-thread desktop CPU that intel has ever made',
        productPrice: 1200
    },
    {
        productId: '8',
        productName: 'Power Unit 750W',
        productDescription: 'Power suplly with 750W',
        productPrice: 350
    },
    {
        productId: '9',
        productName: 'ROG Phone 3',
        productDescription: 'The Asus ROG Phone 3 is designed primarily for gaming but tries to be a well-rounded flagship-class phone. Its large and heavy thanks to its 6000mAh battery and cooling apparatus, but is also extremely powerful with its Snapdragon 865+ SoC.',
        productPrice: 2600
    },
    {
        productId: '10',
        productName: 'Headphone',
        productDescription: 'High quality headphones with extra bass',
        productPrice: 450
    },
    {
        productId: '11',
        productName: 'Mouse',
        productDescription: 'High quality mechanic Mouse with high dpi',
        productPrice: 300
    }



]
let total = 0;

async function loadProducts(){
    const section = document.getElementsByClassName('Products')[0];
    products.forEach(product =>{
        let div = document.createElement('div');
        div.innerHTML = 
        `
        <div class="row" style="margin:25px;">
            <div class="col" >
                <img class="pRow" src="./images/${product.productId}.jpg" alt="">
            </div>
            <div class="col" >
                <div class="row" >
                    <p class="pRowDesc">${product.productName}</p>
                </div>
                <div class="row" >
                    <p class="pRowDesc">${product.productDescription}</p>
                </div>
                <div class="row" >
                    <p class="pRowDesc">${product.productPrice}</p>
                </div>
             </div>
            <div class="col">
                <button class="btn btn-primary" onclick="addToCart(${product.productId - 1})" >Add to cart</button>
            </div>
        </div>
        <hr>
        `;
        section.appendChild(div);
    });
}

loadProducts();


async function addToCart(productId){
    total += products[productId].productPrice;
    console.log(total);

    updateCart();
    let cartRow = document.getElementsByClassName('cart-row')[0];
    cartRow.innerHTML += 
        `
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4" style="padding:15px 0px;">
                <div class="col">${products[productId].productName} </div>
                <div class="col">${products[productId].productPrice}</div>
                <div class="col"></div>
                <div class="col"><button onclick="removeFromCart(this,${productId})" class="btn btn-danger"  >Remove</button> </div>
            </div>
        </div>
        `;
}


async function removeFromCart(btn,productId){
    total -= products[productId].productPrice;
    updateCart();
    btn.parentElement.parentElement.remove();
    console.log(total);

}


async function updateCart() {
    let section = document.getElementsByClassName('cart-total')[0];
    if(total === 0){
        section.innerHTML =
    `
    <hr>
    <div class="row">
        <p class"row-total">
        Here will be displayed items you have added to your cart
        </p>
    </div>
    `
    }
    else
    {
        section.innerHTML =
        `
            <hr>
            <div class="row">
                <p class"row-total">
                    Total is: ${total};
                </p>
            </div>
            <div class="row">
            <button class="btn btn-primary" onclick="purchased()" >Purchase</button>
            </div>
        `
    }
    
}


async function purchased(){
    alert('Thank you for Purchase');
}


