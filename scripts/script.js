const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('menu')[0];

const openImg = 'images/icon-menu.svg';
const closeImg = 'images/icon-close-menu.svg';
const toggleImg = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
    if (toggleImg.src.match(openImg)) {toggleImg.src = closeImg} else {toggleImg.src = openImg};
    navbarLinks.classList.toggle('active')
})


document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]") 
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
        if (currentDropdown.childNodes[1].childNodes[1].src.match('images/icon-arrow-down.svg')) {
        currentDropdown.childNodes[1].childNodes[1].src = 'images/icon-arrow-up.svg'
        } else {currentDropdown.childNodes[1].childNodes[1].src = 'images/icon-arrow-down.svg'}        
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.childNodes[1].childNodes[1].src = 'images/icon-arrow-down.svg'
        dropdown.classList.remove('active')
    })
})