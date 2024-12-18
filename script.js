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

const shopBtn = document.getElementById('shopBtn');
shopBtn.addEventListener('click', () => {
    window.location.href = "shop.html";
});


// rubah widht text header
const textHeader = document.querySelector('header .text');
textHeader.style.width = '100%';

// rubah lebar formSelect header
const inputGroupHeader = document.querySelector('header .container .input-group');

// rubah tinggi vewport benefit
const viewportBenefit = document.getElementById('benefit');

// rubah tinggi vewport shop
const viewportShop = document.getElementById('shop');

// rubah tinggi vewport testimoni
const viewportTestimoni = document.getElementById('testimoni');

// rubah footer
const footer = document.querySelector('footer');
Object.assign(footer.style, {
    justifyContent: 'space-around',
});

const h5Footer = document.querySelector('footer h5');
h5Footer.style.fontSize = '1rem';

const spanFooter = document.querySelectorAll('footer span');
spanFooter.forEach(span => {
    span.style.fontSize = '0.8rem';
});

function applyResponsiveStyles () {
    if (window.innerWidth < 767) {
        textHeader.style.width = '100%';
        inputGroupHeader.style.width = '85%';
        viewportBenefit.style.height = '100vh';
        viewportShop.style.height = '80vh';
        Object.assign(footer.style, {
            justifyContent: 'center',
            gap: '0',
        });
        h5Footer.style.fontSize = '0.6rem';
        spanFooter.forEach(span => {
            span.style.fontSize = '0.6rem';
        });
    } else if (window.innerWidth >= 767 && window.innerWidth < 1024) {
        viewportBenefit.style.height = '80vh';
        viewportShop.style.height = '80vh';
        viewportTestimoni.style.height = '50vh';
    }
};

// saat layar mengubah ukuran
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);
