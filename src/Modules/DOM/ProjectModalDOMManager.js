class ProjectModalDOMManager {
  #projectModalElement;
  #projectModalPlaceholder;
  targetProject;
  constructor(projectModalElement) {
    this.#projectModalElement = projectModalElement;
    this.#projectModalPlaceholder = document.createDocumentFragment();
    this.make();
    document
      .getElementById('projectModalCloseButton')
      .addEventListener('click', () => this.#projectModalElement.close());
  }

  make() {
    this.#projectModalPlaceholder.appendChild(document.createElement('form'));
    const projectModalForm = this.#projectModalPlaceholder.lastChild;
    projectModalForm.id = 'projectModalForm';
    projectModalForm.setAttribute('method', 'dialog');
    projectModalForm.appendChild(document.createElement('h1'));
    projectModalForm.lastChild.id = 'projectModalTitle';
    projectModalForm.lastChild.textContent = 'Project Info';
    projectModalForm.appendChild(document.createElement('label'));
    projectModalForm.lastChild.for = 'projectModalProjectName';
    projectModalForm.lastChild.textContent = 'project name';
    projectModalForm.lastChild.id = 'projectModalProjectNameLabel';
    projectModalForm.appendChild(document.createElement('input'));
    projectModalForm.lastChild.id = 'projectModalProjectName';
    projectModalForm.lastChild.value = 'project name';
    projectModalForm.lastChild.name = 'name';
    projectModalForm.appendChild(document.createElement('input'));
    projectModalForm.lastChild.id = 'projectModalAcceptButton';
    projectModalForm.lastChild.type = 'submit';
    projectModalForm.lastChild.value = 'accept';
    projectModalForm.appendChild(document.createElement('input'));
    projectModalForm.lastChild.id = 'projectModalCloseButton';
    projectModalForm.lastChild.type = 'button';
    projectModalForm.lastChild.value = 'close';
    projectModalForm.appendChild(document.createElement('input'));
    projectModalForm.lastChild.id = 'projectModalDeleteButton';
    projectModalForm.lastChild.type = 'button';
    projectModalForm.lastChild.value = 'delete';
    this.#projectModalElement.appendChild(this.#projectModalPlaceholder);
  }

  updateTargetProject(project) {
    this.targetProject = project;
    this.#projectModalElement.querySelector('#projectModalProjectName').value = project.name;
    this.#projectModalElement.setAttribute('data-projectID', project.id);
  }

  get acceptButton() {
    return this.#projectModalElement.getElementById('projectModalAcceptButton');
  }

  get closeButton() {
    return this.#projectModalElement.getElementById('projectModalCloseButton');
  }

  get deleteButton() {
    return this.#projectModalElement.getElementById('projectModalDeleteButton');
  }

  get form() {
    return this.#projectModalElement.getElementById('projectModalForm');
  }
}

export default ProjectModalDOMManager;
