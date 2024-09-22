
  
// Get elements
const openSidebar = document.querySelector('.open-sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const navigationLinks = document.querySelector('.navigation-links');

// Function to open the sidebar
openSidebar.addEventListener('click', () => {
    navigationLinks.style.display = 'flex'; // Show the sidebar
});

// Function to close the sidebar
closeSidebar.addEventListener('click', () => {
    navigationLinks.style.display = 'none'; // Hide the sidebar
});
