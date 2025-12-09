import { articles } from '../data/Article.js'
import { renderFooter } from './Shared/Footer.js';
import { renderHeader } from './Shared/Header.js';
import { renderSideBar } from './Shared/SideBar.js';


function renderSingleArticlePage () {
    renderHeader();
    renderFooter();

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    let matchingArticle = '';
    let commentsShown = 3;
    let comments = [];

    articles.forEach(article => {
        if (article.id === id) {
            matchingArticle = article;
            comments = JSON.parse(localStorage.getItem(`article_comments_${id}`)) || article.comments.slice();
        }
    })

    let singleArticleHTML = `
    <div class="article-header-container">
      <h1>${matchingArticle.title}</h1>
      <p class="article-meta">
        By <strong>${matchingArticle.meta.author}</strong> &nbsp;&nbsp;|&nbsp;&nbsp; ${matchingArticle.meta.date} &nbsp;&nbsp;|&nbsp;&nbsp; ${matchingArticle.meta.category}
      </p>
      <img src="${matchingArticle.mainImage.src}" alt="${matchingArticle.mainImage.alt}" class="article-main-img" />
    </div>

    <div class="column-divider-container">
      <div class="single-column-container">

        <div class="article-content">
        </div>

        <div class="comments-section">
          <h3>LEAVE A COMMENT</h3>
              <form id="commentForm" class="comment-form">
                <input type="text" name="name" placeholder="NAME *" required />
                <input type="email" name="email" placeholder="EMAIL *" required />
                <textarea name="comment" rows="5" placeholder="COMMENT *" required></textarea>
                <button type="submit" class="btn submit-comment-btn">POST COMMENT</button>
              </form>
        </div>

        <div class="comment-list">
          <h4>${comments.length} comments</h4>
            <div class="comment-con">
              ${comments.slice(0, commentsShown).map(comment => {
                return `
                  <div class="comment">
                    <div class="avatar">&#128100;</div>
                    <div class="comment-content">
                      <div class="comment-author-con">
                        <p class="comment-author">${comment.author}</p>
                      </div>
                      <p class="comment-text">
                        ${comment.comment}
                      </p>
                      <button class="reply-btn">REPLY?</button>
                    </div>
                  </div>
                `
              }).join("")}
            </div>
            <button class="load-more-btn">LOAD MORE COMMENTS</button>
        </div>

      </div>

      <div class="sidebar">
        ${renderSideBar()}
      </div>
    </div>
    `;

    document.querySelector('.container').innerHTML = singleArticleHTML;

    renderArticleContent(matchingArticle);

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
                                </div>
                                <p class="comment-text">
                                    ${comment.comment}
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
            
            if (!name || !email || !commentText) {
                alert('Please fill in all required fields.');
                return;
            }
            
            const newComment = {
                author: name,
                comment: commentText
            };
            
            comments.unshift(newComment);
            
            localStorage.setItem(`article_comments_${id}`, JSON.stringify(comments));
            
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
                            </div>
                            <p class="comment-text">
                                ${comment.comment}
                            </p>
                            <button class="reply-btn">REPLY?</button>
                        </div>
                    </div>
                `;
            }).join("");
            commentCon.innerHTML = updatedCommentHTML;
            
            commentForm.reset();
        });
    }
}

function renderArticleContent(matchingArticle) {
  let articleHTML = `
    <p class="article-intro">${matchingArticle.intro}</p>
  `;

  matchingArticle.content.forEach(item => {
      if (item.type === 'step') {
          articleHTML += `
          <section class="article-step">
            <h2><i class="${item.icon}"></i> STEP ${item.number}: ${item.title}</h2>
          `;

          item.paragraphs.forEach(par => {
              articleHTML += `<p>${par}</p>`;
          });

          if (item.list) {
              articleHTML += `<ul>` +
                item.list.map(i => `<li><strong>${i.strong}</strong>${i.text}</li>`).join("") +
              `</ul>`;
          }

          if (item.image) {
              articleHTML += `
                <img src="${item.image.src}" alt="${item.image.alt}" class="article-step-img"/>
              `;
          }

          if (item.quote) {
              articleHTML += `
                <blockquote class="quote">“${item.quote}”</blockquote>
              `;
          }

          if (item.tip) {
              articleHTML += `
                <p class="tip"><i class="fa-solid fa-lightbulb"></i> Tip: ${item.tip}</p>
              `;
          }

          articleHTML += `</section>`;
      }
      else if (item.type === 'paragraph') {
          articleHTML += `<p>${item.text}</p>`;
      }
  });

  document.querySelector(".article-content").innerHTML = articleHTML;
}

renderSingleArticlePage();
