// --- IMPORTACIÓN DE MÓDULOS ---
import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup, setOverlayClose } from "./utils.js";

// --- CONFIGURACIÓN DE VALIDACIÓN ---
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button[type='submit']",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// --- DATOS INICIALES ---
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

// --- SELECTORES DEL DOM ---
const gallery = document.querySelector(".gallery");

// Popups
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupImage = document.querySelector(".popup__image-p");
const allPopups = document.querySelectorAll(".popup");

// Botones de apertura
const editButton = document.querySelector("#main__profile-btnedit");
const addButton = document.querySelector("#main__profile-addbutton");

// Formularios e inputs
const formEdit = popupEdit.querySelector(".popup__form");
const nameInput = formEdit.querySelector("#nombre");
const aboutInput = formEdit.querySelector("#acercademi");

const formAdd = popupAdd.querySelector(".popup__form-add");
const titleInput = formAdd.querySelector("#titulo");
const linkInput = formAdd.querySelector("#link");

// Elementos de perfil
const profileName = document.querySelector("#nombreResult");
const profileAbout = document.querySelector("#professionResult");

// --- FUNCIONES DE TARJETAS ---
// Función auxiliar para crear y devolver el elemento de una tarjeta
function createCard(item) {
  const card = new Card(item, ".template-card");
  return card.generateCard();
}

// Renderizar tarjetas iniciales
initialCards.forEach((item) => {
  const cardElement = createCard(item);
  gallery.append(cardElement);
});

// --- VALIDACIÓN DE FORMULARIOS ---
// Creamos una instancia de FormValidator para cada formulario
const editFormValidator = new FormValidator(validationConfig, formEdit);
editFormValidator.setEventListeners();

const addFormValidator = new FormValidator(validationConfig, formAdd);
addFormValidator.setEventListeners();

// --- EVENTOS DE APERTURA Y CIERRE DE POPUPS ---

// Abrir popup de editar perfil
editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent.trim();
  aboutInput.value = profileAbout.textContent.trim();
  openPopup(popupEdit);
});

// Abrir popup de añadir tarjeta
addButton.addEventListener("click", () => {
  openPopup(popupAdd);
});

// Asignar listeners de cierre a todos los popups (botón X y clic fuera en el overlay)
allPopups.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__button_close");
  if (closeButton) {
    closeButton.addEventListener("click", () => closePopup(popup));
  }
  setOverlayClose(popup);
});

// --- MANEJO DE ENVÍO DE FORMULARIOS ---

// Guardar cambios del perfil
formEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEdit);
});

// Crear nueva tarjeta
formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCardData = {
    name: titleInput.value,
    link: linkInput.value,
  };

  const cardElement = createCard(newCardData);
  gallery.prepend(cardElement); // .prepend para colocarla al principio

  formAdd.reset(); // Limpia los campos del formulario
  addFormValidator.resetValidation();
  closePopup(popupAdd);
});
