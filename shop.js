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
