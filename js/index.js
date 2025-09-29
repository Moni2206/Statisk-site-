const categorylist = document.querySelector(".categorylist");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())

  .then((categories) => showcategories(categories));

function showcategories(categories) {
  categories.forEach((category) => {
    categorylist.innerHTML += ` <a href="produktilsete.html?category=${category.category}">${category.category}</a>`;
  });
}
