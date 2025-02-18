const hamburger = document.getElementsByClassName('hamburger')[0];

hamburger.addEventListener('click', function () {

  const sideMenu = document.getElementById('sideMenu');
  const hamburgerIcon = document.getElementById('hamburgerIcon');

  sideMenu.classList.toggle('open');

  hamburgerIcon.classList.toggle('active');
});
