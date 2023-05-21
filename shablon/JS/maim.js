// скрипт для кнопки меню

let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


// Эффект активной кнопки меню при выбранном поле 
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // фон шапки при скроле 

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Закрытие меню при нажатии на выбранную иконку (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// эффект UP для основного контента и заголовков section 
ScrollReveal({
    // reset: true, 
    distance: '80px',
    duration: 2000, 
    delat: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicion-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Приколы с Typed js

const typed = new Typed('.multiple-text', {
    strings: ['Многопользовательского', 'Открытого', 'Удобного'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});