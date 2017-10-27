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
        if(!this.button.offsetHeight){
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

class ContactForm {
    constructor(){
        this.formInputElems = [document.querySelector('#inName'), document.querySelector('#inEmail'),document.querySelector('#inMessage')];
        this.sendButton = document.querySelector('#inSend');
        this.formInputVals = {
            name: '',
            email: '',
            message: ''
        }
        
        this.formInputElems.forEach(elem => {
            elem.addEventListener('change',this.handleInputs.bind(this));
            elem.addEventListener('focusout',this.handleFocus.bind(this));
        });
        
        this.onFormSubmit = this.sendButton.addEventListener('click',this.handleSubmit.bind(this));

    }
    handleSubmit(e){
        //e.preventDefault();
        console.log(this.formInputVals);
    }
    handleInputs(e){
        this.formInputVals[e.target.name] = e.target.value;
    }
    handleFocus(e){
        const isValid = !e.srcElement.validity.typeMismatch && e.srcElement.validity.valid;
        const statusDisplay = e.target.parentNode.children[0]
        if(isValid){
            statusDisplay.textContent = '✓';
            statusDisplay.classList.add('status--valid');
            statusDisplay.classList.remove('status--invalid');            
        } else {
            statusDisplay.textContent = '✗';
            statusDisplay.classList.add('status--invalid');
            statusDisplay.classList.remove('status--valid');
        }
    }
} 

const nav = new NavBar();
const intro = new IntroHeader();
const contactForm = new ContactForm();