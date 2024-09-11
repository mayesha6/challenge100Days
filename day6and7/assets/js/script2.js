
const productList = document.getElementById("product-list");
const addedItem = document.getElementById("added-item");


function updateItemQuantity(e, type){
  if(type=="increase"){
    e.target.parentElement.nextElementSibling.innerText = parseInt(e.target.parentElement.nextElementSibling.innerText)+1; 
  }
  else{
    let a = e.target.parentElement.previousElementSibling.innerText
    if(a==0){
      e.target.parentElement.previousElementSibling.innerText = 0
    }
    else{
      e.target.parentElement.previousElementSibling.innerText = e.target.parentElement.previousElementSibling.innerText-1;
    }
  }
  // console.log(parseInt(e.target.parentElement.nextElementSibling.innerText), "e")
}
let totalprice = document.getElementById("total-price")
function rprice(i){
  let p = 0;
  p=p+i;
  return p;
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
      data.map((product)=>{

        // const product = data.products[2];
        const singleProduct = document.createElement('div')
        singleProduct.classList.add('single-product')
        productList.appendChild(singleProduct)
        singleProduct.innerHTML = 
        `
        <div class="cartAndimg">
          <img src=${product.image.desktop} alt="">
          <div class="cart">
            <div id="addToCart-${product.id}" class="addToCart">
              <i class="fa-solid fa-cart-plus"></i>
              <span>Add to cart</span>
            </div>
            <div id="addedToCart-${product.id}" class="addedToCart">
              <div class="flex">
                <div class="plus" id="plus-${product.id}" onclick="updateItemQuantity(event,'increase')">
                    <i class="fa-solid fa-plus"></i>
                </div>              
                <span id="count-item-${product.id}">1</span>
                <div class="minus" id="minus-${product.id}" onclick="updateItemQuantity(event, 'decrease')">
                    <i class="fa-solid fa-minus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="product-nickname">${product.category}</p>
        <h2 class="product-dishname" id="product-dishname-${product.id}">${product.name}</h2>
        <p class="product-price" >$<span>${product.price}</span></p>
        `
        
        
      })
      const addToCart = document.querySelectorAll('.addToCart');
      const addedToCart = document.querySelectorAll('.addedToCart')
      
      Array.from(addToCart)?.map((addCart,index)=>{
        // let countItem = document.getElementById(`count-item-${index+1}`).innerText;
        const plusItem = document.getElementById(`plus-${index+1}`);
        const minusItem = document.getElementById(`minus-${index+1}`);
        plusItem.addEventListener("click",(event)=>{
          let ele = document.getElementById(event.target.parentElement.id);
          let productCard = ele.closest(".single-product")
          let price = productCard.querySelector(".product-price").children[0].innerText;

          document.getElementById(`count-added-item-${index}`).innerText = `${event.target.parentElement.nextElementSibling.innerText}x`;
          document.getElementById(`item-total-price-${index}`).innerText = `$${parseFloat(event.target.parentElement.nextElementSibling.innerText)*parseFloat(price)}`;
          

          // totalprice.innerText = rprice(document.getElementById(`item-total-price-${index}`).innerText);
          totalprice.innerText = rprice(parseFloat(event.target.parentElement.nextElementSibling.innerText)*parseFloat(price));
       })
        minusItem.addEventListener("click",(event)=>{
          let ele = document.getElementById(event.target.parentElement.id);
          let productCard = ele.closest(".single-product")
          let price = productCard.querySelector(".product-price").children[0].innerText;

          document.getElementById(`count-added-item-${index}`).innerText = `${event.target.parentElement.previousElementSibling.innerText}x`;
          document.getElementById(`item-total-price-${index}`).innerText = `$${parseFloat(event.target.parentElement.previousElementSibling.innerText)*parseFloat(price)}`;
          totalprice.innerText = rprice(parseFloat(event.target.parentElement.previousElementSibling.innerText)*parseFloat(price));
        })
        addCart.addEventListener("click", ()=>{
            
          const singleAddedItem = document.createElement('div')          
          singleAddedItem.classList.add('single-added-item')
          addedItem.appendChild(singleAddedItem)
          const productDishname=addCart.parentElement.parentElement.parentElement.children[2].innerText;
          const productPrice=addCart.parentElement.parentElement.parentElement.children[3].children[0].innerText;
          const countItem = document.getElementById(`count-item-${index+1}`).innerText;
          singleAddedItem.innerHTML=
          `
          <div class="flex" style="align-items:center">
            <div class="item-content">
              <p>${productDishname}</p>
              <span class="count-added-item" id="count-added-item-${index}">${countItem}x</span>
              <span class="item-single-price">@$${productPrice}</span>
              <span class="item-total-price" id="item-total-price-${index}">$${parseFloat(productPrice) * parseFloat(countItem)}</span>
            </div>
            <div class="close-btn" id="close-btn-${index}">
               <a href="#"><i class="fa-regular fa-circle-xmark"></i></a>
            </div>
          </div>
          `
          let itemsTotalPrice = document.querySelectorAll(".item-total-price")
          console.log("itemTotalPrice: ",itemsTotalPrice)
          
          totalprice.innerText = rprice(parseFloat(productPrice) * parseFloat(countItem));
          Array.from(addedToCart).map((addedCart,index2)=>{
                if(index==index2){
                    addedCart.style.display="block";    
                }
                else{
                  addCart.style.display="none";
                }
          })
            
          
        
        const crossBtn = document.getElementById(`close-btn-${index}`);
            crossBtn?.addEventListener("click",()=>{
              let searchaddedToCart = document.querySelectorAll(`#addedToCart-${index+1}`);
              let searchproductDishname = document.querySelectorAll(`#product-dishname-${index+1}`)[0].innerText;
              if(searchproductDishname==productDishname){
                searchaddedToCart[0].style.display="none";
                addCart.style.display="block";
              }
              crossBtn.parentElement.parentElement.remove();
            })
          
          
          
        })


      })

    })


