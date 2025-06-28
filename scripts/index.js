//A
let buttonEdit = document.querySelector("#main__profile-btnedit");
//A
let popup = document.querySelector(".popup");
//B
let buttonClose = document.querySelector(".popup__button_close");
//C
let form = document.querySelector(".popup__container");
//D
let inName = document.querySelector(".main__profile_header-name");
let inAbout = document.querySelector(".main__profile_header-about");
let inpName = document.querySelector(".popup__item_name");
let inpAbout = document.querySelector(".popup__item_about");

//A
function openEdit() {
  // inpName.value = inName.textContent;
  //inpAbout.value = inAbout.textContent;
  popup.classList.toggle("popup_opened");
}
//A
buttonEdit.addEventListener("click", openEdit);
//B
buttonClose.addEventListener("click", openEdit);
//C
function saveChange(e) {
  e.preventDefault();
  inName.textContent = inpName.value;
  inAbout.textContent = inpAbout.value;
  openEdit();
}
//C
form.addEventListener("submit", saveChange);
