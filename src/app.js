import './scss/app.scss';

function init() {
  window.onscroll = function() {
    stickyNav();
  };

  const navbarToggler = document.querySelector('#navbar-toggler-bt');
  if (navbarToggler) {
    navbarToggler.addEventListener('click', function(e) {
      const menu = document.querySelector('#menu');
      menu.classList.toggle('expanded');

      if ( menu.classList.contains('expanded') ) {
        console.log(menu.scrollHeight);
        menu.style.maxHeight = `${menu.scrollHeight}px`;
      } else {
        menu.style.maxHeight = '0px';
      }
    });
  }

  const sCards = document.querySelectorAll(".s-card");
	sCards.forEach(scard => {
	  scard.addEventListener("mouseover", function () {
      addInactives(sCards);
      scard.classList.remove('inactive');
      scard.classList.add('active');
    });

    scard.addEventListener("mouseout", function () {
      removeInactives(sCards);
      removeActives(sCards);
    });
  });
}

function addInactives (sCards) {
  sCards.forEach(scard => {
    scard.classList.add('inactive');
  });
}

function removeInactives (sCards) {
  sCards.forEach(scard => {
    scard.classList.remove('inactive');
  });
}

function removeActives (sCards) {
  sCards.forEach(scard => {
    scard.classList.remove('active');
  });
}

// Add the sticky class to the header when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function stickyNav() {
  var header = document.querySelector("header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.addEventListener('DOMContentLoaded', init);