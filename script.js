document.addEventListener('DOMContentLoaded', function () {
  const menuOptions = document.querySelectorAll('.menu-options a');
  const projectCards = document.querySelectorAll('.project-card');
  const profileName = document.getElementById('profile-name');
  const profileImg = document.getElementById('profile-img');

  function checkProfileActive() {
    if (profileName.classList.contains('active')) {
      profileImg.classList.add('active');
    } else {
      profileImg.classList.remove('active');
    }

    if (profileImg.classList.contains('active')) {
      profileName.classList.add('active');
    } else {
      profileName.classList.remove('active');
    }
  }

  menuOptions.forEach(option => {
    option.addEventListener('click', function (event) {
      event.preventDefault();

      // Remove 'active' class from all options
      menuOptions.forEach(option => {
        option.classList.remove('active');
      });

      // Add 'active' class to the clicked option
      this.classList.add('active');
      checkProfileActive();

      profileName.addEventListener('click', function() {
        this.classList.add('active');
        profileImg.classList.add('active');
        
      });

      profileImg.addEventListener('click', function() {
        this.classList.add('active');
        profileName.classList.add('active');
        
      });


      const filter = this.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });



});


