function createHome() {
  const home = document.createElement("div");
  home.id = "container";

  const p1 = document.createElement("p");
  p1.textContent = "Best pizza in your country";

  const p2 = document.createElement("p");
  p2.textContent = "Made with passion since 1908";

  const img = document.createElement("img");
  img.src = "images/chef.png";
  img.alt = "chef";

  const p3 = document.createElement("p");
  p3.textContent = "Order online or visit us!";

  home.appendChild(p1);
  home.appendChild(p2);
  home.appendChild(img);
  home.appendChild(p3);

  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export { loadHome };
