//form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      if (name === '' || email === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
      }
    });
  });
  // modal
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // Close modal when clicking outside of the modal content
  window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
  }
  