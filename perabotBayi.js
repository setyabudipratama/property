const suka = document.querySelector('.fa-heart');
// fungsi untuk like dan unlike
suka.addEventListener('click', () => {
    if(suka.classList.contains('fa-regular')) {
        suka.classList.remove('fa-regular');
        suka.classList.add('fa-solid');
    } else {
        suka.classList.remove('fa-solid');
        suka.classList.add('fa-regular');
    }
});

// fungsi untuk ke halaman shop
const back = document.getElementById('back');
back.addEventListener('click', () => {
    window.location.href = 'shop.html';
});

// fungsi untuk beralih ke whatsapp
const buy = document.getElementById('buy');
buy.addEventListener('click', function (e) {
    e.preventDefault();

    // ambil value
    const name = "'Set perabot bayi 2 unit, kayu jati'";
    const price = "'Rp. 2.500.000'";

    // encode untuk mengirimkan pesan
    const whatsappPesan = encodeURIComponent(`Saya ingin membeli property ${name}, dengan harga ${price}`);

    const nmrWhatsapp = "6282264244554";

    // url
    const url = `https://wa.me/${nmrWhatsapp}?text=${whatsappPesan}`;
    // open whatsapp
    window.open(url);
});