document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    if (!toggleButton || !themeStylesheet) {
        console.error("Required elements not found in the document.");
        return;
    }

    // Check localStorage for dark mode setting
    if (localStorage.getItem('dark-mode') === 'enabled') {
        enableDarkMode();
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', function() {
        if (localStorage.getItem('dark-mode') === 'enabled') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        themeStylesheet.href = './assets/css/dark-mode.css';
        localStorage.setItem('dark-mode', 'enabled');
    }

    function disableDarkMode() {
        themeStylesheet.href = './assets/css/light-mode.css';
        localStorage.setItem('dark-mode', 'disabled');
    }
});
