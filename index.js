import { menuArray as menuItems } from "./data.js";

let cartItems = [];

const addToCart = (food) => {
  const { name, price } = food;

  if (!cartItems.includes(name)) {
    cartItems.push(name, price);
    console.log(cartItems);

  } 
};

const handleAddButtonClick = (foodId) => {
  const food = menuItems.find((item) => item.id === foodId);

  if (food) {
    addToCart(food);
  }
};

const renderMenu = () => {
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
      <button class="add-btn" data-food-id="${food.id}">+</button>
    </div>
    <hr />
      `
    )
    .join("");

    mainElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-btn")) {
        const foodId = parseInt(e.target.dataset.foodId);
        handleAddButtonClick(foodId);
      }
  });
}

renderMenu();