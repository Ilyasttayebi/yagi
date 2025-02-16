// Script pour le curseur personnalisé
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.tagName === 'LI') {
        cursor.classList.add('hover');
    } else {
        cursor.classList.remove('hover');
    }
})

