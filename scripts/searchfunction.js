// document.addEventListener("DOMContentLoaded", () => {
//     const searchButton = document.getElementById("search-button-right");
//     const searchContainer = document.getElementById("search-container");
//     const searchInput = document.getElementById("search-input");
//     const submitSearchButton = document.getElementById("submit-search");

//     // Toggle search input visibility
//     searchButton.addEventListener("click", () => {
//         if (searchContainer.style.display === "none" || searchContainer.style.display === "") {
//             searchContainer.style.display = "flex"; // Change to your preferred display style
//             searchInput.focus(); // Focus on the input field
//         } else {
//             searchContainer.style.display = "none";
//         }
//     });

//     // Optional: Handle search submission
//     submitSearchButton.addEventListener("click", () => {
//         const query = searchInput.value.trim();
//         if (query) {
//             // Here you can handle the search logic, e.g., redirecting to a search results page
//             console.log("Search query:", query);
//             // Example: window.location.href = `/search?q=${encodeURIComponent(query)}`;
//             searchInput.value = ""; // Clear the input field
//             searchContainer.style.display = "none"; // Hide search input after submitting
//         }
//     });
// });


// Sample data for demonstration (replace with your actual data)
const products = [
    { name: 'Sunflower Mini Pot', category: 'Mini Pots' },
    { name: 'One Piece Set', category: 'Bouquets' },
    { name: 'Customized Keychain', category: 'Keychains' },
    // Add more products as needed
];

// Show or hide the search container
const searchButton = document.getElementById('search-button-right');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const submitSearch = document.getElementById('submit-search');

searchButton.addEventListener('click', () => {
    if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
        searchContainer.style.display = 'flex';
        searchInput.focus();
    } else {
        searchContainer.style.display = 'none';
    }
});

// Search functionality
submitSearch.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const results = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displaySearchResults(results);
});

// Function to display search results
function displaySearchResults(results) {
    // Clear previous results if needed
    // Here you might want to create a dedicated area for displaying results
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results'; // Add styles for this class in CSS
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item'; // Style this class in CSS
            resultItem.textContent = result.name; // Display product name
            resultsContainer.appendChild(resultItem);
        });
    }

    // Append results to the body or a specific container
    document.body.appendChild(resultsContainer); // Adjust as needed
}
