//A
let buttonEdit = document.querySelector("#main__profile-btnedit");
//A
let popup = document.querySelector(".popup");
//B
let buttonClose = document.querySelector(".popup__button_close");
let buttonCloseCre = document.querySelector(".popup__button_closecre");
//C
let form = document.querySelector(".popup__container");
//D
let inName = document.querySelector(".main__profile-name");
let inAbout = document.querySelector(".main__profile-about");
let inpName = document.querySelector(".popup__item_name");
let inpAbout = document.querySelector(".popup__item_about");

//s9D
let inTitle = document.querySelector(".gallery__footer-place");
let inLink = document.querySelector(".gallery__card-img");
let inpTitle = document.querySelector(".popup__item_title");
let inpLink = document.querySelector(".popup__item_link");

//s9A
let formAdd = document.querySelector(".popup__container-add ");
let buttonAdd = document.querySelector("#main__profile-addbutton");
let popupAdd = document.querySelector("#popupAdd");
let buttonClose3 = document.querySelector("#button__close3");
let buttonNew = document.querySelector(".popup__button_created");

buttonAdd.addEventListener("click", openAdd);
//A
function openEdit() {
  //inpName.value = inName.textContent;
  //inpAbout.value = inAbout.textContent;
  popup.classList.toggle("popup_opened");
}
function openAdd() {
  popupAdd.classList.toggle("popup_opened");
}

//A
buttonEdit.addEventListener("click", openEdit);
//B

buttonClose.addEventListener("click", openEdit);

buttonCloseCre.addEventListener("click", openAdd);
buttonClose3.addEventListener("click", openImagePopup);

//C
function saveChange(e) {
  e.preventDefault();
  inName.textContent = inpName.value;
  inAbout.textContent = inpAbout.value;
  openEdit();
}
//C
form.addEventListener("submit", saveChange);
// funcion para crear tarjeta a partir de la entrada de inf

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const templateCard = document.querySelector(".template-card");
const cardList = document.querySelector(".gallery");

initialCards.forEach(function (item) {
  createdCard(item.name, item.link);
});

function createdCard(title, link) {
  const clonedCard = templateCard.content
    .querySelector(".gallery__card")
    .cloneNode(true);
  const cardTitle = clonedCard.querySelector(".gallery__footer-place");
  const cardImage = clonedCard.querySelector(".gallery__card-img");
  const cardDelete = clonedCard.querySelector(".gallery__footer-del");
  const cardLikeButton = clonedCard.querySelector(".gallery__footer-btn");
  cardTitle.textContent = title;
  cardImage.src = link;
  cardDelete.addEventListener("click", function () {
    clonedCard.remove();
  });
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("gallery__footer-btn_active");
  });
  cardImage.addEventListener("click", function () {
    openImagePopup(link, title);
  });

  cardList.append(clonedCard);
}
//APARTADO PARA CREAR NUEVA CARTA
function newCard(e) {
  e.preventDefault();
  const title = inpTitle.value;
  const link = inpLink.value;
  createdCard(title, link);
  openAdd();
}

formAdd.addEventListener("submit", newCard);

//APARTADO PARA ABRIR LA IMAGEN EN TAMAÑO MAS GRANDE EN PROCESO

function openImagePopup(src, captionText) {
  const imagePopup = document.querySelector(".popup__image-p");
  const imagenPopup = document.querySelector(".popup__image-pic");
  const imagenTitle = document.querySelector(".popup__image-caption");

  imagePopup.classList.toggle("popup_opened-grid");
  imagenPopup.src = src;
  imagenTitle.textContent = captionText;
}

// Añade el listener para cerrar al botón
//imageCloseButton.addEventListener("click", closePopup);
//imageContainer.addEventListener("click", closePopup);
