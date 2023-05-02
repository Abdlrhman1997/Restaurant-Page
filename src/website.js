function createHeader() {
  const header = document.createElement("header");
  header.id = "header";

  const h1 = document.createElement("h1");
  h1.textContent = "Rahim Pizza";

  header.appendChild(h1);
  header.appendChild(createNav);
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
  const homeBttn = document.createElement("button");
  homeBttn.classList.add("button-nav");
  homeBttn.textContent = "Home";
  homeBttn.addEventListener("click", checkActiveButton(e.target));

  const menuBttn = document.createElement("button");
  menuBttn.classList.add("button-nav");
  menuBttn.textContent = "Menu";
  menuBttn.addEventListener("click", checkActiveButton(e.target));

  const contactBttn = document.createElement("button");
  contactBttn.classList.add("button-nav");
  contactBttn.textContent = "Contact";
  contactBttn.addEventListener("click", checkActiveButton(e.target));
}

function pageLoad() {}

export { pageLoad };
