const menu = document.getElementById('menu')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const search = document.getElementById('search')
const logo = document.getElementById('logo')

function showMenu() {
  menu.style.display = "inline-block"
  close.style.display = "block"
  hamburger.style.display = "none"
}

function hideMenu(){
  menu.style.display = "none"
  close.style.display = "none"
  hamburger.style.display = "flex"
}

hamburger.addEventListener("click", showMenu)
close.addEventListener("click", hideMenu)

// For cleaning out any script injection attacks

var regex = /(<([^>]+)>)/ig; // Maybe don't need this
var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};    

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}