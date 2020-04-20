const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');
const body = document.body; 

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('show-nav');
    nav.classList.toggle('toggle-flex');
})