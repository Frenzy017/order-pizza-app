import { menuArray as menuItems } from "./data.js";

function renderMenu() {
  const mainElement = document.getElementById("menu");

  mainElement.innerHTML = menuItems
    .map(
      (food) => `
    <div class="menu-item" id=${food.id}>
      <div class="menu-icon">${food.emoji}</div>
     <div class="container-item">
        <h2 id="food-name">${food.name}</h2>
        <p class="ingredients">${food.ingredients}</p>
        <p class="food-price" id="food-price">$${food.price}</p>
     </div>
        <button class="add-btn" id="add-btn">+</button>
    </div>
    <hr />
      `
    )
    .join("");
}

renderMenu();

function cart() {
  const addButtonElement = document.getElementById("add-btn");
  const foodIdElement = document.getElementById("food-id");
  const foodNameElement = document.getElementById("food-name");
  const foodPriceElement = document.getElementById("food-price");


  let totalPrice = 0;






}
