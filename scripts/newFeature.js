let currentCategoryIndex = 0; // Index for the category navigation
const categoryButtons = document.querySelectorAll('.catalog-navigation .tab'); // Select category buttons
const productSets = document.querySelectorAll('.product-set'); // Select all product sets
const totalCategories = productSets.length; // Total number of categories
const dots = document.querySelectorAll('.dot')

// Function to show the current product set
function showCurrentCategory() {
    productSets.forEach((set, index) => {
        set.style.display = (index === currentCategoryIndex) ? 'block' : 'none'; // Show the current set, hide others
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentCategoryIndex);
    })

    // Update the active class for buttons
    categoryButtons.forEach((button, index) => {
        button.classList.toggle('active', index === currentCategoryIndex);
    });
}

// Event listener for category buttons
categoryButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentCategoryIndex = index; // Set current category index
        showCurrentCategory(); // Show the selected category
        scrollToProductSet(); // Scroll to the product set after changing category
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentCategoryIndex = index;
        showCurrentCategory();
        scrollToProductSet();
    });
});

// Navigation buttons for next and previous
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function nextCategory() {
    currentCategoryIndex = (currentCategoryIndex + 1) % totalCategories; // Loop back to the start
    showCurrentCategory();
    scrollToProductSet(); // Scroll to the product set after changing category
}

function prevCategory() {
    currentCategoryIndex = (currentCategoryIndex - 1 + totalCategories) % totalCategories; // Loop to the end
    showCurrentCategory();
    scrollToProductSet(); // Scroll to the product set after changing category
}



// Function to scroll to the product set section
function scrollToProductSet() {
    const productSetSection = document.querySelector('.catalog-navigation'); // Select the product set section
    if (productSetSection) {
        const sectionTop = productSetSection.getBoundingClientRect().top + window.scrollY; // Get the top position relative to the viewport
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth' // Smooth scrolling
        });
    }
}

// Add event listeners for the next and previous buttons
nextButton.addEventListener('click', nextCategory);
prevButton.addEventListener('click', prevCategory);

// Initial call to set the first product set visible
showCurrentCategory();


// NEW FUNCTION TO SWIPE NAVIGATIONS TABS LEFT AND RIGHT 

const catalogNavigation = document.querySelector('.catalog-navigation');
let isDown = false;
let startX;
let scrollLeft;

const handleMove = (e, isTouch = false) => {
    if (!isDown) return;
    e.preventDefault();

    const x = (isTouch ? e.touches[0].pageX : e.pageX) - catalogNavigation.offsetLeft;
    const walk = (x - startX) * 1.5; // Fine-tune as needed
    catalogNavigation.scrollLeft = scrollLeft - walk;
};

catalogNavigation.addEventListener('mousedown', (e) => {
    isDown = true;
    catalogNavigation.classList.add('active');
    startX = e.pageX - catalogNavigation.offsetLeft;
    scrollLeft = catalogNavigation.scrollLeft;
});

catalogNavigation.addEventListener('mouseleave', () => {
    isDown = false;
    catalogNavigation.classList.remove('active');
});

catalogNavigation.addEventListener('mouseup', () => {
    isDown = false;
    catalogNavigation.classList.remove('active');
});

catalogNavigation.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    requestAnimationFrame(() => handleMove(e));
});

// Touch events for mobile devices
catalogNavigation.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - catalogNavigation.offsetLeft;
    scrollLeft = catalogNavigation.scrollLeft;
});

catalogNavigation.addEventListener('touchend', () => {
    isDown = false;
});

catalogNavigation.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    requestAnimationFrame(() => handleMove(e, true));
});
