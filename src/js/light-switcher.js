const lightSwitch = document.querySelector(".theme-switch__toggle");
const bodyEl = document.querySelector("body");


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

// localStorage.setItem('theme', "${lightSwitch.checked}")

console.log(lightSwitch.checked);
