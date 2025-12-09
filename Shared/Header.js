export function renderHeader() {
  const currentPage = window.location.pathname.split('/').pop();
  
  const recipePages = ['RecipePage.html', 'AllRecipePage.html', 'FoodPage.html' , 'CategoryRecipe.html'];
  
  const articlePages = ['ArticlePage.html', 'SingleArticle.html'];
  
  let headerHTML = `
      <nav class="navbar">
        <div class="nav-wrapper">
            <div class="navbar-brand">BronLe</div>
            <button class="hamburger" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="navbar-menu">
                <li><a href="MainPage.html" class="${currentPage === 'MainPage.html' ? 'active' : ''}">HOME</a></li>
                <li><a href="RecipePage.html" class="${recipePages.includes(currentPage) ? 'active' : ''}">RECIPE</a></li>
                <li><a href="ArticlePage.html" class="${articlePages.includes(currentPage) ? 'active' : ''}">ARTICLE</a></li>
                <li><a href="AboutUs.html" class="${currentPage === 'AboutUs.html' ? 'active' : ''}">ABOUT</a></li>
            </ul>
            <div class="modal-header" id="menu-modal" role="dialog" aria-labelledby="menu-title">
                <div class="modal-header-content">
                    <button class="close-btn" aria-label="Close menu">&times;</button>
                    <h2 id="menu-title" style="display: none;">Menu</h2>
                    <ul class="modal-menu">
                        <li><a href="MainPage.html" class="${currentPage === 'MainPage.html' ? 'active' : ''}">HOME</a></li>
                        <li><a href="RecipePage.html" class="${recipePages.includes(currentPage) ? 'active' : ''}">RECIPE</a></li>
                        <li><a href="ArticlePage.html" class="${articlePages.includes(currentPage) ? 'active' : ''}">ARTICLE</a></li>
                        <li><a href="AboutUs.html" class="${currentPage === 'AboutUs.html' ? 'active' : ''}">ABOUT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>  
  `;
  document.querySelector('.header-container').innerHTML = headerHTML;

  const hamburger = document.querySelector('.hamburger');
  const modal = document.getElementById('menu-modal');
  const closeBtn = document.querySelector('.close-btn');
  
  hamburger.addEventListener('click', () => {
    modal.classList.toggle('show');
  });


  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
}