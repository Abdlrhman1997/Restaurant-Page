import SalsicciaPhoto from "../dist/images/pizzas/salsiccia.png";
import GamberiPhoto from "../dist/images/pizzas/gamberi.png";
import PepePhoto from "../dist/images/pizzas/pepe.png";
import DisgustosoPhoto from "../dist/images/pizzas//disgustoso.png";

const pizzaContainer = document.createElement("div");
pizzaContainer.setAttribute("id", "pizzaContainer");

function loadMenu() {
  createItem(
    "Salsiccia",
    "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
    SalsicciaPhoto
  );

  createItem(
    "Gamberi",
    "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
    GamberiPhoto
  );

  createItem(
    "Pepe",
    "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil",
    PepePhoto
  );

  createItem(
    "Disgustoso",
    "Tomato sauce, Bacon, Pineapple, Olives, Basil",
    DisgustosoPhoto
  );

  const main = document.getElementById("main");

  main.appendChild(pizzaContainer);
}

function createItem(title, description, photo) {
  const pizzaDiv = document.createElement("div");
  pizzaDiv.classList.add("menu-item");

  const titleP = document.createElement("p");
  titleP.textContent = title;
  titleP.classList.add("titleP");

  const descriptionP = document.createElement("p");
  descriptionP.textContent = description;
  descriptionP.classList.add("descriptionP");

  const photoP = document.createElement("img");
  photoP.classList.add("photoP");
  photoP.src = photo;

  pizzaDiv.appendChild(photoP);
  pizzaDiv.appendChild(titleP);
  pizzaDiv.appendChild(descriptionP);

  pizzaContainer.appendChild(pizzaDiv);
}

export { loadMenu };
