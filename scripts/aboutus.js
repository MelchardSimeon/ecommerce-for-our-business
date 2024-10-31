const foundersCarousel = document.querySelector('.founders-carousel');
let isDown = false;
let startX;
let scrollLeft;

const handleMove = (e, isTouch = false) => {
    if (!isDown) return;
    e.preventDefault();

    const x = (isTouch ? e.touches[0].pageX : e.pageX) - foundersCarousel.offsetLeft;
    const walk = (x - startX) * 1.5; // Fine-tune as needed
    foundersCarousel.scrollLeft = scrollLeft - walk;
};

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
    requestAnimationFrame(() => handleMove(e));
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
    requestAnimationFrame(() => handleMove(e, true));
});
