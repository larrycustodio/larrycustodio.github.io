// Top Banner/Hero Container modifications 
class HeroContainer {
    constructor() {
        this.heroContainer = document.querySelector('#hero');
        this.scrollY = 0;
        this.projectsContainer = document.querySelector('.section__projects.section--container');
        this.workButton = document.querySelector('.caption__button');
        this.clickHandler = this.clickHandler.bind(this);
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    clickHandler() {
        const projectTop = this.projectsContainer.offsetTop;
        const offset = this.scrollY;
        let xo = 0;
        let yout = 0;
        function getY(input){
            return (50 * Math.pow(input, 0.5)) + offset;
        }
        function scrollDown() {
            if (yout >= projectTop) {
                clearInterval(scrollInterval);
            }
            xo = xo + 1;
            yout = getY(xo);
            window.scrollTo(0, yout);
        }
        const scrollInterval = setInterval(scrollDown, 2);
    }

    scrollHandler(){
        this.scrollY = window.scrollY;
    }

    onWorkButtonClick() {
        this.workButton.addEventListener('click', this.clickHandler, false);
    }

    onWindowScroll() {
        window.addEventListener('scroll', this.scrollHandler, false);
    }

    init() {
        this.onWorkButtonClick();
        this.onWindowScroll();
    }
}

const Hero = new HeroContainer;
Hero.init();