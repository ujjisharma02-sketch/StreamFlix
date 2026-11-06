// ==========================================
// STREAMFLIX - COMPLETE FRONTEND JAVASCRIPT
// File name: script.js
// ==========================================


// 1. MOVIE DATA
const movies = [
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.7,
        type: "movie",
        description: "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        trailer: "zSWdZVtXT7E"
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        type: "movie",
        description: "A skilled thief enters people's dreams to steal secrets and faces his most difficult mission.",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        trailer: "YoHD9XEInc0"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        type: "movie",
        description: "Batman faces a dangerous criminal who wants to create chaos in Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
        trailer: "EXeTwQWrcwY"
    },
    {
        id: 4,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        type: "movie",
        description: "The Avengers unite for one final mission to restore balance to the universe.",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        trailer: "TcMBFSGVi1c"
    },
    {
        id: 5,
        title: "Spider-Man: No Way Home",
        year: 2021,
        genre: "Action",
        rating: 8.2,
        type: "movie",
        description: "Peter Parker asks for help when his identity creates unexpected problems.",
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        trailer: "JfVOs4VSpmA"
    },
    {
        id: 6,
        title: "Dune: Part Two",
        year: 2024,
        genre: "Adventure",
        rating: 8.5,
        type: "movie",
        description: "Paul Atreides joins the Fremen people on a journey of destiny and survival.",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        trailer: "Way9Dexny3w"
    },
    {
        id: 7,
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama",
        rating: 8.3,
        type: "movie",
        description: "The story of scientist J. Robert Oppenheimer and his work during a historic period.",
        poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        trailer: "bK6ldnjE3Y0"
    },
    {
        id: 8,
        title: "The Batman",
        year: 2022,
        genre: "Action",
        rating: 7.8,
        type: "movie",
        description: "Batman investigates corruption and a series of mysterious crimes in Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
        trailer: "mqqft2x_Aa4"
    },
    {
        id: 9,
        title: "Joker",
        year: 2019,
        genre: "Drama",
        rating: 8.4,
        type: "movie",
        description: "A troubled comedian struggles to find his place in a city that ignores him.",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        trailer: "zAGVQLHvwOY"
    },
    {
        id: 10,
        title: "Coco",
        year: 2017,
        genre: "Animation",
        rating: 8.4,
        type: "movie",
        description: "A young musician enters a colourful world and discovers the importance of family.",
        poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
        trailer: "Rvr68u6k5sI"
    },
    {
        id: 11,
        title: "Finding Nemo",
        year: 2003,
        genre: "Animation",
        rating: 8.2,
        type: "movie",
        description: "A father fish travels across the ocean to find his missing son.",
        poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/2qAgGeYdLjelOEqjW9FYvPHpplC.jpg",
        trailer: "wZdpNglLbt8"
    },
    {
        id: 12,
        title: "Jumanji: Welcome to the Jungle",
        year: 2017,
        genre: "Adventure",
        rating: 6.9,
        type: "movie",
        description: "Four teenagers discover a mysterious video game that takes them into a new world.",
        poster: "https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
        trailer: "2QKg5SZ_35I"
    },
    {
        id: 13,
        title: "The Conjuring",
        year: 2013,
        genre: "Thriller",
        rating: 7.5,
        type: "movie",
        description: "Two investigators look into mysterious events at a family's farmhouse.",
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/4ucLGcXVVSVns8gQg82ys5817yi.jpg",
        trailer: "k10ETZ41q5o"
    },
    {
        id: 14,
        title: "Free Guy",
        year: 2021,
        genre: "Comedy",
        rating: 7.1,
        type: "movie",
        description: "A bank teller discovers that he is actually a character inside a video game.",
        poster: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
        trailer: "X2m-08cOAbc"
    },
    {
        id: 15,
        title: "The Martian",
        year: 2015,
        genre: "Sci-Fi",
        rating: 8.0,
        type: "movie",
        description: "An astronaut uses science and determination to survive after being stranded on Mars.",
        poster: "https://image.tmdb.org/t/p/w500/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
        trailer: "ej3ioOneTy8"
    },
    {
        id: 16,
        title: "Guardians of the Galaxy",
        year: 2014,
        genre: "Action",
        rating: 8.0,
        type: "movie",
        description: "A group of unusual heroes comes together to protect the galaxy.",
        poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg",
        trailer: "d96cjJhvlMA"
    }
];


