const contactForm = document.querySelector('#contactFormContainer');
const onContactFormShowHandler = event => {
    event.preventDefault();    
    contactForm.classList.remove('contact-form--hide');    
    contactForm.classList.add('contact-form--show');
}
const onContactFormCloseHandler = event => {
    contactForm.classList.add('contact-form--hide');
    setTimeout(()=>{contactForm.classList.remove('contact-form--show')},950);        
}
const onContactFormSubmitHandler = event => {
    event.preventDefault();
}


const indexContactFormToggler = document.querySelector('#indexContactButtons');
const navBarContactFormToggler = document.querySelector('#contactMenuLink');
const footerContactFormToggler = document.querySelector('#footerContactFormToggler');
const contactTogglers = [indexContactFormToggler, navBarContactFormToggler, footerContactFormToggler];
const contactFormClose = document.querySelector('#contactFormClose');

for(let contactToggler of contactTogglers){
    !! contactToggler ? contactToggler.addEventListener('click', onContactFormShowHandler) : null;
}

contactFormClose.addEventListener('click', onContactFormCloseHandler);

contactForm.addEventListener('submit', onContactFormSubmitHandler);