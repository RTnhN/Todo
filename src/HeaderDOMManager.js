class HeaderDOMManager {
  #parent
  #targetElement
  #bodyElement
  #headerPlaceholder
  #footerElement
  #mainElement
  #headerElement
  constructor(headerElement) {
    this.#headerElement = headerElement;
    this.#headerPlaceholder = document.createDocumentFragment();
    this.make()

  }
  make() {
    this.#headerPlaceholder.appendChild(document.createElement("div"));
    this.#headerPlaceholder.lastChild.appendChild(document.createElement("button"));
    this.#headerPlaceholder.lastChild.lastChild.classList.add("material-symbols-outlined");
    this.#headerPlaceholder.lastChild.lastChild.id = "projectMenuButton";
    this.#headerPlaceholder.lastChild.lastChild.textContent = "menu";
    this.#headerElement.appendChild(this.#headerPlaceholder);
  }
  get menuButton(){
    return document.getElementById("projectMenuButton");

  }



}

export default HeaderDOMManager;