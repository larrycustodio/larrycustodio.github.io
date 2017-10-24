
const NavBar = class {
    constructor() {
        this.button = document.querySelector('#navButton');
        this.menu = document.querySelector('#navMenu');
        this.menuLinks = document.querySelectorAll('.nav__menu-link');
        this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
        this.toggleMobileMenu = this.toggleMenu();
        this.onScrollHandler = this.onScrollHandler.bind(this);
        this.scrollNavBarRender = window.addEventListener('scroll', this.onScrollHandler);
        this.isThrottled = true;
    }
    toggleMenu() {
        for (let list = 0; list < this.menuLinks.length; list++) {
            this.menuLinks[list].addEventListener('click', this.toggleMenuHandler);
        }
        this.button.addEventListener('click', this.toggleMenuHandler);
    }
    toggleMenuHandler() {
        if (this.button.offsetHeight) {
            this.menu.classList.toggle('menu--active');
        }
        document.addEventListener('scroll', () => this.menu.classList.remove('menu--active'));
    }
    onScrollHandler() {
        if(this.isThrottled){
            const scrollPos = window.scrollY;
            if(scrollPos > document.querySelector('#hero').clientHeight){
                console.log('adding');
                document.querySelector('#header').classList.add('header--scrolled');
            } else {
                console.log('removing');
                document.querySelector('#header').classList.remove('header--scrolled');
            }
            this.isThrottled = !this.isThrottled;
            setTimeout(() => {
                this.isThrottled = true;
            }, 500);
        }
    }
}

const IntroHeader = class {
    constructor(typingSpeed) {
        this.tagLineElem = document.querySelector('#headerTagline');
        this.tagLines = ['web developer', 'creative designer', 'hobby picture taker', 'is not defined', 'insert seo buzzword']
        this.tagLineLoop = 0;
        this.currentTagLineSubStr = 0;
        this.activeText = '';
        this.isRenderingText = true;
        this.typeTagLineWord = this.typeTagLineWord.bind(this);
        this.renderWord = setInterval(this.typeTagLineWord, 250);
    }
    typeTagLineWord() {
        if (this.currentTagLineSubStr <= this.tagLines[this.tagLineLoop].length) {
            this.activeText = this.tagLines[this.tagLineLoop].substr(0, this.currentTagLineSubStr);
            this.tagLineElem.textContent = this.activeText;
            this.currentTagLineSubStr++;
        } else {
            clearInterval(this.renderWord);
        }
    }
}

const nav = new NavBar();

const intro = new IntroHeader();