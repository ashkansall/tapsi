const accordionheader = document.querySelectorAll('.accordion__header');
const accordion = document.querySelector('.accordion');

accordionheader.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.classList.toggle("accordion__expanded");
    })
});