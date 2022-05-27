// Scroll
function onScroll() {
  if (scrollY == 0) {
    navigation.classList.remove("scroll");
  } else {
    navigation.classList.add("scroll");
  }
}

if (scrollY == 0) {
  navigation.classList.remove("scroll");
} else {
  navigation.classList.add("scroll");
}

// Menu
function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}
