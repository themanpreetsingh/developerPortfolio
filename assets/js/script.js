const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('#close');

// Toggle NavBar on small screens 
function toggleNav() {
    document.body.classList.toggle('header-visible');
    toggleBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
};

toggleBtn.addEventListener('click', toggleNav);

closeBtn.addEventListener('click', toggleNav);

//TODO: highlight the section name in nav bar for the open section