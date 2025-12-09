export function renderSideBar() {
  return `
    <img src="https://mendedhearts.org/wp-content/uploads/2023/07/MEN-InbMkt-06-23.jpg" alt="Pesto Pasta Side Dish" class="sidebar-img" />

    <div class="quote-sidebar">
      <h3>GOOD FOOD IS MADE WITH PATIENCE AND LOVE</h3>
    </div>

    <div class="follow-us">
      <h4>FOLLOW US</h4>
      <div class="social-icons">
        <a href="#" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        
        <a href="#" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>

        <a href="#" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a href="#" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
      </div>

      <div class="email-signup">
        <p>SIGN UP FOR EMAIL UPDATES</p>
        <form id="emailForm">
          <input class="name" type="text" name="name" placeholder="NAME" required />
          <input class="email" type="email" name="email" placeholder="EMAIL" required />
          <div id="error-message" style="color: red; display: none;"></div>
          <button type="button" class="btn submit-btn">SEND ME UPDATES</button>
        </form>
        
      </div>
    </div>
  `;
}

document.addEventListener("click", function (e) {
    const submit = e.target.closest(".submit-btn");
    if (!submit) return;

    e.preventDefault();

    const form = submit.closest("form");
    if (!form) return;

    const name = form.querySelector(".name").value.trim();
    const email = form.querySelector(".email").value.trim();
    const errorDiv = form.parentNode.querySelector("#error-message");

    errorDiv.style.display = "none";
    errorDiv.textContent = "";

    if (!name) {
        errorDiv.textContent = "Please enter your name.";
        errorDiv.style.display = "block";
        setTimeout(() => {
            errorDiv.style.display = "none";
            errorDiv.textContent = "";
        }, 3000);
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errorDiv.textContent = "Please enter a valid email address.";
        errorDiv.style.display = "block";
        setTimeout(() => {
            errorDiv.style.display = "none";
            errorDiv.textContent = "";
        }, 3000);
        return;
    }

    form.reset();
    alert("Thank you for subscribing!");
});

