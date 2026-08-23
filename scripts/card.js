// Importamos la función para abrir el modal desde utils.js
import { openPopup } from "./utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  // Clona el template
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__card")
      .cloneNode(true);

    return cardElement;
  }

  // Manejador privado: Like
  _handleLikeClick() {
    this._likeButton.classList.toggle("gallery__footer-btn_active");
  }

  // Manejador privado: Eliminar tarjeta
  _handleDeleteClick() {
    this._element.remove();
    this._element = null; // Limpieza de memoria
  }

  // Manejador privado: Vista previa de imagen
  _handleImageClick() {
    const imagePopup = document.querySelector(".popup__image-p");
    const imagenPopup = imagePopup.querySelector(".popup__image-pic");
    const imagenTitle = imagePopup.querySelector(".popup__image-caption");

    imagenPopup.src = this._link;
    imagenPopup.alt = this._name;
    imagenTitle.textContent = this._name;

    openPopup(imagePopup);
  }

  // Asigna los eventos a los botones de ESTA tarjeta específica
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  // Método público: Crea el elemento con datos y eventos
  generateCard() {
    this._element = this._getTemplate();

    // Guardamos referencias a los elementos internos
    this._cardImage = this._element.querySelector(".gallery__card-img");
    this._cardTitle = this._element.querySelector(".gallery__footer-place");
    this._likeButton = this._element.querySelector(".gallery__footer-btn");
    this._deleteButton = this._element.querySelector(".gallery__footer-del");

    // Llenamos los datos
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    // Activamos los listeners
    this._setEventListeners();

    return this._element;
  }
}
