const navButton = document.querySelector('#navButton');
const onMenuClickHander = (event) => {
    const navMenu = document.querySelector('#navMenu');
    navMenu.classList.toggle('nav--hide');
}
navButton.addEventListener('click',onMenuClickHander);