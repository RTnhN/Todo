class ProjectDOMManager {
  #projectsElement;
  #projectsPlaceholder;
  #projectsContainer
  constructor(projectElement) {
    this.#projectsElement = projectElement;
    this.#projectsPlaceholder = document.createDocumentFragment();
    this.make()
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
    projectsList.forEach(this.createProject.bind(this))
  }
  createProject(project){
    this.#projectsContainer.appendChild(document.createElement("div"));
    const projectDiv = this.#projectsContainer.lastChild;
    projectDiv.id = project.id;
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

  clearProjectsList(){
    while (this.#projectsContainer.firstChild){
      this.#projectsContainer.removeChild(this.#projectsContainer.firstChild);
    }
  }
  get newProjectButton(){
    return document.getElementById("newProjectButton");
  }
  get projectsDivs(){
    return document.querySelectorAll("#projectsContainer>div");
  }
  get projectNames(){
    return document.querySelectorAll("#projectsContainer p");
  }
  get lastProject(){
    return document.getElementById("projectsContainer").lastChild;
  }
}

export default ProjectDOMManager;