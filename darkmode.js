const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

// On page load, apply the saved mode
if (localStorage.getItem('darkmode') === 'active') {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    const darkmode = localStorage.getItem('darkmode'); // refresh every click
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
