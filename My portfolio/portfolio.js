
  // Scroll to Top Button
  const scrollButton = document.querySelector('.scroll-button');

  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };

  scrollButton.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // Responsive Menu
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const cancelBtn = document.querySelector('.cancel-btn');

  menuBtn.addEventListener('click', function() {
    menu.style.display = "block";
  });

  cancelBtn.addEventListener('click', function() {
    menu.style.display = "none";
  });

