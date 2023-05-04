import contactPhoto from "../dist/images/restaurant-location.png";

function loadContact() {
  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contactContainer");
  const p1 = document.createElement("p");
  p1.textContent = "📞 123 456 789";
  const p2 = document.createElement("p");
  p2.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";
  const locationPhoto = document.createElement("img");
  locationPhoto.src = contactPhoto;

  const main = document.getElementById("main");

  contactContainer.appendChild(p1);
  contactContainer.appendChild(p2);
  contactContainer.appendChild(locationPhoto);

  main.appendChild(contactContainer);
}

export { loadContact };
