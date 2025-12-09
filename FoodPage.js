import { recipes } from '../data/Recipe.js';
import { renderFooter } from './Shared/Footer.js';
import { renderHeader } from './Shared/Header.js';
import { renderSideBar } from './Shared/SideBar.js';
import { getStars } from "./Utils/getStars.js";

function renderFoodPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  let foodPageHTML = '';
  let currentRecipe;
  let commentsShown = 3;
  let comments = [];

  renderHeader();
  renderFooter();

  recipes.forEach(recipe => {
    if (recipe.id === id) {
      currentRecipe = recipe;
      comments = JSON.parse(localStorage.getItem(`comments_${id}`)) || recipe.comments.slice();
      foodPageHTML = `
        <div class="intro">
          <div class="info">
            <h1>${recipe.title}</h1>
            <div class="reviews">
              <img class="stars" src="images/ratings/rating-${getStars(recipe.reviews.stars)}.png">
              <span class="review-count">${recipe.reviews.count} Reviews / ${recipe.reviews.average} Average</span>
            </div>
            ${recipe.descriptions
              .map(desc => {
                return `
                  <p class="description">
                    ${desc}
                  </p>
                `;
              })
              .join("")}
            <button class="btn tutorial-btn">Watch Tutorial</button>
          </div>
          <img src="${recipe.mainImage}" alt="${recipe.title}" class="main-img" />
        </div>

        <div class="column-divider-container">
          <div class="single-column-container">
            <section class="ingredients-wrapper">
              <div class="ingredients">
                <h2 class="section-header">Ingredient</h2>

                <div class="ingredient-container">
                  ${recipe.ingredients.map(ingredient => {
                    return `
                      <div class="ingredient-category">
                        <h3>${ingredient.category}</h3>
                        <div class="ingredient-list">
                          ${ingredient.items.map(items => {
                            return `
                              <div><input type="checkbox"> ${items}</div>
                            `;
                          })
                          .join("")}
                        </div>
                      </div>
                    `;
                  })
                  .join("")}
                </div>
              </div>
            </section>

            <section class="nutrition-section single-column">
              <div class="nutrition-header-container">
                <h2 class="nutrition-header">Nutritional Information</h2>
                <p>Serving Size: ${recipe.nutrition.servingSize}</p>
                <p class="calories">Calories Per Serving: <strong>${recipe.nutrition.calories}</strong></p>
              </div>

              <div class="nutrition-grid">
                ${recipe.nutrition.items
                  .map(nutri => {
                    return `
                      <div>
                        <p>${nutri.label}</p>
                        <h4>${nutri.value}</h4>
                      </div>
                    `;
                  })
                  .join('')}
              </div>
            </section>

            <section class="video-section single-column">
              <h2>Cooking Video</h2>
              <p class="video-subtitle">Watch our latest recipe video.</p>

              <div class="video-wrapper">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Creamy Pesto Pasta with Shrimp" />
                <button aria-label="Play Video" class="play-button">&#9658;</button>
                <div class="video-text">${recipe.title}</div>
              </div>

              <div class="feedback-cta">
                <h2>
                  ${recipe.feedback.title}
                </h2>
                <p class="feedback-subtext">
                  ${recipe.feedback.text}
                </p>
              </div>
            </section>

            <section class="more-recipes single-column">
              <h3>More Recipes</h3>
              <div class="recipe-cards">
                ${recipe.moreRecipes.slice(0, 3).map(moreRecipe => {
                  return `
                    <div class="recipe-card card" data-recipe-id="${moreRecipe.id}">
                      <img src="${moreRecipe.mainImage}" alt="Brandon's Egg Roll Tacos" />
                      <h4>${moreRecipe.title}</h4>
                      <div class="reviews">
                        <img class="stars" src="images/ratings/rating-${getStars(moreRecipe.reviews.stars)}.png">
                        <span class="review-count">${moreRecipe.reviews.count} Reviews / ${moreRecipe.reviews.average} Average</span>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            </section>

            <section class="comments-section">
              <h3>LEAVE A COMMENT</h3>
              <form id="commentForm" class="comment-form">
                <input type="text" name="name" placeholder="NAME *" required />
                <input type="email" name="email" placeholder="EMAIL *" required />
                <textarea name="comment" rows="5" placeholder="COMMENT *" required></textarea>
                <div class="rating-input">
                  <label>RECIPE RATING</label>
                  <div class="stars-input-con">
                    <input type="radio" id="star1" name="rating" value="1" /><label for="star1">&#9734;</label>
                    <input type="radio" id="star2" name="rating" value="2" /><label for="star2">&#9734;</label>
                    <input type="radio" id="star3" name="rating" value="3" /><label for="star3">&#9734;</label>
                    <input type="radio" id="star4" name="rating" value="4" /><label for="star4">&#9734;</label>
                    <input type="radio" id="star5" name="rating" value="5" /><label for="star5">&#9734;</label>
                  </div>
                </div>
                <button type="submit" class="btn submit-comment-btn">POST COMMENT</button>
              </form>
            </section>

            <section class="comment-list">
              <h4>${comments.length} comments</h4>
              <div class="comment-con">
                ${comments.slice(0, commentsShown).map(comment => {
                  return `
                    <div class="comment">
                      <div class="avatar">&#128100;</div>
                      <div class="comment-content">
                        <div class="comment-author-con">
                          <p class="comment-author">${comment.author}</p>
                          <div class="comment-rating">
                            <h3>RECIPE RATING</h3> 
                            <img class="stars" src="images/ratings/rating-${getStars(comment.rating)}.png">
                          </div>
                        </div>
                        <p class="comment-text">
                          ${comment.text}
                        </p>
                        <button class="reply-btn">REPLY?</button>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
              <button class="load-more-btn">LOAD MORE COMMENTS</button>
            </section>
          </div>

          <div class="sidebar">
            ${renderSideBar()}
          </div>
        </div>
      `;
    }
  });

  document.querySelector('.container').innerHTML = foodPageHTML;

  function resetStarColors() {
    const starLabels = document.querySelectorAll('.stars-input-con label');
    starLabels.forEach(label => {
      label.style.color = '#2d3e12';
    });
  }

  function updateStarColors(selectedIndex) {
    const starLabels = document.querySelectorAll('.stars-input-con label');
    starLabels.forEach((label, index) => {
      if (index <= selectedIndex) {
        label.style.color = '#d77a11';
      } else {
        label.style.color = '#ddd';
      }
    });
  }

  resetStarColors();

  const starLabels = document.querySelectorAll('.stars-input-con label');
  starLabels.forEach((label, index) => {
    label.addEventListener('click', () => {
      const inputId = `star${5 - index}`;
      const input = document.getElementById(inputId);
      input.checked = true;

      updateStarColors(index);
    });
  });

  const loadMoreBtn = document.querySelector('.load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      if (commentsShown < comments.length) {
        commentsShown++;
        const commentCon = document.querySelector('.comment-con');
        const newCommentHTML = comments.slice(0, commentsShown).map(comment => {
          return `
            <div class="comment">
              <div class="avatar">&#128100;</div>
              <div class="comment-content">
                <div class="comment-author-con">
                  <p class="comment-author">${comment.author}</p>
                  <div class="comment-rating">RECIPE RATING 
                    <img class="stars" src="images/ratings/rating-${getStars(comment.rating)}.png">
                  </div>
                </div>
                <p class="comment-text">
                  ${comment.text}
                </p>
                <button class="reply-btn">REPLY?</button>
              </div>
            </div>
          `;
        }).join("");
        commentCon.innerHTML = newCommentHTML;
      }
    });
  }

  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(commentForm);
      const name = formData.get('name').trim();
      const email = formData.get('email').trim();
      const commentText = formData.get('comment').trim();
      const rating = formData.get('rating');
      
      if (!name || !email || !commentText || !rating) {
        alert('Please fill in all required fields and select a rating.');
        return;
      }
      
      const newComment = {
        author: name,
        text: commentText,
        rating: parseInt(rating)
      };
      
      comments.unshift(newComment);

      localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
      
      const commentCountEl = document.querySelector('.comment-list h4');
      if (commentCountEl) {
        commentCountEl.textContent = `${comments.length} comments`;
      }

      const commentCon = document.querySelector('.comment-con');
      const updatedCommentHTML = comments.slice(0, commentsShown).map(comment => {
        return `
          <div class="comment">
            <div class="avatar">&#128100;</div>
            <div class="comment-content">
              <div class="comment-author-con">
                <p class="comment-author">${comment.author}</p>
                <div class="comment-rating">RECIPE RATING 
                  <img class="stars" src="images/ratings/rating-${getStars(comment.rating)}.png">
                </div>
              </div>
              <p class="comment-text">
                ${comment.text}
              </p>
              <button class="reply-btn">REPLY?</button>
            </div>
          </div>
        `;
      }).join("");
      commentCon.innerHTML = updatedCommentHTML;
    
      commentForm.reset();
      resetStarColors();
    });
  }
}

document.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (!card) return;

  const id = card.dataset.recipeId;
  console.log(id);

  window.location.href = `FoodPage.html?id=${id}`;
});

renderFoodPage();
