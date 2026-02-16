// Favorites Management System
// Manages user's favorite animals with LocalStorage

// Get current user's email
function getCurrentUserEmail() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        return user.email;
    }
    return 'guest'; // For non-logged-in users
}

// Get all favorites data
function getAllFavorites() {
    const favoritesData = localStorage.getItem('animalFavorites');
    return favoritesData ? JSON.parse(favoritesData) : {};
}

// Get current user's favorites
function getUserFavorites() {
    const userEmail = getCurrentUserEmail();
    const allFavorites = getAllFavorites();
    return allFavorites[userEmail] || [];
}

// Save favorites for current user
function saveUserFavorites(favorites) {
    const userEmail = getCurrentUserEmail();
    const allFavorites = getAllFavorites();

    allFavorites[userEmail] = favorites;
    localStorage.setItem('animalFavorites', JSON.stringify(allFavorites));

    // Trigger custom event for UI updates
    window.dispatchEvent(new CustomEvent('favoritesUpdated', {
        detail: { count: favorites.length }
    }));
}

// Check if animal is favorited
function isFavorite(animalName) {
    const favorites = getUserFavorites();
    return favorites.includes(animalName);
}

// Add animal to favorites
function addToFavorites(animalName) {
    const favorites = getUserFavorites();

    if (!favorites.includes(animalName)) {
        favorites.push(animalName);
        saveUserFavorites(favorites);
        return true;
    }
    return false;
}

// Remove animal from favorites
function removeFromFavorites(animalName) {
    let favorites = getUserFavorites();
    const index = favorites.indexOf(animalName);

    if (index > -1) {
        favorites.splice(index, 1);
        saveUserFavorites(favorites);
        return true;
    }
    return false;
}

// Toggle favorite status
function toggleFavorite(animalName) {
    if (isFavorite(animalName)) {
        removeFromFavorites(animalName);
        return false; // Now not favorite
    } else {
        addToFavorites(animalName);
        return true; // Now favorite
    }
}

// Get favorites count
function getFavoritesCount() {
    return getUserFavorites().length;
}

// Get favorite animals data
function getFavoriteAnimals(animalsData) {
    const favorites = getUserFavorites();
    return animalsData.filter(animal => favorites.includes(animal.name));
}

// Clear all favorites for current user
function clearAllFavorites() {
    if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบสัตว์โปรดทั้งหมด?')) {
        saveUserFavorites([]);
        return true;
    }
    return false;
}

// Update favorites counter in navbar
function updateFavoritesCounter() {
    const counter = document.getElementById('favoritesCount');
    if (counter) {
        const count = getFavoritesCount();
        counter.textContent = count;
        counter.style.display = count > 0 ? 'inline-flex' : 'none';
    }
}

// Initialize favorites counter on page load
document.addEventListener('DOMContentLoaded', () => {
    updateFavoritesCounter();
});

// Listen for favorites updates
window.addEventListener('favoritesUpdated', () => {
    updateFavoritesCounter();
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getUserFavorites,
        isFavorite,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        getFavoritesCount,
        getFavoriteAnimals,
        clearAllFavorites
    };
}