// 2. TV SHOW DATA

const shows = [
    {
        id: 101,
        title: "Stranger Things",
        year: 2016,
        genre: "Sci-Fi",
        rating: 8.7,
        type: "show",
        description: "A group of friends discovers mysterious events in their small town.",
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
        trailer: "b9EkMc79ZSU"
    },
    {
        id: 102,
        title: "Wednesday",
        year: 2022,
        genre: "Comedy",
        rating: 8.0,
        type: "show",
        description: "Wednesday Addams investigates strange mysteries at her new school.",
        poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
        trailer: "Di310WS8zLk"
    },
    {
        id: 103,
        title: "The Witcher",
        year: 2019,
        genre: "Action",
        rating: 7.9,
        type: "show",
        description: "A monster hunter travels through a fantasy world filled with danger.",
        poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        trailer: "ndl1W4ltcmg"
    },
    {
        id: 104,
        title: "Dark",
        year: 2017,
        genre: "Sci-Fi",
        rating: 8.7,
        type: "show",
        description: "A missing child leads four families into a mystery across time.",
        poster: "https://image.tmdb.org/t/p/w500/5Lo4H8y7Yt4w3YyM8nZ5G8d9z2.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/3lBDg3i6nn5R2NKFC5a2tr1zHMj.jpg",
        trailer: "ESEUoa-mz2c"
    },
    {
        id: 105,
        title: "The Mandalorian",
        year: 2019,
        genre: "Action",
        rating: 8.6,
        type: "show",
        description: "A lone bounty hunter travels through the Star Wars galaxy.",
        poster: "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
        trailer: "aOC8E8z_ifw"
    },
    {
        id: 106,
        title: "Sherlock",
        year: 2010,
        genre: "Drama",
        rating: 9.1,
        type: "show",
        description: "Sherlock Holmes solves difficult mysteries with his friend Dr Watson.",
        poster: "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/5QY4mJ0pXwY6s3pJ2Qj2Z6G8y5.jpg",
        trailer: "xK7S9mrFWL4"
    },
    {
        id: 107,
        title: "The Boys",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        type: "show",
        description: "A group of people tries to expose superheroes who misuse their powers.",
        poster: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
        trailer: "M1bhOaLV4FU"
    },
    {
        id: 108,
        title: "Money Heist",
        year: 2017,
        genre: "Thriller",
        rating: 8.2,
        type: "show",
        description: "A criminal mastermind plans a major heist with a carefully selected team.",
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
        trailer: "hMANIarjT50"
    }
];


// 3. COMBINE ALL CONTENT

const allContent = [...movies, ...shows];

let currentItem = null;


// 4. GET HTML ELEMENTS

const getElement = (id) => document.getElementById(id);


// 5. CREATE MOVIE CARD

function createCard(item) {
    const savedItems = getSavedItems();
    const isSaved = savedItems.some(saved => saved.id === item.id);

    return `
        <article class="movie-card" data-id="${item.id}">

            <img
                class="movie-poster"
                src="${item.poster}"
                alt="${item.title} poster"
                loading="lazy"
                onerror="this.src='https://placehold.co/300x450/181818/ffffff?text=Poster+Unavailable'"
            >

            <div class="movie-info">

                <h3>${item.title}</h3>

                <p class="movie-meta">
                    ${item.year} | ${item.genre}
                </p>

                <div class="movie-bottom">

                    <span class="rating">
                        ⭐ ${item.rating}
                    </span>

                    <button
                        class="save-btn"
                        data-save="${item.id}"
                        type="button"
                    >
                        ${isSaved ? "✓ Saved" : "+ My List"}
                    </button>

                </div>

            </div>

        </article>
    `;
}


// 6. DISPLAY CARDS

function displayCards(containerId, items) {
    const container = getElement(containerId);

    if (!container) return;

    container.innerHTML = items.map(item => createCard(item)).join("");
}


// 7. LOAD HOME PAGE

