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

  }
  make() {
    this.#headerPlaceholder.appendChild(document.createElement("div"));
    this.#headerElement.appendChild(this.#headerPlaceholder);
  }

}

export default HeaderDOMManager;