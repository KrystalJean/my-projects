document.addEventListener('DOMContentLoaded', function () {
  const menuOptions = document.querySelectorAll('.menu-options a');
  const projectCards = document.querySelectorAll('.project-card');

  menuOptions.forEach(option => {
    option.addEventListener('click', function (event) {
      event.preventDefault();

      // Remove 'active' class from all options
      menuOptions.forEach(option => {
        option.classList.remove('active');
      });

      // Add 'active' class to the clicked option
      this.classList.add('active');

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
