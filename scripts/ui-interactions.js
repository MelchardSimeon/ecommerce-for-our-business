
  
// Get elements
const openSidebar = document.querySelector('.open-sidebar');
const sidebarMenu = document.querySelector('.sidebar-menu');
const closeSidebar = document.querySelector('#close-sidebar')
const overlay = document.querySelector('.overlay')
const isSidebarOpen = getComputedStyle(sidebarMenu).transform === 'none'; // Change this as per your needs


// Function to open the sidebar


openSidebar.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
    if (sidebarMenu.classList.contains('active')) {
        sidebarMenu.style.transform = 'translateX(0)';
        sidebarMenu.style.opacity = '1';
        overlay.style.display = 'block';

        document.body.style.overflow = 'hidden'
    } else {
        sidebarMenu.style.transform = 'translateX(-100%)';
        sidebarMenu.style.opacity = '0';
        overlay.style.display = 'none';

        document.body.style.overflow = '';
    }
});


closeSidebar.addEventListener('click', () => {
    sidebarMenu.style.transform = 'translateX(-100%)'
    sidebarMenu.style.opacity = "0" 

    overlay.style.display = 'none'      

    setTimeout(() => {
        overlay.style.opacity = '0';

        document.body.style.overflow = ''
    }, 300)
})

overlay.addEventListener('click', () => {
    sidebarMenu.style.transform = 'translate(-100%)'
    sidebarMenu.style.opacity = '0'

    overlay.style.display = 'none'

    setTimeout(() => {
        overlay.style.opacity = '0'
        
        document.body.style.overflow = '';
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
    autoSlideInterval = setInterval(nextImage, 5000)
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


// THE CODE BELOW ADDS AN ANIMATION WHEN SCROLLING PRODUCTS INTO VIEW

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// asdsada


