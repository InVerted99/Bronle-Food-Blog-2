import { articles } from "../data/Article.js";
import {renderHeader} from "../scripts/Shared/Header.js";
import {renderFooter} from "../scripts/Shared/Footer.js";

let currentPage = 1;
const itemsPerPage = 6;

function renderArticlePage() {
    renderHeader();
    renderFooter();

    document.querySelector(".article-explorer").innerHTML = `
        <div class="container">
            <h1>Explore Articles</h1>
            <p class="subtitle">Discover delicious articles that inspire your culinary journey.</p>
            <div class="articles-grid"></div>
            <div class="pagination"></div>
        </div>
    `;

    renderPage();
}

function renderPage() {
    const totalPages = Math.ceil(articles.length / itemsPerPage);
    currentPage = Math.min(currentPage, totalPages) || 1;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentArticles = articles.slice(start, end);

    document.querySelector(".articles-grid").innerHTML = currentArticles
        .map(article => `
            <div class="article-card" data-article-id="${article.id}">
                <img src="${article.mainImage.src}" alt="${article.title}">
                <div class="article-text" >
                    <h3>${article.title}</h3>
                    <p class="article-desc">${article.desc}</p>
                    <span class="tag">${article.meta.category}</span>
                    <p class="author">${article.meta.author}</p>
                </div>
            </div>
        `).join("");

    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<a class="page ${currentPage === i ? "active" : ""}" data-page="${i}">${i}</a>`;
    }
    document.querySelector(".pagination").innerHTML = paginationHTML;
}

document.addEventListener("click", function (e) {
    const pageBtn = e.target.closest(".page");
    if (!pageBtn) return;
    currentPage = parseInt(pageBtn.dataset.page);
    renderPage();
});


document.addEventListener("click", function (e) {
    const articleBox = e.target.closest(".article-card");
    if (!articleBox) return;

    const id = articleBox.dataset.articleId;
    console.log(id);

    window.location.href = `SingleArticle.html?id=${id}`;
});

renderArticlePage();
