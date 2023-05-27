const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 90) {
        navbar.classList.add('navbarb');
    } else {
        navbar.classList.remove('navbarb');
    }
};