let toggle = document.querySelector('.toggle');

// Toggle NavBar on small screens
toggle.addEventListener('click', () =>
{
    document.body.classList.toggle('header-visible');
});

//TODO: highlight the section name in nav bar for the open section