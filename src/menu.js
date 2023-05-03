import SalsicciaPhoto from "../dist/images/pizzas/salsiccia.png";

function createMenu() {
  createItem(
    "Salsiccia",
    "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
    SalsicciaPhoto
  );
}

function createItem(title, description, photo) {
  const pizza = document.createElement("div");
  pizza.classList.add("menu-item");

  const titleP = document.createElement("p");
  titleP.textContent = title;
  titleP.classList.add("titleP");

  const descriptionP = document.createElement("p");
  descriptionP.textContent = description;
  descriptionP.classList.add("descriptionP");

  const photoP = document.createElement("img");
  photoP.classList.add("photoP");
  photoP.src = photo;

  pizza.appendChild(photoP);
  pizza.appendChild(titleP);
  pizza.appendChild(descriptionP);
}
