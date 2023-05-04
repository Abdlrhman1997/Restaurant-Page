import SalsicciaPhoto from "../dist/images/pizzas/salsiccia.png";
import GamberiPhoto from "../dist/images/pizzas/gamberi.png";
import PepePhoto from "../dist/images/pizzas/pepe.png";
import DisgustosoPhoto from "../dist/images/pizzas/disgustoso.png";
import ColoratoPhoto from "../dist/images/pizzas/colorato.png";
import PomodoroPhoto from "../dist/images/pizzas/pomodoro.png";
import CremaPhoto from "../dist/images/pizzas/crema.png";
import CarnePhoto from "../dist/images/pizzas/carne.png";

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

  createItem(
    "Colorato",
    "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil",
    ColoratoPhoto
  );

  createItem(
    "Pomodoro",
    "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli",
    PomodoroPhoto
  );

  createItem(
    "Crema",
    "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil",
    CremaPhoto
  );

  createItem(
    "Carne",
    "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli",
    CarnePhoto
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
