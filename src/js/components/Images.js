
class ProjectImages {
    constructor() {
        this.imgContainers = [];
    }
    getImageContainers(){
        this.imgContainers = document.querySelectorAll('.project__media');
    }
    init() {
        this.getImageContainers();
    }
};

const ProjectImage = new ProjectImages();
ProjectImage.init();