const productContainer = document.querySelector("#productContainer");

fetch("https://kea-alt-del.dk/t7/api/products/1526")
  .then((response) => response.json())
  .then((product) => {
    //console.log(product.articletype);

    productContainer.innerHTML = ` <figure class="product-image">
      <img src="/img/1526.webp" alt="" />
    </figure>

    <section class="box">
      <h3>${product.productdisplayname}</h3>
     <p class="Tshirts articletype"> <span>Type:</span> ${product.articletype}   </p>
       <p <span>Brandname:</span>  ${product.brandname} </p>
      <form>
        <label> Choose a size </label>
        <select name="size" id="">
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>

        <button type="submit" class="basket-btn">Add to basket</button>
      </form>
    </section>
    <section class="info">
      <h2>Prroduct Information</h2>
      <dl>
        <dt>Gender</dt>
        <dd>${product.gender} </dd>
        <dt>Color</dt>
        <dd>${product.basecolour} </dd>
        <dt>Inventory number</dt>
        <dd>${product.relid}</dd>
        <dt>Season</dt>
        <dd>${product.season} </dd>
        <dt>productionyear</dt>
        <dd>${product.productionyear} </dd>
        <dt>Usagetype</dt>
        <dd>${product.usagetype} </dd>
         <dt>Agegroup</dt>
        <dd>${product.agegroup} </dd>

      </dl>
      <h1>Nike</h1>
      <p>${product.brandbio}</p>
    </section>`;
  });
