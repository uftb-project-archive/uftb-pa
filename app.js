
// TOGGLE BUTTON
let sidebar_toggle_button = document.getElementById('sidebar-toggle-btn');
let NavBar = document.querySelector('.header .topbar .topbar-mid');

sidebar_toggle_button.addEventListener('click', function(){
    NavBar.classList.toggle('show');
    sidebar_toggle_button.classList.toggle('rotate');
})