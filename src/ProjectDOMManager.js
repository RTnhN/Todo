class ProjectDOMManager {
  #projectsElement;
  #projectsPlaceholder;
  #projectsContainer;
  #dragged;
  #draggedId;
  #index;
  #indexDrop;
  #draggableList;
  constructor(projectElement) {
    this.#projectsElement = projectElement;
    this.#projectsPlaceholder = document.createDocumentFragment();
    this.make();
    this.#projectsElement.addEventListener("dragstart", this.startDrag.bind(this));
    this.#projectsElement.addEventListener("dragover", event=>event.preventDefault());
    this.#projectsElement.addEventListener("drop", this.drop.bind(this));
  }
  make() {
    this.#projectsPlaceholder.appendChild(document.createElement("p"));
    this.#projectsPlaceholder.lastChild.id="projectsHeaderTitle";
    this.#projectsPlaceholder.lastChild.textContent = "projects";
    this.#projectsPlaceholder.appendChild(document.createElement("button"));
    this.#projectsPlaceholder.lastChild.id = "newProjectButton";
    this.#projectsPlaceholder.lastChild.textContent = "add";
    this.#projectsPlaceholder.lastChild.classList.add("material-symbols-outlined");
    this.#projectsPlaceholder.appendChild(document.createElement("div"));
    this.#projectsContainer = this.#projectsPlaceholder.lastChild;
    this.#projectsContainer.id = "projectsContainer";
    this.#projectsElement.appendChild(this.#projectsPlaceholder);
    
  }
  populateProjectsList(projectsList){
    this.clearProjectsList()
    projectsList.forEach(this.addProject.bind(this))
  }
  addProject(project){
    this.#projectsContainer.appendChild(document.createElement("div"));
    const projectDiv = this.#projectsContainer.lastChild;
    projectDiv.id = project.id;
    projectDiv.classList.add("projectDropzone");
    projectDiv.setAttribute("draggable", "true");
    projectDiv.appendChild(document.createElement("p"));
    projectDiv.lastChild.textContent = project.name;
    }
  updateProject(project){
    const projectElement = document.getElementById(project.id);
    projectElement.lastChild.remove();
    projectElement.appendChild(document.createElement("p"));
    projectElement.lastChild.textContent = project.name;
    projectElement.lastChild.classList.add("active");
  }
  deleteProject(project){
    this.projectsContainer.remove(document.getElementById(project.id))
  }
  clearProjectsList(){
    while (this.#projectsContainer.firstChild){
      this.#projectsContainer.removeChild(this.#projectsContainer.firstChild);
    }
  }
  resetProjectUnderline(){
    Array.from(this.projectsContainer.children).forEach(name => name.lastChild.classList.remove("active"));
  }
  setProjectUnderline(id){
    this.resetProjectUnderline();
    document.getElementById(id).lastChild.classList.add("active");
  }

  startDrag(e){
    this.#dragged = e.target;
    this.#draggedId = this.#dragged.id;
    this.#draggableList = Array.from(e.target.parentNode.children)
    this.#index = this.#draggableList.findIndex( element => element === this.#dragged )
  }
  drop(e){
    const target = (e.target.tagName === "P") ? e.target.parentNode: e.target;
    if (!target.classList.contains("projectDropzone") || target.id === this.#draggedId) return;
    this.#dragged.remove(this.#dragged);
    this.#indexDrop = this.#draggableList.findIndex( element => element === target )
    if (this.#draggedId > this.#indexDrop){
      target.before(this.#dragged);
    } else {
      target.after(this.#dragged);
    }

  }
  get newProjectButton(){
    return document.getElementById("newProjectButton");
  }
  get projectsDivs(){
    return document.querySelectorAll("#projectsContainer>div");
  }
  get projectsContainer(){
    return document.getElementById("projectsContainer");
  }
  get projectsDivIds(){
    const projectDivs = Array.from(document.querySelectorAll("#projectsContainer>div"));
    return projectDivs.map(div => div.id);
  }
  get projectNames(){
    return document.querySelectorAll("#projectsContainer p");
  }
  get lastProject(){
    return document.getElementById("projectsContainer").lastChild;
  }
}

export default ProjectDOMManager;