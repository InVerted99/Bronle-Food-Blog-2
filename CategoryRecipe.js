import { renderHeader } from "./Shared/Header.js";
import { renderFooter } from "./Shared/Footer.js";
import { recipes } from "../data/Recipe.js";
import { categories } from "../data/Category.js";
import { getStars } from "./Utils/getStars.js";


let currentPage = 1;

function renderCategoryRecipe() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    let matchingCategory = '';

    categories.forEach(cat => {
        if (cat.id === id) {
            matchingCategory = cat;
        }
    });

    let featuredRecipeCounter = 4;

    let itemsPerPage = 12;
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    renderHeader();
    renderFooter();


    const categoryRecipes = recipes.filter(recipe => recipe.category === matchingCategory.title);
    const totalPages = Math.ceil(categoryRecipes.length / itemsPerPage);
    currentPage = Math.min(currentPage, totalPages) || 1;

    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = startIndex + itemsPerPage;

    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<a class="page ${currentPage === i ? "active" : ""}" data-page="${i}">${i}</a>`;
    }

    const featuredRecipes = categoryRecipes.slice(0, 4);

let categoryRecipeHTML = `
    <header class="hero">
        <div class="hero-inner">
            <img class="hero-image" src="${matchingCategory.mainImage}" alt="Hero dish" />
            <div class="hero-text">
                <h1>${matchingCategory.title}</h1>
                <p>${matchingCategory.description}</p>
            </div>
        </div>
    </header>

    <h2 class="section-title">Featured ${matchingCategory.title} Recipes</h2>

    <div class="cards featured-cards">
        ${featuredRecipes.map(recipe => `
            <div class="card" data-title="${recipe.title}">
                <img src="${recipe.mainImage}" alt="${recipe.title}" />
                <div class="card-body">
                    <div class="reviews">
                        <img class="stars" src="images/ratings/rating-${getStars(recipe.reviews.stars)}.png">
                        <span class="review-count">${recipe.reviews.count} Reviews / ${recipe.reviews.average} Average</span>
                    </div>
                    <h3>${recipe.title}</h3>
                </div>
            </div>
        `).join("")}
    </div>

    <section class="section">
        <h2 class="section-title section-title--icon">
            <img src="/SOURCE/Purchase Order.png" alt="">
            All ${matchingCategory.title} Recipes
        </h2>

        <div class="cards grid-cards">
            ${categoryRecipes
                .slice(startIndex, endIndex)
                .map(recipe => `
                <article class="card">
                    <img src="${recipe.mainImage}" alt="${recipe.title}" />
                    <div class="card-body">
                    <div class="reviews">
                        <img class="stars" src="images/ratings/rating-${getStars(recipe.reviews.stars)}.png">
                        <span class="review-count">${recipe.reviews.count} Reviews / ${recipe.reviews.average} Average</span>
                    </div>
                    <h3>${recipe.title}</h3>
                    </div>
                </article>
                `).join("")}
        </div>

        <div class="pagination">
            ${paginationHTML}
        </div>
    </section>
`;

    document.querySelector('.category-recipe-container').innerHTML = categoryRecipeHTML;
}

document.addEventListener("click", function (e) {
    const pageBtn = e.target.closest(".page");
    if (!pageBtn) return;

    currentPage = parseInt(pageBtn.dataset.page);
    renderCategoryRecipe();
});

document.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (!card) return;

    const recipeTitle = card.querySelector("h3").textContent;

    console.log("Card clicked:", recipeTitle);

    window.location.href = `recipe.html?title=${encodeURIComponent(recipeTitle)}`;
});

renderCategoryRecipe();