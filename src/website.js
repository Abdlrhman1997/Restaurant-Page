function createHeader() {
  const header = document.createElement("header");
  header.id = "header";

  const h1 = document.createElement("h1");
  h1.textContent = "Rahim Pizza";

  header.appendChild(h1);
  header.appendChild(createNav());

  return header;
}

function setActiveButton(e) {
  const navButtons = document.querySelectorAll(".button-nav");
  navButtons.forEach((e) => {
    e.classList.remove(".active");
    e.classList.add(".active");
  });
}

function checkActiveButton(e) {
  if (e.classList.contain("active")) return;
  setActiveButton(e);
  switch (e.textContent) {
    case "Home":
      loadHome();

    case "Menu":
      loadMenu();

    case "Contact":
      loadContact();
  }
}

function createNav() {
  const nav = document.createElement("nav");

  const homeBttn = document.createElement("button");
  homeBttn.classList.add("button-nav");
  homeBttn.textContent = "Home";
  homeBttn.addEventListener("click", (e) => {
    checkActiveButton(e.target);
  });

  const menuBttn = document.createElement("button");
  menuBttn.classList.add("button-nav");
  menuBttn.textContent = "Menu";
  menuBttn.addEventListener("click", (e) => {
    checkActiveButton(e.target);
  });

  const contactBttn = document.createElement("button");
  contactBttn.classList.add("button-nav");
  contactBttn.textContent = "Contact";
  contactBttn.addEventListener("click", (e) => {
    checkActiveButton(e.target);
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

function loadWebsite() {
  const divContent = document.getElementById("content");
  divContent.appendChild(createHeader());
  divContent.appendChild(createMain());

  setActiveButton(document.querySelector(".button-nav"));
}

export { loadWebsite };
