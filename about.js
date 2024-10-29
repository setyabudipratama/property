const header = document.getElementById('btn');
header.addEventListener('click', () => {
    const about = document.getElementById('about');
    about.scrollIntoView({ behavior: 'smooth' });
});

// fungsi untuk ke halaman utama
const utama = document.querySelector('.nav-item:first-child .nav-link');
utama.addEventListener('click', () => {
    window.location.href = "index.html";
});

// fungsi untuk ke halaman shop 
const shop = document.querySelector('.nav-item:nth-child(3) .nav-link');
shop.addEventListener('click', () => {
    window.location.href = "shop.html";
});


// rubah border radius bottom triangle bottom
const triangleBottom = document.querySelector('header .triangle-bottom');

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
        triangleBottom.style.borderBottom = '350px solid transparent';
        Object.assign(footer.style, {
            justifyContent: 'center',
            gap: '0',
        });
        h5Footer.style.fontSize = '0.6rem';
        spanFooter.forEach(span => {
            span.style.fontSize = '0.6rem';
        });
    };
};

// saat layar mengubah ukuran
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);
