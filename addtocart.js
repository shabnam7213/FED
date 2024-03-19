function createDOMElements() {
    var headerDiv = document.createElement("div");
    headerDiv.className = "header";

    var logoParagraph = document.createElement("p");
    logoParagraph.className = "logo";
    logoParagraph.textContent = "LOGO";

    var cartDiv = document.createElement("div");
    cartDiv.className = "cart";

    var cartIcon = document.createElement("i");
    cartIcon.className = "fas fa-cart-shopping";

    var countParagraph = document.createElement("p");
    countParagraph.id = "count";
    countParagraph.textContent = "0";

    cartDiv.appendChild(cartIcon);
    cartDiv.appendChild(countParagraph);

    headerDiv.appendChild(logoParagraph);
    headerDiv.appendChild(cartDiv);

    var containerDiv = document.createElement("div");
    containerDiv.className = "container";

    var rootDiv = document.createElement("div");
    rootDiv.id = "root";

    var sidebarDiv = document.createElement("div");
    sidebarDiv.className = "sidebar";

    var headDiv = document.createElement("div");
    headDiv.className = "head";
    headDiv.innerHTML = "<p>My Cart</p>";

    var cartItemDiv = document.createElement("div");
    cartItemDiv.id = "cartItem";
    cartItemDiv.textContent = "Your cart is empty";

    var footDiv = document.createElement("div");
    footDiv.className = "foot";

    var totalHeading3 = document.createElement("h3");
    totalHeading3.textContent = "Total";

    var totalHeading2 = document.createElement("h2");
    totalHeading2.id = "total";
    totalHeading2.textContent = "$ 0.00";

    footDiv.appendChild(totalHeading3);
    footDiv.appendChild(totalHeading2);

    sidebarDiv.appendChild(headDiv);
    sidebarDiv.appendChild(cartItemDiv);
    sidebarDiv.appendChild(footDiv);

    containerDiv.appendChild(rootDiv);
    containerDiv.appendChild(sidebarDiv);

    document.body.appendChild(headerDiv);
    document.body.appendChild(containerDiv);
  }

  createDOMElements();
const product = [
    {
        id: 0,
        image: 'aa-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'aa-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'aa-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'aa-4.jpg',
        title: 'Head Phones',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
