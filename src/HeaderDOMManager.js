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
    this.menuButton.addEventListener("click", this.toggleProjectMenu.bind(this));
  }
  make() {
    this.#headerPlaceholder.appendChild(document.createElement("div"));
    this.#headerPlaceholder.lastChild.appendChild(document.createElement("button"));
    this.#headerPlaceholder.lastChild.lastChild.classList.add("material-symbols-outlined");
    this.#headerPlaceholder.lastChild.lastChild.id = "projectMenuButton";
    this.#headerPlaceholder.lastChild.lastChild.textContent = "chevron_right";
    this.#headerElement.appendChild(this.#headerPlaceholder);
  }

  toggleProjectMenu() {
    const headerButton = this.menuButton.textContent;
    this.menuButton.textContent = headerButton === "chevron_right" ? "chevron_left" : "chevron_right";
    const gridWidth = this.#headerElement.parentElement.style.gridTemplateColumns;
    this.#headerElement.parentElement.style.gridTemplateColumns = (gridWidth === "") ? "400px 1fr" : "";
  }
  get menuButton(){
    return document.getElementById("projectMenuButton");
  }
}

export default HeaderDOMManager;