// Projects container modifications
class ProjectsContainer {
    constructor() {
        this.projects = document.querySelectorAll('.project__container');
    }
    addContainerBorders() {
        if (!!this.projects.length) {
            [...this.projects].forEach(project => {
                [
                    { position: 'top', coord: 'x' },
                    { position: 'bottom', coord: 'x' },
                    { position: 'left', coord: 'y' },
                    { position: 'right', coord: 'y' }
                ].forEach(border => {
                    const newBorderElem = document.createElement('div');
                    newBorderElem.className = `border border__${border.position} border--${border.coord}`;
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