document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button-right");
    const searchContainer = document.getElementById("search-container");
    const searchInput = document.getElementById("search-input");
    const submitSearchButton = document.getElementById("submit-search");

    // Toggle search input visibility
    searchButton.addEventListener("click", () => {
        if (searchContainer.style.display === "none" || searchContainer.style.display === "") {
            searchContainer.style.display = "flex"; // Change to your preferred display style
            searchInput.focus(); // Focus on the input field
        } else {
            searchContainer.style.display = "none";
        }
    });

    // Optional: Handle search submission
    submitSearchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            // Here you can handle the search logic, e.g., redirecting to a search results page
            console.log("Search query:", query);
            // Example: window.location.href = `/search?q=${encodeURIComponent(query)}`;
            searchInput.value = ""; // Clear the input field
            searchContainer.style.display = "none"; // Hide search input after submitting
        }
    });
});
