const SearchInput = document.getElementById("search-input");
const SearchIcon = document.getElementById("search");
const CancelIcon = document.getElementById("cancel-search");

SearchIcon.addEventListener('click', () => {
    // Hide the element
    document.getElementById("search").style.display = "none";
    document.getElementById("nav").style.display = "none";
    // Show the element
    document.getElementById("search-input").style.display = "block";
    document.getElementById("cancel-search").style.display = "block";
})

