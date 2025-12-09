export function renderFooter () {
  let footerHTML = `
    <div class="footer-container">
      <div class="footer-desc">
        <h3 class="footer-brand">Bronle</h3>
        <p class="footer-desc">
        Discover new recipes, explore diverse cuisines, and celebrate the joy of food with us as we cook, learn, and share together.
        </p>

        <div class="social-icons-footer">
          <a href="" class="social-icon-footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          
          <a href="" class="social-icon-footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>

          <a href="" class="social-icon-footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="" class="social-icon-footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-links">
        <div>
          <h5>Pages</h5>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Food Blog</a></li>
            <li><a href="AboutUs.html">About</a></li>
          </ul>
        </div>

        <div>
          <h5>Recipes</h5>
          <ul>
            <li><a href="RecipePage.html">Browse Recipes</a></li>
            <li><a href="AllRecipePage.html">Recipe Page</a></li>
            <li><a href="#">Submit Recipe</a></li>
          </ul>
        </div>

      </div>
    </div>

    <p class="copyright">© Copyright 2025 by Bronic Foods. All Rights Reserved</p>
  `

  document.querySelector('.footer')
    .innerHTML = footerHTML;
}