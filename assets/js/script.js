const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('#close');
const navBarLinks = Array.from(document.querySelectorAll('#nav a'));
const sections = Array.from(document.querySelectorAll('#main section'));

/** Toggle NavBar on small screens **/
function toggleNav() {
    document.body.classList.toggle('header-visible');
    toggleBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
};

toggleBtn.addEventListener('click', toggleNav);

closeBtn.addEventListener('click', toggleNav);

/**Highlight the section name in nav bar for the open section**/

    //Takes a section as input and returns the corresponding link in navBar
    function getLinkForSection(section) {
        return navBarLinks.filter(link => link.getAttribute("href") === ("#" + section.getAttribute("id")))[0];
    }

    //options for observer 
    const options = {
        threshold: 0.5
    }

    //callback function for observer
    const callback = (entries, observer) => {
        entries.filter(entry => entry.isIntersecting && entry.intersectionRatio >= 0.5)
        .forEach(entry => {
            const link = getLinkForSection(entry.target);
            switchActiveLink(link);
        });
    }
    const observer = new IntersectionObserver(callback, options);

    //observe every section in the main div
    sections.forEach(section => {
        observer.observe(section);
    })
  

// Highlight the link clicked by user
navBarLinks.forEach( link => link.addEventListener('click', (eventDetails) => switchActiveLink(eventDetails.target)));
function switchActiveLink(selectedLink) {
    const currentlyActive = navBarLinks.filter( link => link.classList.contains('active') )[0]; 
    currentlyActive.classList.remove('active');
    selectedLink.classList.add('active');
}