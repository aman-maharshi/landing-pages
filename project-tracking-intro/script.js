const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('show-nav');
})