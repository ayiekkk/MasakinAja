function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  const hamburgerIcon = document.getElementById('hamburgerIcon');

  sideMenu.classList.toggle('open');

  
  hamburgerIcon.classList.toggle('active');
}
