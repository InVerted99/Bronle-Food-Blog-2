import { recipes } from "../data/Recipe.js";
import {renderHeader} from "../scripts/Shared/Header.js"
import {renderFooter} from "../scripts/Shared/Footer.js"
import { getStars } from "./Utils/getStars.js";


let currentPage = 1;
const itemsPerPage = 20;
let currentRecipes = recipes;
let searchTerm = '';

function renderAllRecipePage() {

    renderHeader();
    renderFooter();

    const totalPages = Math.ceil(currentRecipes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const recipeForPage = currentRecipes.slice(startIndex, endIndex);

    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<a class="page ${currentPage === i ? "active" : ""}" data-page="${i}">${i}</a>`;
    }

    const backButtonHTML = searchTerm ? `<button id="back-button" class="back-button">Back</button>` : '';

    let RecipeHTML = `
        <div class="all-recipe-title">
            <img src="../images/All Recipe Icon.jpg" alt="">
            <h1>${searchTerm ? 'Search Results' : 'ALL RECIPE'}</h1>
        </div>


        <div class="search-section">
            <span id="search-icon"><i class="fas fa-search"></i></span>
            <input type="text" name="search-bar" id="search-bar"
                placeholder="Search by ingredient, cuisine, or dishes">
        </div>

        <div class="back-container">
            ${backButtonHTML}
        </div>


        <div class="recipe-grid">
            ${recipeForPage.map(recipe => `
                    <div class="card" data-recipe-id="${recipe.id}">
                        <img src="${recipe.mainImage}" alt="${recipe.title}" class="card-image">
                        <div class="card-body">
                            <div class="reviews">
                                <img class="stars" src="images/ratings/rating-${getStars(recipe.reviews.stars)}.png">
                                <span class="review-count">${recipe.reviews.count} Reviews / ${recipe.reviews.average} Average</span>
                            </div>
                            <h2 class="recipe-title">${recipe.title}</h2>
                        </div> 
                    </div>       
            `).join("")}
        </div>


        
        <section class="section">
            <div class="pagination">
                ${paginationHTML}
            </div>
        </section>`;
        

        document.querySelector(`.main`)
        .innerHTML = RecipeHTML;
}

document.addEventListener("click", function (e) {
    const pageBtn = e.target.closest(".page");
    if (!pageBtn) return;

    currentPage = parseInt(pageBtn.dataset.page);
    renderAllRecipePage();
});


document.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (!card) return;

    const id = card.dataset.recipeId;
    console.log(id);

    window.location.href = `FoodPage.html?id=${id}`;
});

document.addEventListener("click", function (e) {
    if (e.target.id === 'back-button') {
        searchTerm = '';
        currentRecipes = recipes;
        currentPage = 1;
        renderAllRecipePage();
    }
});

document.addEventListener("click", function (e) {
    if (e.target.id === 'search-icon' || e.target.closest('#search-icon')) {
        const inputValue = document.getElementById('search-bar').value.trim();
        if (inputValue === '') {
            return;
        }
        searchTerm = inputValue.toLowerCase();
        currentRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
        currentPage = 1;
        renderAllRecipePage();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.target.id === 'search-bar' && e.key === 'Enter') {
        const inputValue = e.target.value.trim();
        if (inputValue === '') {
            return;
        }
        searchTerm = inputValue.toLowerCase();
        currentRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
        currentPage = 1;
        renderAllRecipePage();
    }
});

renderAllRecipePage();
