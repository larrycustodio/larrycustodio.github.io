//Navbar
//Work Section - Index
// const workFigures = document.querySelectorAll('.work-sample');

// const onFigureHoverHandler = event => {
//     const img = event.target.children[0];
//     const child = event.target.nextElementSibling;
//     if(!!img && img.tagName == 'IMG') img.classList.add('sample__img--hover');
//     if(!!child && child.tagName == 'FIGCAPTION') child.classList.add('sample__body--hover');
// }

// const onFigureHoverOutHandler = event => {
//     const img = event.target;
//     const child = event.target.nextElementSibling;
//     if(!!img && img.tagName == 'IMG') img.classList.remove('sample__img--hover');
//     if(!!child && child.tagName == 'FIGCAPTION') child.classList.remove('sample__body--hover');
// }

// workFigures.forEach(figure => {
//     figure.addEventListener('mouseover', onFigureHoverHandler);
//     figure.addEventListener('mouseout', onFigureHoverOutHandler);    
// })