function loadHome() {

    const trending = movies.slice(0, 8);

    const popular = [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

    const topRated = [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

    displayCards("trendingMovies", trending);
    displayCards("popularMovies", popular);
    displayCards("topRatedMovies", topRated);
    displayCards("popularShows", shows.slice(0, 8));

}


// 8. LOAD MOVIES PAGE

function loadMovies() {

    const selectedGenre = getElement("movieGenre").value;

    let filteredMovies = movies;

    if (selectedGenre !== "All") {
        filteredMovies = movies.filter(movie =>
            movie.genre === selectedGenre
        );
    }

    displayCards("allMovies", filteredMovies);
}


// 9. LOAD SHOWS PAGE

function loadShows() {

    const selectedGenre = getElement("showGenre").value;

    let filteredShows = shows;

    if (selectedGenre !== "All") {
        filteredShows = shows.filter(show =>
            show.genre === selectedGenre
        );
    }

    displayCards("allShows", filteredShows);
}


// 10. NAVIGATION

function showPage(pageName) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    const selectedPage = getElement(pageName + "Page");

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.remove("active");
    });

    const activeButton = document.querySelector(
        `[data-page="${pageName}"]`
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }

    if (pageName === "home") {
        loadHome();
    }

    if (pageName === "movies") {
        loadMovies();
    }

    if (pageName === "shows") {
        loadShows();
    }

    if (pageName === "mylist") {
        loadMyList();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 11. MY LIST - LOCAL STORAGE

function getSavedItems() {

    try {
        return JSON.parse(
            localStorage.getItem("streamflixMyList")
        ) || [];
    } catch (error) {
        return [];
    }

}


function saveItems(items) {

    localStorage.setItem(
        "streamflixMyList",
        JSON.stringify(items)
    );

}


function toggleSave(itemId) {

    const savedItems = getSavedItems();

    const existingIndex = savedItems.findIndex(
        item => item.id === itemId
    );

    if (existingIndex !== -1) {

        savedItems.splice(existingIndex, 1);

    } else {

        const item = allContent.find(
            content => content.id === itemId
        );

        if (item) {
            savedItems.push(item);
        }

    }

    saveItems(savedItems);

    // Refresh the currently visible content
    loadHome();
    loadMovies();
    loadShows();
    loadMyList();
    loadSearchResults(getElement("searchInput").value);

}


function loadMyList() {

    const savedItems = getSavedItems();

    displayCards("savedMovies", savedItems);

    const emptyMessage = getElement("emptyList");

    if (emptyMessage) {
        emptyMessage.style.display =
            savedItems.length === 0 ? "block" : "none";
    }

}


// 12. SEARCH FUNCTIONALITY

function searchContent() {

    const searchInput = getElement("searchInput");

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        return;
    }

    showPage("search");

    loadSearchResults(searchText);

}


function loadSearchResults(searchText) {

    const resultsContainer = getElement("searchResults");
    const emptyMessage = getElement("emptySearch");
    const heading = getElement("searchHeading");

    if (!resultsContainer) return;

    const query = searchText.toLowerCase().trim();

    const results = allContent.filter(item => {

        return (
            item.title.toLowerCase().includes(query) ||
            item.genre.toLowerCase().includes(query) ||
            String(item.year).includes(query)
        );

    });

    displayCards("searchResults", results);

    if (heading) {
        heading.textContent =
            `Results for "${searchText}"`;
    }

    if (emptyMessage) {
        emptyMessage.style.display =
            results.length === 0 ? "block" : "none";
    }

}


// 13. DETAILS MODAL

