// Mendapatkan elemen DOM
const sizeSelect = document.getElementById('size');
const quantityInput = document.getElementById('quantity');
const addToCartButton = document.getElementById('addToCart');
const mainImage = document.getElementById('mainImage');
const thumbnailImages = document.querySelectorAll('.thumbnail img');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');

// Set nilai awal quantity menjadi 0
quantityInput.value = 0;

// Fungsi untuk mengubah status tombol Add to Cart
function updateAddToCartButton() {
    const sizeSelected = sizeSelect.value !== '';
    const quantity = parseInt(quantityInput.value);
    addToCartButton.disabled = !(sizeSelected && quantity > 0);
    addToCartButton.style.backgroundColor = addToCartButton.disabled ? '' : 'white';
    addToCartButton.style.color = addToCartButton.disabled ? '' : 'black';
}

// Event listener untuk perubahan pada select ukuran
sizeSelect.addEventListener('change', updateAddToCartButton);

// Event listener untuk perubahan pada input jumlah
quantityInput.addEventListener('input', updateAddToCartButton);

// Event listener untuk tombol increment
incrementButton.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateAddToCartButton();
});

// Event listener untuk tombol decrement
decrementButton.addEventListener('click', () => {
    if (parseInt(quantityInput.value) > 0) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateAddToCartButton();
    }
});

// Event listener untuk gambar thumbnail
thumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        // Mengubah src gambar utama
        mainImage.src = event.target.src;

        // Menghapus kelas stroke dari semua thumbnail
        thumbnailImages.forEach(img => img.classList.remove('stroke'));

        // Menambahkan kelas stroke pada thumbnail yang diklik
        event.target.classList.add('stroke');
    });
});

// Event listener untuk tombol Add to Cart
addToCartButton.addEventListener('click', () => {
    const size = sizeSelect.value;
    const quantity = quantityInput.value;
    alert(`Item successfully added to cart! Size: ${size}, Quantity: ${quantity}`);
});

// Inisialisasi tombol Add to Cart
updateAddToCartButton();

// Menambahkan efek stroke pada thumbnail pertama saat halaman dibuka
if (thumbnailImages.length > 0) {
    thumbnailImages[0].classList.add('stroke'); // Menambahkan stroke pada thumbnail pertama
    mainImage.src = thumbnailImages[0].src; // Menampilkan gambar utama dari thumbnail pertama
}