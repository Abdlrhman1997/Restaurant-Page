import { loadHome } from "../home";

function createHeader() {
  const header = document.createElement("header");
  header.id = "header";

  const h1 = document.createElement("h1");
  h1.textContent = "Rahim Pizza";

  header.appendChild(h1);
  header.appendChild(createNav());

  return header;
}

function removeActiveClass() {
  const buttonsList = document.querySelectorAll(".button-nav");
  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].classList.remove("active");
  }
}

function createNav() {
  const nav = document.createElement("nav");

  const homeBttn = document.createElement("button");
  homeBttn.classList.add("button-nav");
  homeBttn.classList.add("active");
  homeBttn.textContent = "Home";
  homeBttn.addEventListener("click", (e) => {
    removeActiveClass();
    e.target.classList.add("active");
  });

  const menuBttn = document.createElement("button");
  menuBttn.classList.add("button-nav");
  menuBttn.textContent = "Menu";
  menuBttn.addEventListener("click", (e) => {});

  const contactBttn = document.createElement("button");
  contactBttn.classList.add("button-nav");
  contactBttn.textContent = "Contact";
  contactBttn.addEventListener("click", (e) => {});

  nav.appendChild(homeBttn);
  nav.appendChild(menuBttn);
  nav.appendChild(contactBttn);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function loadWebsite() {
  const divContent = document.getElementById("content");
  divContent.appendChild(createHeader());
  divContent.appendChild(createMain());
  loadHome();
}

export { loadWebsite };
