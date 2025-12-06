import { menuArray as menuItems } from "./data.js";

const handleAddButtonClick = (foodId) => {
  const food = menuItems.find((item) => item.id === foodId);
  handleAddToCart(food);
};

const handleRemoveButtonClick = (foodName) => {
  cartItems = cartItems.filter((item) => item.name !== foodName);
  renderCart();
};

let cartItems = [];

const handleAddToCart = (food) => {
  const { name, price } = food;

  if (!cartItems.some((item) => item.name === name)) {
    cartItems.push({ name, price });
  } else {
    handleAccumulatePrice(name, price);
  }

  renderCart();
};

const handleAccumulatePrice = (name, price) => {
  let foundFood = cartItems.find((item) => item.name === name);
  foundFood.price += price;
};

const orderTransaction = () => {
  const formContainerElement = document.getElementById("form-container");

  formContainerElement.innerHTML = `
    <form>
      <h4>Enter card details</h4>
      <input type="text" id="name" placeholder="Enter your name" name="fname" required/>
      <input type="text" id="card" placeholder="Enter card number" name="card" required/>
      <input type="text" id="cvv" placeholder="Enter CVV" name="cvv" required/>
      <input class="pay" type="submit" value="Pay" />
    </form>
  `;
  formContainerElement.classList.add("show");
};

const renderCart = () => {
  const cartElement = document.getElementById("cart");

  const totalPrice = cartItems.reduce((sum, food) => (sum += food.price), 0);

  if (cartItems.length === 0) {
    cartElement.innerHTML = "";
    return;
  }

  cartElement.innerHTML = `
    <div class="cart-container">
      <h2 class="cart-title">Your order</h2>
      <div class="cart-items">
        ${cartItems
          .map(
            (food) => `
          <div class="cart-item">
            <div class="cart-item-info">
              <span class="cart-item-name">${food.name}</span>
              <button class="remove-btn" data-food-name="${food.name}">remove</button>
            </div>
            <span class="cart-item-price">$${food.price}</span>
          </div>
        `
          )
          .join("")}
      </div>
      <hr class="cart-divider" />
      <div class="cart-total">
        <span class="total-label">Total price:</span>
        <span class="total-price">$${totalPrice}</span>
      </div>
      <button class="complete-order-btn">Complete order</button>
    </div>
  `;
};

const renderMenu = () => {
  const menuElement = document.getElementById("menu");
  const cartElement = document.getElementById("cart");

  menuElement.innerHTML = menuItems
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
    <hr class="menu-divider" />
      `
    )
    .join("");

  menuElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
      const foodId = parseInt(e.target.dataset.foodId);
      handleAddButtonClick(foodId);
    }
  });

  cartElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const foodName = e.target.dataset.foodName;
      handleRemoveButtonClick(foodName);
    }
  });

  cartElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-order-btn")) {
      orderTransaction();
    }
  });
};

renderMenu();
