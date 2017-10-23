const NavBar = class {
    constructor(){
        this.button =  document.querySelector('#navButton');
        this.menu = document.querySelector('#navMenu');
        this.menuLinks = document.querySelectorAll('.nav__menu-link');
        this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
    }
    toggleMenu(){
        for(let list=0; list < this.menuLinks.length; list++){
            this.menuLinks[list].addEventListener('click',this.toggleMenuHandler);
        }
        this.button.addEventListener('click', this.toggleMenuHandler);
    }
    toggleMenuHandler(){
        this.menu.classList.toggle('menu--active');
    }
};

const nav = new NavBar();
nav.toggleMenu();