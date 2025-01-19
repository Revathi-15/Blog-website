//03465d97f8e74619917d549b2458490e
const Api_key = "71146ebefc69425aa26e16e6e9e066d1";
const url = "https://newsapi.org/v2/everything?q=";
let currentLanguage = 'en';

document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById("template_card");
    const container = document.getElementById("cards-container");
    const searchText = document.getElementById("search-text");
    const searchButton = document.getElementById("search-button");
    const toggleButton = document.querySelector(".dark-mode-button");
    const logo = document.querySelector('.company-logo');
    // const languageSelect = document.getElementById("language-select");
    let darkMode = localStorage.getItem("darkMode") === "true";

    if (darkMode) {
        document.body.classList.add("dark-mode");
    }

    fetchNews("India");

    async function fetchNews(query) {
        try {
            const res = await fetch(`${url}${query}&apiKey=${Api_key}&language=${currentLanguage}`);
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.statusText}`);
            }
            const data = await res.json();
            if (data.articles.length === 0) {
                alert('No articles found');
            } else {
                bindData(data.articles);
            }
        } catch (error) {
            alert('Error fetching news: ' + error.message);
            console.error('Error fetching news:', error);
        }
    }

window.fetchNews=fetchNews;
    function bindData(articles){
        container.innerHTML = "";

        articles.forEach((article) => {
            if (!article.urlToImage) return;
            const clone_card = template.content.cloneNode(true);
            fillDataInCard(clone_card, article);
            container.appendChild(clone_card);
        });
    }

    function fillDataInCard(cln_card, article) {
        const nws_img = cln_card.querySelector('#news-img');
        const nws_title = cln_card.querySelector('#news-title');
        const nws_src = cln_card.querySelector('.news-source');
        const nws_descr = cln_card.querySelector('.news-des');

        nws_img.src = article.urlToImage;
        nws_title.innerHTML = article.title;
        nws_descr.innerHTML = article.description;

        const date = new Date(article.publishedAt).toLocaleString("en-UK", {
            timeZone: "Asia/Jakarta"
        });

        nws_src.innerHTML = `${article.source.name} ${date}`;
        cln_card.firstElementChild.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });
    }

    let currSelNav = null;
    function onNavItemClick(id) {
        fetchNews(id);
        clearSearchBar();
        if (currSelNav) {
            currSelNav.classList.remove("active");
        }
        const navItem = document.getElementById(id);
        navItem.classList.add("active");
        currSelNav = navItem;
    }

    searchButton.addEventListener("click", () => {
        handleSearch();
    });

    searchText.addEventListener("keypress", handleKeyPress);

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    function handleSearch() {
        const query = searchText.value.trim();
        if (!query) {
            alert('Please enter a valid search term');
            return;
        }
        fetchNews(query);
        currSelNav?.classList.remove("active");
        currSelNav = null;
    }

    function clearSearchBar() {
        searchText.value = '';
    }

    function toggleDarkMode() {
        darkMode = !darkMode;
        localStorage.setItem("darkMode", darkMode);
        document.body.classList.toggle('dark-mode', darkMode);
    }

    toggleButton.addEventListener("click", toggleDarkMode);
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => onNavItemClick(item.id));
    });

    function reload() {
        window.location.reload();
    }

    const reloadButton = document.querySelector('.reload-button');
    if (reloadButton) {
        reloadButton.addEventListener('click', reload);
    }

    if (logo) {
        logo.addEventListener('click', reload);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav-links ul li');
    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
    });
});
// function checkLoginStatus() {
//             const userInfo = document.getElementById('user-info');
//             const user = JSON.parse(localStorage.getItem('user')); // Assuming user data is stored in localStorage

//             if (user && user.FirstName) {
//                 userInfo.innerHTML = `
//                     <span>Welcome, ${user.firstName}</span>
//                     <button onclick="logout()">Logout</button>
//                 `;
//             } else {
//                 userInfo.innerHTML = `<a href="../login/index.html">Login</a>`;
//             }
//         }

//         // Function to handle logout
//         function logout() {
//             localStorage.removeItem('user');
//             window.location.reload(); // Reload the page to update the UI
//         }

//         checkLoginStatus();

        