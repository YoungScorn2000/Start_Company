var navBar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 56) {
        navBar.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navBar.classList.remove('navbar-scrolled');
    }
});
