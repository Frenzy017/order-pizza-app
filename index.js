import { menuArray as menuItems } from "./data";

function renderMenu() {
  const mainElement = document.getElementById("menu");

  mainElement.innerHTML = menuItems
    .map(
      (food) => `
    <div class="menu-item">
        <img src=${food.emoji} alt="${food.name}" class="menu-icon" />
     <div class="container-item">
        <h2>${food.name}</h2>
        <p class="ingredients">${food.ingredients}</p>
        <p class="price">${food.price}</p>
     </div>
        <button class="add-btn">+</button>
    </div>
    <hr />
      `
    )
    .join("");
}

renderMenu();
