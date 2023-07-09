// Select DOM Items which is the docucment object model. Basically all the UI structure, all the html tags, the atributes..
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
// Set Initial State of Menu

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach((item) => item.classList.add("show"));
    //set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
