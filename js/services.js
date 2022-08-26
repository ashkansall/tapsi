const tabs = document.querySelectorAll('.tab');
const tabcontents = document.querySelectorAll('.tab-content');


tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const tabcontent = document.querySelector(`#${tab.dataset.tabTarget}`);
        
        tabs.forEach((tab) => tab.classList.remove('active'));
        tabcontents.forEach((tabcontent) => tabcontent.classList.remove("active"));
        tab.classList.add("active");
        tabcontent.classList.add("active"); 
    });
});