function openDetails(itemId) {

    const item = allContent.find(
        content => content.id === itemId
    );

    if (!item) return;

    currentItem = item;

    getElement("detailsTitle").textContent = item.title;

    getElement("detailsMeta").textContent =
        `⭐ ${item.rating} | ${item.year} | ${item.genre} | ${item.type === "movie" ? "Movie" : "TV Show"}`;

    getElement("detailsDescription").textContent =
        item.description;

    getElement("detailsBackdrop").style.backgroundImage =
        `url("${item.backdrop}")`;

    getElement("trailerPlayer").innerHTML = "";

    updateDetailsSaveButton();

    getElement("detailsModal").classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeModal(modalId) {

    const modal = getElement(modalId);

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

    if (modalId === "detailsModal") {
        getElement("trailerPlayer").innerHTML = "";
    }

}


function updateDetailsSaveButton() {

    if (!currentItem) return;

    const savedItems = getSavedItems();

    const isSaved = savedItems.some(
        item => item.id === currentItem.id
    );

    getElement("detailsSave").textContent =
        isSaved ? "✓ Added to My List" : "+ My List";

}


// 14. PLAY TRAILER

function playTrailer(item) {

    if (!item || !item.trailer) {
        alert("Trailer is not available.");
        return;
    }

    const trailerPlayer = getElement("trailerPlayer");

    trailerPlayer.innerHTML = `
        <iframe
            src="https://www.youtube-nocookie.com/embed/${item.trailer}?autoplay=1"
            title="${item.title} trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    `;

}


function playHeroTrailer() {

    const heroMovie = movies.find(
        movie => movie.id === 1
    );

    playTrailer(heroMovie);

}


function showHeroDetails() {

    openDetails(1);

}


// 15. DEMO LOGIN

function openAuthModal() {

    getElement("authModal").classList.add("show");

    document.body.style.overflow = "hidden";

}


function handleLogin(event) {

    event.preventDefault();

    const email = getElement("emailInput").value.trim();

    if (!email) {
        alert("Please enter your email address.");
        return;
    }

    const username = email.split("@")[0];

    getElement("profileBtn").textContent =
        username.charAt(0).toUpperCase();

    closeModal("authModal");

    getElement("authForm").reset();

    alert("Demo sign-in successful! Welcome to StreamFlix.");

}


// 16. EVENT LISTENERS

document.addEventListener("DOMContentLoaded", function () {


    // Navigation buttons

    document.querySelectorAll("[data-page]").forEach(button => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const pageName = this.dataset.page;

            showPage(pageName);

        });

    });


    // Movie and show cards

    document.addEventListener("click", function (event) {

        const saveButton = event.target.closest("[data-save]");

        if (saveButton) {

            event.stopPropagation();

            const itemId = Number(saveButton.dataset.save);

            toggleSave(itemId);

            return;
        }

        const movieCard = event.target.closest(".movie-card");

        if (movieCard) {

            const itemId = Number(movieCard.dataset.id);

            openDetails(itemId);

        }

    });


    // Movie genre filter

    getElement("movieGenre").addEventListener(
        "change",
        loadMovies
    );


    // TV show genre filter

    getElement("showGenre").addEventListener(
        "change",
        loadShows
    );


    // Search

    const searchInput = getElement("searchInput");

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            searchContent();
        }

    });


    // Search while typing

    searchInput.addEventListener("input", function () {

        const query = this.value.trim();

        if (query.length > 0) {

            showPage("search");

            loadSearchResults(query);

        } else {

            showPage("home");

        }

    });


    // Profile button

    getElement("profileBtn").addEventListener(
        "click",
        openAuthModal
    );


    // Hero buttons

    getElement("heroPlay").addEventListener(
        "click",
        playHeroTrailer
    );

    getElement("heroInfo").addEventListener(
        "click",
        showHeroDetails
    );


    // Details trailer button

    getElement("detailsTrailer").addEventListener(
        "click",
        function () {
            playTrailer(currentItem);
        }
    );


    // Details save button

    getElement("detailsSave").addEventListener(
        "click",
        function () {

            if (!currentItem) return;

            toggleSave(currentItem.id);

            updateDetailsSaveButton();

        }
    );


    // Close buttons

    document.querySelectorAll("[data-close]").forEach(button => {

        button.addEventListener("click", function () {

            closeModal(this.dataset.close);

        });

    });


    // Close modal by clicking outside

    document.querySelectorAll(".overlay").forEach(overlay => {

        overlay.addEventListener("click", function (event) {

            if (event.target === this) {
                closeModal(this.id);
            }

        });

    });


    // Close modal using Escape key

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeModal("detailsModal");

            closeModal("authModal");

        }

    });


    // Demo login form

    getElement("authForm").addEventListener(
        "submit",
        handleLogin
    );


    // Load initial content

    loadHome();

    loadMovies();

    loadShows();

    loadMyList();

    console.log("StreamFlix JavaScript loaded successfully!");

});