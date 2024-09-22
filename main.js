
  
// Get elements
const openSidebar = document.querySelector('.open-sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const sidebarMenu = document.querySelector('.sidebar-menu');



// Function to open the sidebar
openSidebar.addEventListener('click', () => {
    if (sidebarMenu.style.display === 'flex') {
        sidebarMenu.style.display = 'none'
    } else {
        sidebarMenu.style.display = 'flex'
    } //show the sidebar
})

// Function to close the sidebar
closeSidebar.addEventListener('click', () => {
    sidebarMenu.style.display = 'none'; // Hide the sidebar
});
