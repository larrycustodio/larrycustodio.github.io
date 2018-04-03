// Projects container modifications
class ProjectsContainer {
    constructor() {
        this.projects = document.querySelectorAll('.project__container');
    }
    addContainerBorders() {
        if (!!this.projects.length) {
            [...this.projects].forEach(project => {
                ['border--t', 'border--b', 'border--l', 'border--r'].forEach(border => {
                    const newBorderElem = document.createElement('div');
                    newBorderElem.className = `border ${border}`;
                    project.appendChild(newBorderElem);
                });
            })
        }
    }
    init() {
        this.addContainerBorders();
    }
};

window.addEventListener('load', event => {
    const Projects = new ProjectsContainer;
    Projects.init();
})