const hamburger = document.querySelector('#hamburgerIcon');

hamburger.addEventListener('click', function () {

  console.log('aktif');

  const sideMenu = document.getElementById('sideMenu');
  const hamburgerIcon = document.getElementById('hamburgerIcon');

  sideMenu.classList.toggle('open');

  hamburgerIcon.classList.toggle('active');
<<<<<<< HEAD
});
=======
});
>>>>>>> 1c5ed299da688c08793f662f82faa4d038fa2d50
