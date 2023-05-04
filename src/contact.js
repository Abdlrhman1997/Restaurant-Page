import contactPhoto from "../dist/images/restaurant-location.png";

function createContact() {
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const locationPhoto = document.createElement("img");
  locationPhoto = contactPhoto;

  const main = document.getElementById("main");

  main.appendChild(p1);
  main.appendChild(p2);
  main.appendChild(locationPhoto);
}
