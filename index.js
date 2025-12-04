import { menuArray as menuItems } from "./data.js";

function renderMenu() {
  const mainElement = document.getElementById("menu");

  mainElement.innerHTML = menuItems
    .map(
      (food) => `
    <div class="menu-item" id=${food.id}>
      <div class="menu-icon">${food.emoji}</div>
     <div class="container-item">
        <h2 class = "food-name">${food.name}</h2>
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

let cartItems = [];

function addToCart(food) {
  let name = food.name;
  let price = food.price;

  if (!cartItems.includes(name)) {
    cartItems.push(name, price);
  }

  if



  console.log(cartItems);
}

function handleAddButtonClick() {
  const addButtonElements = document.querySelectorAll(".add-btn");

  addButtonElements.forEach((button) => {
    button.addEventListener("click", (event) => {
      const menuItemElement = event.target.closest(".menu-item");
      const foodId = Number(menuItemElement.id);

      const food = menuItems.find((item) => item.id === foodId);

      if (food) {
        addToCart(food);
      }
    });
  });
}

handleAddButtonClick();
