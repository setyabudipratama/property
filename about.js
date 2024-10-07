const header = document.getElementById('btn');
header.addEventListener('click', () => {
    const about = document.getElementById('about');
    about.scrollIntoView({ behavior: 'smooth' });
});

// fungsi untuk beralih ke halaman utama
const utama = document.querySelector('.nav-item:first-child .nav-link');
utama.addEventListener('click', () => {
    window.location.href = "index.html";
});