import { recipes } from "../data/Recipe.js";
import {renderHeader} from "../scripts/Shared/Header.js"
import {renderFooter} from "../scripts/Shared/Footer.js"
import { renderLongCta } from "./Shared/LongCta.js";
import { getStars } from "./Utils/getStars.js";
import { categories } from "../data/Category.js";


const recipeCategories = [
  {
    title: "POPULAR CATEGORIES",
    list: [
      { id: "cat-1", name: "Quick and Easy", url: "#" },
      { id: "cat-8", name: "Soups", url: "#" }, // Soup
      { id: "", name: "Tacos", url: "#" },
      { id: "", name: "Vegan", url: "#" },
      { id: "", name: "Kid-Friendly", url: "#" },
      { id: "", name: "Salad", url: "#" },
      { id: "", name: "Pasta", url: "#" },
      { id: "cat-5", name: "Instant Pot", url: "#" }
    ]
  },
  {
    title: "RECIPE BY MEAL TYPE",
    list: [
      { id: "", name: "Appetizers", url: "#" },
      { id: "cat-6", name: "Lunch", url: "#" },
      { id: "cat-2", name: "Dinner", url: "#" },
      { id: "", name: "Breakfast", url: "#" },
      { id: "", name: "Snacks", url: "#" },
      { id: "cat-7", name: "Desserts", url: "#" },
      { id: "", name: "Drinks", url: "#" }
    ]
  },
  {
    title: "RECIPE BY COURSE",
    list: [
      { id: "", name: "Appetizers", url: "#" },
      { id: "", name: "Main Dishes", url: "#" },
      { id: "", name: "Baking", url: "#" },
      { id: "", name: "Sauces", url: "#" },
      { id: "cat-8", name: "Soups", url: "#" },
      { id: "", name: "Salads", url: "#" },
      { id: "", name: "Snacks", url: "#" },
      { id: "", name: "Sides", url: "#" },
      { id: "cat-7", name: "Desserts", url: "#" }
    ]
  },
  {
    title: "RECIPE BY DIET",
    list: [
      { id: "", name: "Dairy-Free", url: "#" },
      { id: "", name: "Gluten-Free", url: "#" },
      { id: "", name: "Kid-Friendly", url: "#" },
      { id: "cat-3", name: "Vegetarian", url: "#" },
      { id: "", name: "Sugar-Free", url: "#" },
      { id: "", name: "Low-Carbs", url: "#" },
      { id: "cat-4", name: "Healthy", url: "#" }
    ]
  }
];


function renderRecipePage () {
    let featuredRecipeCounter = 12;
    let categoryRecipes = 3;

    renderHeader();
    renderFooter();

    let recipePage = `
        <div class="hero-container">
            <h1 class="hero-title">Recipes</h1>
            <p class="hero-description">We’ve organized these recipes every way we could think of so you don't have to!
                Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter
                how you browse, we’re sure you’ll find just what you were looking for.</p>
            <div class="search-section">
                <span id="search-icon"><i class="fas fa-search"></i></span>
                <input type="text" name="search-bar" id="search-bar"
                    placeholder="Search by ingredient, cuisine, or dishes">
            </div>
        </div>

        <section class="featured-recipes">
            <h2 class="featured-title">Featured Recipes</h2>
            <p class="featured-description">Discover our featured recipe — a delicious mix of flavor, simplicity, and
                inspiration for every home cook.</p>
            <hr>

            <div class="recipe-cards">
                ${recipes.map(recipe => {
                    if(featuredRecipeCounter > 0){
                        featuredRecipeCounter--;
                        return `
                            <div class="card" data-recipe-id="${recipe.id}">
                                <img src="${recipe.mainImage}" alt="${recipe.title}" class="image-recipe">
                                <div class="card-description">
                                    <h3 class="recipe-title">${recipe.title}</h3>
                                    <div class="reviews">
                                        <img class="stars" src="images/ratings/rating-${getStars(recipe.reviews.stars)}.png">
                                        <span class="review-count">${recipe.reviews.count} Reviews / ${recipe.reviews.average} Average</span>
                                    </div>
                                </div>
                            </div>`;
                    };
                }).join("")}    
                </div>
            <a href="AllRecipePage.html" class="all-recipe-btn">VIEW ALL RECIPES</a>
        </section>



        <section class="subscription-section">
            ${renderLongCta()}
        </section>

        <section class="category-section">
            ${recipeCategories.map(category =>{
                if(categoryRecipes > 0){
                    categoryRecipes--;

                    return`
                        <div class="category-wrapper">
                            <div class="category-titles">
                                <h2 class="category-title">${category.title}</h2>
                                <hr>
                            </div>

                            <ul class="category-list">
                            ${category.list.map(item => {
                                return `
                                <li data-category-id="${item.id}" class="category"><a href="${item.url}">${item.name}</a></li>
                                `;
                            }).join("")}
                            </ul>
                        </div>
                    `;
                };
            }).join("")}
            
        <!-- Modal for Search Results -->
        <div id="search-modal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>Search Results</h2>
                <div class="modal-recipe-grid">
                    <!-- Recipes will be populated here -->
                </div>
            </div>
        </div>
        `;
    document.querySelector(`.main`).innerHTML = recipePage;
}

document.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (!card) return;

    const id = card.dataset.recipeId;
    console.log(id);

    window.location.href = `FoodPage.html?id=${id}`;
});


function performSearch() {
    const inputValue = document.getElementById('search-bar').value.trim();
    if (inputValue === '') {
        return;
    }
    const searchTerm = inputValue.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
    
    const modalGrid = document.querySelector('.modal-recipe-grid');
    modalGrid.innerHTML = filteredRecipes.map(recipe => `
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
    `).join("");
    
    document.getElementById('search-modal').style.display = 'block';
}

document.addEventListener("click", function (e) {
    if (e.target.id === 'search-icon' || e.target.closest('#search-icon')) {
        performSearch();
    }
});


document.addEventListener('keydown', function(e) {
    if (e.target.id === 'search-bar' && e.key === 'Enter') {
        performSearch();
    }
});

document.addEventListener("click", function (e) {
    const modal = document.getElementById('search-modal');
    if (e.target.classList.contains('close-modal') || e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("click", function (e) {
    const categoryLi = e.target.closest(".category");
    if (!categoryLi) return;

    e.preventDefault();

    const categoryId = categoryLi.dataset.categoryId;

    console.log(categoryId)
    const category = categories.find(cat => cat.id === categoryId);

    if (category) {
        window.location.href = `CategoryRecipe.html?id=${category.id}`;
    }
});

renderRecipePage();
