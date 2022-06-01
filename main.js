// Scroll
onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// Menu
function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

// Scroll Reveal
ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
#home .head,
#home .content,
#home .content img,
#home .data,
#services .head,
#services .card,
#about .head,
#about .content,
#contact .head,
#contact .content`);
