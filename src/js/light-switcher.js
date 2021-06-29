const lightSwitch = document.querySelector(".theme-switch__toggle");
const bodyEl = document.querySelector("body");


lightSwitch.addEventListener('change', themeSwitch);

function themeSwitch() {
    if (lightSwitch.checked) {
        console.log('выбрана темная тема');
        bodyEl.classList.toggle("dark-theme");
        // localStorage.setItem('theme', "dark-theme");
    }
    else {
        console.log('выбрана светлая тема');
        // bodyEl.classList.toggle("light-theme");
        // localStorage.setItem('theme', "light-theme");
    }
}

// localStorage.setItem('theme', "${lightSwitch.checked}")

console.log(lightSwitch.checked);
console.log(localstorage.getItem('theme'));