const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('#close');
const navBarLinks = Array.from(document.querySelectorAll('#nav a'));

// Toggle NavBar on small screens 
function toggleNav() {
    document.body.classList.toggle('header-visible');
    toggleBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
};

toggleBtn.addEventListener('click', toggleNav);

closeBtn.addEventListener('click', toggleNav);

//TODO: highlight the section name in nav bar for the open section


// Highlight the link clicked by user
navBarLinks.forEach( link => link.addEventListener('click', (eventDetails) => switchActiveLink(eventDetails.target)));
function switchActiveLink(selectedLink) {
    const currentlyActive = navBarLinks.filter( link => link.classList.contains('active') )[0]; 
    currentlyActive.classList.remove('active');
    selectedLink.classList.add('active');
}