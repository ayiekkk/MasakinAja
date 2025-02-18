const hamburger = document.querySelector('#hamburgerIcon');

hamburger.addEventListener('click', function () {

  console.log('aktif');

  const sideMenu = document.getElementById('sideMenu');
  const hamburgerIcon = document.getElementById('hamburgerIcon');

  sideMenu.classList.toggle('open');

  hamburgerIcon.classList.toggle('active');
});
