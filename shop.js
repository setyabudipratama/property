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
