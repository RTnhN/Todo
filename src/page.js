class Page{
  #mainElement;
  #data;
  #targetElement;
  #parentElement;
  #imageSrcDict

  constructor(mainElement, data, imageSrcDict){
    this.#mainElement = mainElement;
    this.#targetElement = document.createDocumentFragment();
    this.#parentElement;
    this.#data = data;
    this.#imageSrcDict = imageSrcDict;
  }

  make(){
    this.#data.forEach(this.renderTag.bind(this))
    this.#mainElement.appendChild(this.#targetElement)
  }
  clear(){
    while (this.#mainElement.firstChild) {
      this.#mainElement.removeChild(this.#mainElement.firstChild);
    }
  }
  renderTag(elem){
    this.#targetElement.appendChild(document.createElement(elem.tag));
    if (elem.text !== null && elem.text !== undefined){
      this.#targetElement.lastChild.textContent = elem.text;
    }
    if (elem.id !== null && elem.id !== undefined){
      this.#targetElement.lastChild.id = elem.id;
    }
    if (elem.className !== null && elem.className !== undefined){
      this.#targetElement.lastChild.className = elem.className;
    }
    if (elem.src !== null && elem.src !== undefined){
      this.#targetElement.lastChild.setAttribute("src", this.#imageSrcDict[elem.src]);
    }
    if ("content" in elem){
      this.#parentElement = this.#targetElement;
      this.#targetElement = this.#targetElement.lastChild;
      elem.content.forEach(this.renderTag.bind(this))
      this.#targetElement = this.#parentElement;
    }
  }

}
export default Page