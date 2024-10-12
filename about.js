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
