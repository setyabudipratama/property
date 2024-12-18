// fungsi untuk ke halaman index
const utama = document.querySelector('.nav-item:first-child .nav-link');
utama.addEventListener('click', () => {
    window.location.href = "index.html";
});

// fungsi untuk ke halaman about
const about = document.querySelector('.nav-item:nth-child(2) .nav-link');
about.addEventListener('click', () => {
    window.location.href = "about.html";
});

// fungsi untuk ke halaman dark grey sofa
const darkgrey = document.querySelector('#furniture .left .card button');
darkgrey.addEventListener('click', () => {
    window.location.href = "darkgrey.html";
});

// fungsi untuk ke halaman beige sofa 1
const beige1 = document.querySelector('#furniture .left .bottom .card .desc button');
beige1.addEventListener('click', () => {
    window.location.href = "beige.html";
});

// fungsi untuk ke halaman beige sofa 1
const purple = document.querySelector('#furniture .left .bottom .card:nth-child(2) .desc button');
purple.addEventListener('click', () => {
    window.location.href = "purple.html";
});

// fungsi untuk ke halaman beige sofa 1
const beige2 = document.querySelector('#furniture .right .desc button');
beige2.addEventListener('click', () => {
    window.location.href = "beigeright.html";
});

// fungsi untuk ke halaman perabot kamar
const perabotKamar = document.querySelector('#other .content .card:first-child button');
perabotKamar.addEventListener('click', () => {
    window.location.href = "perabotKamar.html";
});

// fungsi untuk ke halaman lemari
const lemari = document.querySelector('#other .content .card:nth-child(2) button');
lemari.addEventListener('click', () => {
    window.location.href = "lemari.html";
});

// fungsi untuk ke halaman perabot bayi
const perabotBayi = document.querySelector('#other .content .card:nth-child(3) button');
perabotBayi.addEventListener('click', () => {
    window.location.href = "perabotBayi.html";
});

// fungsi untuk ke halaman perabot kamar 2
const perabotKamar2 = document.querySelector('#other .content .card:nth-child(4) button');
perabotKamar2.addEventListener('click', () => {
    window.location.href = "perabotKamar2.html";
});

// fungsi untuk ke halaman lampu kerja
const lampuKerja = document.querySelector('#other .content .card:nth-child(5) button');
lampuKerja.addEventListener('click', () => {
    window.location.href = "lampuKerja.html";
});

// rubah tinggi halaman furniture
const furniture = document.getElementById('furniture');

// rubah tinggi container
const containerFurniture = document.querySelector('#furniture .container');

// rubah tinggi content
const contentFurniture = document.querySelector('#furniture .container .content');

// rubah tinggi right
const cardRight = document.querySelector('#furniture .container .right');

// rubah tinggi card right
const cardRightItem = document.querySelector('#furniture .container .right .card');

// rubah tinggi content
const contentOther = document.querySelector('#other .content');

// rubah tinggi halaman other
const other = document.getElementById('other');

// rubah tinggi halaman customer
const customer = document.getElementById('customer');

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
        Object.assign(furniture.style, {
            height: '90vh',
            marginTop: '60px',
        });
        containerFurniture.style.height = '90vh';
        contentFurniture.style.height = '100vh';
        cardRight.style.height = '30vh';
        cardRightItem.style.height = '220px';
        contentOther.style.height = '50vh';
        other.style.height = '60vh';
        customer.style.height = '50vh';
        Object.assign(footer.style, {
            justifyContent: 'center',
            gap: '0',
        });
        h5Footer.style.fontSize = '0.6rem';
        spanFooter.forEach(span => {
            span.style.fontSize = '0.6rem';
        });
    } else if (window.innerWidth >= 767 && window.innerWidth < 1024) {
        furniture.style.height = '50vh';
        contentFurniture.style.height = '50vh';
        containerFurniture.style.height = '50vh';
        contentOther.style.height = '50vh';
        other.style.height = '50vh';
        customer.style.height = '50vh';
    }
};

// saat layar mengubah ukuran
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);
