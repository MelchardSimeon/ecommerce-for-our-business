let currentCategoryIndex = 0; // Index for the category navigation
const categoryButtons = document.querySelectorAll('.catalog-navigation .tab'); // Select category buttons
const productSets = document.querySelectorAll('.product-set'); // Select all product sets
const totalCategories = productSets.length; // Total number of categories

// Function to show the current product set
function showCurrentCategory() {
    productSets.forEach((set, index) => {
        set.style.display = (index === currentCategoryIndex) ? 'block' : 'none'; // Show the current set, hide others
    });

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
    });
});

// Navigation buttons for next and previous
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function nextCategory() {
    currentCategoryIndex = (currentCategoryIndex + 1) % totalCategories; // Loop back to the start
    showCurrentCategory();
}

function prevCategory() {
    currentCategoryIndex = (currentCategoryIndex - 1 + totalCategories) % totalCategories; // Loop to the end
    showCurrentCategory();
}

// Add event listeners for the next and previous buttons
nextButton.addEventListener('click', nextCategory);
prevButton.addEventListener('click', prevCategory);

// Initial call to set the first product set visible
showCurrentCategory();
