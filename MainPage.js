import { recipes } from "../data/Recipe.js";
import { articles } from "../data/Article.js";
import { categories } from "../data/Category.js";
import {renderHeader} from "../scripts/Shared/Header.js";
import {renderFooter} from "../scripts/Shared/Footer.js";
import { renderLongCta } from "./Shared/LongCta.js";
import { getStars } from "./Utils/getStars.js";

let articleStart = 0;
let articleEnd = 3;

function renderMainPage () {
  renderHeader();
  renderFooter();

  let mainPageHTML = `
      <section class="hero">
        <div class="hero-content">
          <h1>Discover Recipes,<br> Master Cooking.<br> Love every Bite</h1>
          <a href="RecipePage.html" class="hero-btn">View Recipe</a>
          <a href="ArticlePage.html" class="hero-btn">View Articles</a>
        </div>

        <div class="hero-img">
          <img src="./images/Hero.png" alt="Hero Dish">
        </div>
      </section>



      <section class="featured">
        <h2>Featured Recipe</h2>
        <div class="featured-grid">
          ${recipes.slice(0, 8).map(recipe => `
            <div class="card" data-recipe-id="${recipe.id}">
              <img src="${recipe.mainImage}" alt="${recipe.title}"/>
              <div class="card-content">
                <h3>${recipe.title}</h3>
                <div class="reviews">
                  <img class="stars" src="images/ratings/rating-${getStars(recipe.reviews.stars)}.png">
                  <span class="review-count">${recipe.reviews.count} Reviews / ${recipe.reviews.average} Average</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <div class="search-view-container">
        <a href="AllRecipePage.html" class="view-all">VIEW ALL RECIPE</a>
      </div>

      <section class="categories">
        <h2>Categories</h2>
        <div class="cat-grid">
          ${categories.map(cat => `
            <div class="cat" data-category-id="${cat.id}">
              <img src="${cat.mainImage}">
              <p>${cat.title}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="subscription-section">
          ${renderLongCta()}
      </section>

      <section class="articles">
        <h2>Articles</h2>
          ${articles.slice(articleStart, articleEnd).map(article => `
            <div class="article-box" data-article-id="${article.id}">
              <img src="${article.mainImage.src}">
                <div>
                  <h3>${article.title}</h3>
                  <p>${article.intro}</p>
                  <h5>Continue Reading</h5>
              </div>
            </div>
          `).join("")}
        <button class="view-more">VIEW MORE ARTICLES</button>
      </section>
  `;

  document.querySelector('.main').innerHTML = mainPageHTML;
}

renderMainPage();

document.addEventListener("click", function (e) {
  const more = e.target.closest(".view-more");
  if (!more) return;

  articleEnd ++;

  renderMainPage();
});

document.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (!card) return;

    const id = card.dataset.recipeId;
    console.log(id);

    window.location.href = `FoodPage.html?id=${id}`;
});

document.addEventListener("click", function (e) {
    const category = e.target.closest(".cat");
    if (!category) return;

    const id = category.dataset.categoryId;
    console.log(id);

    window.location.href = `categoryRecipe.html?id=${id}`;
});

document.addEventListener("click", function (e) {
    const pageBtn = e.target.closest(".hero-btn");
    if (!pageBtn) return;

    const html = pageBtn.textContent;

    // const id = category.dataset.categoryId;
    console.log(html);

    // window.location.href = `categoryRecipe.html?id=${id}`;
});


document.addEventListener("click", function (e) {
    const articleBox = e.target.closest(".article-box");
    if (!articleBox) return;

    const id = articleBox.dataset.articleId;
    console.log(id);

    window.location.href = `SingleArticle.html?id=${id}`;
});

