document.addEventListener('DOMContentLoaded', function () {
    //Event Handlers
    const onContactFormShowHandler = event => {
        event.preventDefault();
        contactFormContainer.classList.remove('contact-form--hide');
        contactFormContainer.classList.add('contact-form--show');
    }
    const onContactFormCloseHandler = event => {
        contactFormContainer.classList.add('contact-form--hide');
        setTimeout(() => { contactFormContainer.classList.remove('contact-form--show') }, 950);
    }
    const onContactFormSubmitHandler = event => {
        event.preventDefault();

        const formName = document.querySelector('#firstName');
        const formEmail = document.querySelector('#email');
        const formMessage = document.querySelector('#message');

        axios.post('/contact', {name: formName.value, email: formEmail.value, message: formMessage.value})
        .then(res => {
            const formHeader = document.querySelector('.contact-info')[0].children[0];            
            const formHeaderText = document.querySelector('#formHeaderText');
            const formGroups = document.querySelectorAll('.form-group');
            formHeader.textContent = 'Appreciate it!'
            formHeaderText.textContent = `Thanks for your interest, ${formName.value}!` + 
            'I will get back to you as soon as possible';
        })
        .catch(err => {
            console.log('error occured :(');
        });

    }
    const headerTitleTextHandler = () => {
        if (headerTitleCurrText.length < headerTitleText.length) {
            headerTitleCurrIndex++;
            headerTitleCurrText = headerTitleText.substr(0, headerTitleCurrIndex);
            headerTitle.innerText = headerTitleCurrText;
        } else {
            clearInterval(headerTitleInterval);
        }
    }
    //DOM Assignment 
    const contactFormContainer = document.querySelector('#contactFormContainer');

    const headerTitle = document.querySelector('#headerTitle');

    const indexContactFormToggler = document.querySelector('#indexContactButtons');
    const navBarContactFormToggler = document.querySelector('#contactMenuLink');
    const footerContactFormToggler = document.querySelector('#footerContactFormToggler');
    const contactTogglers = [indexContactFormToggler, navBarContactFormToggler, footerContactFormToggler];

    // const contactForm = document.querySelector('#contactForm');
    const contactFormClose = document.querySelector('#contactFormClose');

    //Event Listeners
    for (let contactToggler of contactTogglers) {
        !!contactToggler ? contactToggler.addEventListener('click', onContactFormShowHandler) : null;
    }
    contactFormClose.addEventListener('click', onContactFormCloseHandler);
    contactForm.addEventListener('submit', onContactFormSubmitHandler);

    //DOM Modifiers
    headerTitle.innerText = "";
    const headerTitleText = 'Larry Custodio';
    let headerTitleCurrIndex = 0;
    let headerTitleCurrText = "";
    let typeInterval = Math.random() * 50 + 100;
    let headerTitleInterval = setInterval(headerTitleTextHandler, typeInterval);
});