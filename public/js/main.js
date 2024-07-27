document.addEventListener('DOMContentLoaded', () => {
  const contactUsButton = document.getElementById('contactUsButton');
  const contactForm = document.getElementById('contactForm');

  contactUsButton.addEventListener('click', () => {
    contactForm.style.display = 'block';
  });
});


// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});


// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Highlight the active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === '/')) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const reservationForm = document.getElementById('reservation-form');

  reservationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const customerName = document.getElementById('name').value;
    alert(`Hello, ${customerName}. Your table is reserved!`);
  });
});

