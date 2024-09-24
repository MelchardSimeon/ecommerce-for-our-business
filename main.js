
  
// Get elements
const openSidebar = document.querySelector('.open-sidebar');
const sidebarMenu = document.querySelector('.sidebar-menu');
const closeSidebar = document.querySelector('#close-sidebar')
const overlay = document.querySelector('.overlay')

// Function to open the sidebar

// openSidebar.addEventListener('click', () => {
//     if (sidebarMenu.style.display === 'flex') {
//         sidebarMenu.style.display = 'none'
//         overlay.style.display = 'none'
//     } else {
//         sidebarMenu.style.display = 'flex'
//          overlay.style.display = 'block'
//     }
// })

// closeSidebar.addEventListener('click', () => {
//     sidebarMenu.style.display = "none"
//     overlay.style.display= "none"
// })

// overlay.addEventListener("click", () => {
//     sidebarMenu.style.display = "none"
//     overlay.style.display = "none"
// })

openSidebar.addEventListener('click', () => {
    if (sidebarMenu.style.transform === 'translateX(-100%)') {

        sidebarMenu.style.transform = 'translateX(0)';
        sidebarMenu.style.opacity = '1';
        
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.style.opacity = '1'
        }, 10)
    } else {
        sidebarMenu.style.transform = 'translateX(-100%)';
        sidebarMenu.style.opacity = '0';

        overlay.style.display = 'none';

        setTimeout(() => {
            overlay.style.opacity = '0';
        }, 300)}
})

closeSidebar.addEventListener('click', () => {
    sidebarMenu.style.transform = 'translateX(-100%)'
    sidebarMenu.style.opacity = "0" 

    overlay.style.display = 'none'  

    setTimeout(() => {
        overlay.style.opacity = '0'
    }, 300)
})

overlay.addEventListener('click', () => {
    sidebarMenu.style.transform = 'translate(-100%)'
    sidebarMenu.style.opacity = '0'

    overlay.style.display = 'none'

    setTimeout(() => {
        overlay.style.opacity = '0'
    }, 300)
})


// THE JAVASCRIPT CODE BELOW IS FOR THE CAROUSEL FEATURE 

const carouselImages = document.querySelectorAll('.carousel-image')
const prevBtn = document.querySelector('.prev-button')
const nextBtn = document.querySelector('.next-button')

let currentIndex = 0;
let autoSlideInterval;

function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.classList.remove('active')
        img.style.display = 'none'
    })

    carouselImages[index].style.display = 'block'

    setTimeout(() => {
    carouselImages[index].classList.add('active')
    }, 20)
    
}

function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length
    showImage(currentIndex)
}

function prevImage() {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length
    showImage(currentIndex)
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 4000)
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval)
}

nextBtn.addEventListener('click', () => {
    stopAutoSlide()
    nextImage()
    startAutoSlide()
})

prevBtn.addEventListener('click', () => {
    stopAutoSlide()
    prevImage()
    startAutoSlide()
})


showImage(currentIndex);
startAutoSlide();
