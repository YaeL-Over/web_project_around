// Manejador del evento Escape
function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

// Abre cualquier popup y activa el listener de Escape
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}

// Cierra cualquier popup y remueve el listener de Escape
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
}

// Cierra el popup al hacer clic en el fondo oscuro (overlay)
export function setOverlayClose(popup) {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
}
