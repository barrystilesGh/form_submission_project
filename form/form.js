const formEl = document.querySelector("main .destination_form");
const addBtn = document.querySelector("#submit");

const destCont = document.querySelector("#destinations_container");
const destTitle = document.querySelector("#title");



formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
  /* collecting form input data */
  const destName = evt.target.elements["name"].value;
  const destLoc = evt.currentTarget.elements["location"].value;
  const destPhoto = evt.currentTarget.elements["photo"].value
  const destDescription = evt.currentTarget.elements["description"].value


  const destHTML = updatingDestDetails(destName, destLoc, destPhoto, destDescription);


  destCont.appendChild(destHTML);

  /* Changing the header for the destination Details */
  if (destCont.children.length > 0) {
    destTitle.innerHTML = `My wish list`
  }


  /* A clean way to clear the form input */
  for (let element of formEl) {
    element.value = "";
  }
});

const updatingDestDetails = (name, location, photoURL, description) => {
  /* creating a container for the image */
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  /* Creating the img element and setting an alt attribute with a constant image*/
  const imgEl = document.createElement("img");
  imgEl.setAttribute("alt", `${name}`);

  /* constant image when the page loads */
  const constImage = `../Edit/10.jpg`;

  /* Putting the image url on the page */
  if (photoURL.length === 0) {
    imgEl.setAttribute("src", `${constImage}`)
  } else {
    imgEl.setAttribute("src", `${photoURL}`)
  }

  cardEl.appendChild(imgEl)

  /* Creating the card body */
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", ".card_body")

  /* the destination name on the card */
  const cardName = document.createElement("h3");
  cardName.innerHTML = `${name}`;
  cardBody.appendChild(cardName);

  /* The destination location on the card */
  const cardLoc = document.createElement("h4");
  cardLoc.innerHTML = `${location}`;
  cardBody.appendChild(cardLoc);

  /* The description */
  if (description !== 0) {
    const cardDescription = document.createElement("p");
    cardDescription.innerHTML = `${description}`;
    cardBody.appendChild(cardDescription);
  } else {
    cardDescription.innerHTML = `Have fun!`
    cardBody.appendChild(cardBody)
  }

  /* Creating the remove button */
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = `Remove`;
  cardBody.appendChild(removeBtn);

  removeBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    cardEl.remove();

  })

  cardEl.appendChild(cardBody);


  return cardEl;
}




