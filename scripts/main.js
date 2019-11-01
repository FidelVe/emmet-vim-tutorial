/*
 * JavaScript for emmet.vim tutorial
 */
// Get menu button from DOM
const menuButton = document.querySelector("#header-menu");
// Binding menu button onClick event to toggle navbar height
menuButton.onclick = toggleMenuView;
// navbar expanded className
const classExpand = "expand";
const classOpen = "open";

function toggleMenuView(event) {
  // toggles the height of the navbar and the image in the button
  let navbar = this.parentNode.parentNode;
  navbar.className = navbar.className === "" ? classExpand : "";
  menuButton.className = menuButton.className === "" ? classOpen : "";
}
