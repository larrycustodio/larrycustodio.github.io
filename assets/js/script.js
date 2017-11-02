const NavBar = class {
    constructor() {
        this.button = document.querySelector('#navButton');
        this.menu = document.querySelector('#navMenu');
        this.menuLinks = document.querySelectorAll('.nav__menu-link');
        this.menuOverlay = document.querySelector('#activeMenuOverlay');

        this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
        this.toggleMobileMenu = this.toggleMenu();    
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
            this.menuOverlay.classList.toggle('menu-overlay--active');
        }
    }
}
const IntroHeader = class {
    constructor(typingSpeed) {
        this.tagLineElem = document.querySelector('#headerTagline');
        this.tagLines = ['web developer', 'creative designer', 'javascript developer', 'react builder', 'photographer', '*insert seo buzzwords*']
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
                this.tagLineElem.textContent = this.activeText.substr(0,this.activeTextLoop);
                this.activeTextLoop++;
            } 
            //subtext reaches max length
            else {
                duration = 2000;
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

class ContactForm {
    constructor(){
        this.form = document.querySelector('#form');
        this.formInputElems = document.querySelectorAll('.form__input');
        this.sendButton = document.querySelector('#sendForm');
        this.formInputVals = {
            first_name: '',
            last_name: '',
            email: ''
        }
        this.formInputElems.forEach(elem => {
            elem.addEventListener('change',this.handleInputs.bind(this));
        });
        this.onFormSubmit = this.form.addEventListener('submit',this.handleSubmit.bind(this));
    }
    handleSubmit(e){
        console.log(e);
        // ajax.open('POST','/contact', true);
        // ajax.send(formData);
        // const formData = new FormData(this.form);
        // console.log(xhr.response);
    }
    handleInputs(e){
        this.formInputVals[e.target.name] = e.target.value;
    }
} 

const nav = new NavBar();
const intro = new IntroHeader();
const contactForm = new ContactForm();