function initFormValidation(formElement) {
  const saveButton = formElement.querySelector(
    ".popup__button_save, .popup__button_created",
  );
  const inputs = formElement.querySelectorAll(".popup__input");

  if (!saveButton || inputs.length === 0) return;

  function toggleButtonState() {
    const allValid = Array.from(inputs).every((input) => input.validity.valid);
    saveButton.disabled = !allValid;
  }

  function showInputError(inputElement, errorMessage) {
    const errorElement = formElement.querySelector(
      `.popup__error_${inputElement.id}`,
    );
    inputElement.classList.add("popup__input_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__span_error");
  }

  function hideInputError(inputElement) {
    const errorElement = formElement.querySelector(
      `.popup__error_${inputElement.id}`,
    );
    inputElement.classList.remove("popup__input_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__span_error");
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      toggleButtonState();
      if (!input.validity.valid) {
        showInputError(input, input.validationMessage);
      } else {
        hideInputError(input);
      }
    });
  });

  toggleButtonState();
}
const forms = document.querySelectorAll(".popup__form");
forms.forEach((form) => initFormValidation(form));

//apartado para cerrar el popup dando click fuera de el

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function setupPopupCloseOnOverlay(popup) {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup(popup);
    closePopup(popupAdd);
  }
});

setupPopupCloseOnOverlay(popup);
setupPopupCloseOnOverlay(popupAdd);
