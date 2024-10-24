// Function to open the modal
function openModal(fruit) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-info").textContent = `More information about ${fruit}.`;
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save the user's choice in localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Load theme from localStorage when the page loads
  window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Event listener for dark mode toggle button
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  
  // Close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  