console.log("pliste");
const productListeContainer = document.querySelector("main");

//const params = new URLSearchParams(window.location.search);
//const id = params.get("id");

fetch("https://kea-alt-del.dk/t7/api/products?limit=20")
  .then((res) => res.json())
  .then(showProducts);
//console.log(product.articletype);

function showProducts(products) {
  console.log(products);

  products.forEach((element) => {
    console.log(element);
    productListeContainer.innerHTML += `
       <article>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="produktbillede"/>
       <h3>${element.productdisplayname}</h3>
         <p class="Tshirts articletype"> <span>Type:</span> ${element.articletype}   </p>
       <p <span>Brandname:</span>  ${element.brandname} </p>
        <p class="price"><span>Prev.</span>${element.price}</p>
        <div class="mony">
          <p class="price"> Now DKK ${Math.round(element.price - (element.price * element.discount) / 100)}</p>
          <p class="rabat">${element.discount}</p>
        </div>
         <a href="produkt.html?id=${element.id}"> Read More</a>
        
      </article>`;
  });
}
