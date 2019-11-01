/*
 * JavaScript for emmet.vim tutorial
 */
// Get menu button from DOM
const menuButton = document.querySelector(".header-menu");
// Binding menu button onClick event to toggle navbar height
menuButton.onclick = toggleMenuView;
// navbar expanded className
const classExpand = "expand";

function toggleMenuView(event) {
  // toggles the height of the navbar
  let navbar = this.parentNode.parentNode;
  console.log(navbar.className);
  navbar.className = navbar.className === "" ? classExpand : "";
}
