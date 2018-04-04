// Projects container modifications
class ProjectsContainer {
    constructor() {
        this.projects = document.querySelectorAll('.project__container');
        this.scrollWindow = 0;
        this.ticking = false;
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    addContainerBorders() {
        // Create individual sides positioned absolute as div elements
        // Then add as child node to each project container 
        if (!!this.projects.length) {
            [...this.projects].forEach(project => {
                [
                    { position: 'top', coord: 'x' },
                    { position: 'bottom', coord: 'x' },
                    { position: 'left', coord: 'y' },
                    { position: 'left--overlay', coord: 'y' },
                    { position: 'right', coord: 'y' },
                    { position: 'right--overlay', coord: 'y' },

                ].forEach(border => {
                    const newBorderElem = document.createElement('div');
                    newBorderElem.className = `border border__${border.position} border--${border.coord}`;
                    project.appendChild(newBorderElem);
                });
            })
        }
    }

    addScrollModifiers() {
        // Add scroll listeners for toggling active class on project containers  
        window.addEventListener('scroll', this.scrollHandler, false);
    }

    scrollHandler() {
        // Set scrollWindow based on window scroll position
        // Check if scrollWindow is either
        this.scrollWindow = window.scrollY;
        [...this.projects].forEach(project => {
            // Set bounds for changing the container classes
            // Once it's within conditional bounds, toggle .container--active on container
            // and toggle border--active on container
            const isContainerInView = this.scrollWindow >= (project.offsetTop * 0.5);
            if (isContainerInView) {
                project.classList.add('container--active');
            }
        });
        // if (!this.ticking) {
        //     requestAnimationFrame(this.updateContainerClass);
        // }
        this.ticking = true;
    }

    updateContainerClass() {
        console.log(this.scrollY);
    }

    init() {
        this.addContainerBorders();
        this.addScrollModifiers();
    }
};

const Projects = new ProjectsContainer;
Projects.init();
