import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
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
    emptyMain();
    e.target.classList.add("active");
    loadHome();
  });

  const menuBttn = document.createElement("button");
  menuBttn.classList.add("button-nav");
  menuBttn.textContent = "Menu";
  menuBttn.addEventListener("click", (e) => {
    removeActiveClass();
    emptyMain();
    e.target.classList.add("active");
    loadMenu();
  });

  const contactBttn = document.createElement("button");
  contactBttn.classList.add("button-nav");
  contactBttn.textContent = "Contact";
  contactBttn.addEventListener("click", (e) => {
    removeActiveClass();
    emptyMain();
    e.target.classList.add("active");
    loadContact();
  });

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

function emptyMain() {
  const main = document.getElementById("main");
  main.textContent = "";
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Cloned & Made by Abdlrhman Hegazy";
  return footer;
}

function loadWebsite() {
  const divContent = document.getElementById("content");
  divContent.appendChild(createHeader());
  divContent.appendChild(createMain());
  divContent.appendChild(createFooter());
  loadHome();
}

export { loadWebsite };
