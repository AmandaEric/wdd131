const themeSelect = document.getElementById('theme-select');
const body = document.body;
const logo = document.querySelector('footer img');

function changeTheme() {
    const selectedTheme = themeSelect.value;

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_white.webp'; // Replace with actual white logo file path
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelect.addEventListener('change', changeTheme);