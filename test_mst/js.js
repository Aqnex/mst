let nav = document.getElementById('nav');
window.onscroll = () => {

    if (window.scrollY > 1) {
        nav.style.opacity = 0.15;
    }

    else {
        nav.style.opacity = 1;
    }
}