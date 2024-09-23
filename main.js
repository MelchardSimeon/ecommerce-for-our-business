
  
// Get elements
const openSidebar = document.querySelector('.open-sidebar');
const sidebarMenu = document.querySelector('.sidebar-menu');
const closeSidebar = document.querySelector('#close-sidebar')
const overlay = document.querySelector('.overlay')



// Function to open the sidebar

openSidebar.addEventListener('click', () => {
    if (sidebarMenu.style.display === 'flex') {
        sidebarMenu.style.display = 'none'
        overlay.style.display = 'none'
    } else {
        sidebarMenu.style.display = 'flex'
         overlay.style.display = 'block'
    }

})

closeSidebar.addEventListener('click', () => {
    sidebarMenu.style.display = "none"
    overlay.style.display= "none"
})

overlay.addEventListener("click", () => {
    sidebarMenu.style.display = "none"
    overlay.style.display = "none"
})