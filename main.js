// Scroll
function onScroll() {
  if (scrollY == 0) {
    navigation.classList.remove('scroll');
  } else {
    navigation.classList.add('scroll');
  }
}

if (scrollY == 0) {
  navigation.classList.remove('scroll');
} else {
  navigation.classList.add('scroll');
}

// Menu
function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 700
}).reveal(`
#home .head,
#home .content,
#home .content img,
#home.data,
#services .head,
#services .card,
#about .head,
#about .content,
#about .content img,
#contact .head,
#contact .content,
#contact .content img,
footer`);