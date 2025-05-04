const themeSelect = document.getElementById('theme-select');
const body = document.body;

themeSelect.addEventListener('change', function () {
    body.className = this.value;
});