const toggler = document.querySelector('.nav__toggler');
const navbar = document.querySelector('.nav');
toggler.addEventListener("click", () => {
    navbar.classList.toggle('nav__expanded');
})