const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const header = (document.querySelector("h2").textContent = category);

const productListeContainer = document.querySelector("main");

document.querySelector("#filters").addEventListener("click", showFiltered);
document.querySelector("#sorting ").addEventListener("click", showSorted);

function showSorted(event) {
  const direction = event.target.dataset.direction;
  if (direction == "lohi") {
    console.log(direction);
    currentDataSet.sort((a, b) => a.price - b.price);
  } else {
    currentDataSet.sort((a, b) => b.price - a.price);
  }
  showProducts(currentDataSet);
}

function showFiltered(event) {
  //console.log(event.targ.dataset.gender);
  const gender = event.target.dataset.gender;
  if (gender == "All") {
    currentDataSet = allData;
  } else {
    const udsnit = allData.filter((product) => product.gender == gender);
    currentDataSet = udsnit;
    showProducts(currentDataSet);
  }
}

let allData, currentDataSet;
fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((res) => res.json())
  .then((data) => {
    allData = currentDataSet = data;
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
