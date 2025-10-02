const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productListeContainer = document.querySelector("main");

document.querySelectorAll("#filters button").forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  console.log(showFiltered);
  const gender = this.dataset.gender;
  if (gender == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender == gender);
    showProducts(udsnit);
  }
}

const header = (document.querySelector("h2").textContent = category);

let allData;
fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((res) => res.json())
  .then((data) => {
    allData = data;
    showProducts(allData);
  });

//console.log(product.articletype);

function showProducts(products) {
  //console.log(products);
  productListeContainer.innerHTML = "";
  products.forEach((element) => {
    //console.log(element);

    productListeContainer.innerHTML += `
       <article class="   ${element.soldout && "soldOut"}   ${element.discount && "onSale"}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="produktbillede"/>
     
       <h3>${element.productdisplayname}</h3>
         <p class="Tshirts articletype"> <span>Type:</span> ${element.articletype}   </p>
       <p <span>Brandname:</span>  ${element.brandname} </p>
       ${
         element.discount
           ? `
    <p class="price"><span>Prev.</span> DKK ${element.price}</p>
    <div class="mony">
      <p class="price">Now DKK ${Math.round(element.price - (element.price * element.discount) / 100)}</p>
      <p class="rabat">${element.discount}%</p>
    </div>
  `
           : `
    <p class="price">DKK ${element.price}</p>
  `
       }
         ${element.soldout ? "" : `<a href="produkt.html?id=${element.id}"> Read More</a>`}
        
      </article>`;
  });
}
