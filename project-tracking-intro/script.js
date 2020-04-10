const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');
const closeIcon = document.getElementById('close-icon');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('show-nav');
})