
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
        const header = document.querySelector('#header');
        const renderYPosition = document.querySelector('#hero').clientHeight - header.clientHeight;
        const scrollPos = window.scrollY;
        setTimeout(() => {
            this.isThrottled = true;
        }, 500);
        if(this.isThrottled){
            if(scrollPos >  renderYPosition){
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
            this.isThrottled = false;
        }
    }
}

const IntroHeader = class {
    constructor(typingSpeed) {
        this.tagLineElem = document.querySelector('#headerTagline');
        this.tagLines = ['web developer', 'creative designer', 'react builder', 'photography enthusiast', '*insert seo buzzwords*']
        this.tagLineLoop = 0;
        this.currentTagLineSubStr = 0;
        this.activeText = '';
        this.activeTextLoop = 0;
        this.isRenderingText = true;
        this.typeTagLineWord(200);
    }
    typeTagLineWord(duration) {
        this.activeText = this.tagLines[this.tagLineLoop];
        if(this.isRenderingText){
            //Adding subtext
            if(this.activeTextLoop <= this.activeText.length){
                duration = Math.random()* 150 + 75;
                console.log(this.activeTextLoop);
                console.log(this.activeText.length);
                this.tagLineElem.textContent = this.activeText.substr(0,this.activeTextLoop);
                this.activeTextLoop++;
            } 
            //subtext reaches max length
            else {
                duration = 1500;
                this.isRenderingText = false;
            }
        } else {
            //decreasing subtext
            if(this.activeTextLoop > 0){
                duration = 75;
                this.activeTextLoop--;
                this.tagLineElem.textContent = this.activeText.substring(0,this.activeTextLoop);
            } 
            //switch to next tagline
            else {
                duration = 500;                
                if(this.tagLineLoop < this.tagLines.length - 1){
                    this.tagLineLoop++;
                } else {
                    this.tagLineLoop = 0;
                }
                this.isRenderingText = true;
            }
        }
        setTimeout(()=>this.typeTagLineWord(duration),duration);
    }
}

class contactForm {
    constructor(){
        this.inputName = document.querySelector('#name');
        this.inputEmail = document.querySelector('#email');
        this.inputMessage = document.querySelector('#inMessage');
        this.sendButton = document.querySelector('#inSend');
        this.onFormSubmit = this.sendButton.addEventListener('click',this.handleFormSubmit);
    }
    handleFormSubmit(e){
        e.preventDefault();
    }
} 

const nav = new NavBar();
const intro = new IntroHeader();
const contactForm = new contactForm();