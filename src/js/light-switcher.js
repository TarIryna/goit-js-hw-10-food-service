const lightSwitch = document.querySelector(".theme-switch__toggle");
const bodyEl = document.querySelector("body");
themeControl();

lightSwitch.addEventListener('change', themeSwitch);

function themeSwitch() {
    if (lightSwitch.checked) {
        console.log('выбрана темная тема');
        bodyEl.classList.remove("light-theme");
        bodyEl.classList.add("dark-theme");
        localStorage.setItem('theme', "dark-theme");
    }
    else {
        console.log('выбрана светлая тема');
        bodyEl.classList.remove("dark-theme");
        bodyEl.classList.add("light-theme");
        localStorage.setItem('theme', "light-theme");
    }
}

function themeControl () {
    const themeSaved = localStorage.getItem('theme');
    console.log(themeSaved);
    if (themeSaved === "dark-theme") {
        bodyEl.classList.remove("light-theme");
        bodyEl.classList.add("dark-theme");
        lightSwitch.setAttribute('checked', 'true');
    }
}


