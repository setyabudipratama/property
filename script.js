// fungsi untuk hasil search
function showPage(house) {
    const page = document.getElementById('house');
    page.classList.remove('active');

    const pageActive = document.getElementById(house);
    pageActive.classList.add('active');
}

const search = document.getElementById('search');
search.addEventListener('click', function() {
    showPage('house');
});

// fungsi untuk see more halaman house
const seeMore = document.querySelectorAll('#house .btn');
seeMore.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = "house.html";
    });
});

// fungsi untuk beralih ke halaman about
const about = document.querySelector('.nav-item:nth-child(2) .nav-link');
about.addEventListener('click', () => {
    window.location.href = "about.html";
});

// fungsi untuk ke halaman shop
const shop = document.querySelector('.nav-item:nth-child(3) .nav-link');
shop.addEventListener('click', () => {
    window.location.href = "shop.html";
});
