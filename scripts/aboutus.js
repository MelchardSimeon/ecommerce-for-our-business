const foundersCarousel = document.querySelector('.founders-carousel');
let isDown = false;
let startX;
let scrollLeft;

foundersCarousel.addEventListener('mousedown', (e) => {
    isDown = true;
    foundersCarousel.classList.add('active');
    startX = e.pageX - foundersCarousel.offsetLeft;
    scrollLeft = foundersCarousel.scrollLeft;
});

foundersCarousel.addEventListener('mouseleave', () => {
    isDown = false;
    foundersCarousel.classList.remove('active');
});

foundersCarousel.addEventListener('mouseup', () => {
    isDown = false;
    foundersCarousel.classList.remove('active');
});

foundersCarousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - foundersCarousel.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast
    foundersCarousel.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile devices
foundersCarousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - foundersCarousel.offsetLeft;
    scrollLeft = foundersCarousel.scrollLeft;
});

foundersCarousel.addEventListener('touchend', () => {
    isDown = false;
});

foundersCarousel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - foundersCarousel.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast
    foundersCarousel.scrollLeft = scrollLeft - walk;
});
