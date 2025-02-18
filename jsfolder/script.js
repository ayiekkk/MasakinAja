function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  const hamburgerIcon = document.getElementById('hamburgerIcon');

  sideMenu.classList.toggle('open');

  
  hamburgerIcon.classList.toggle('active');
}

function search() {
  const query = document.getElementById('search').value;
  alert('Mencari: ' + query);
}
