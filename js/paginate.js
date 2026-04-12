document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 8; // Jumlah item per halaman
    const newsItems = document.querySelectorAll(".news-item");
    const paginationContainer = document.querySelector(".page-numbers");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentPage = 1;
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    const displayPage = (page) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;

        // Sembunyikan semua item
        newsItems.forEach((item, index) => {
            item.style.display = index >= startIndex && index < endIndex ? "block" : "none";
        });

        // Perbarui tombol aktif
        document.querySelectorAll(".page-numbers button").forEach((btn, index) => {
            btn.classList.toggle("active", index + 1 === page);
        });

        // Perbarui tombol panah
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    };

    // Buat tombol pagination
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", () => {
            currentPage = i;
            displayPage(i);
        });
        paginationContainer.appendChild(button);
    }

    // Event listener untuk tombol panah
    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
        }
    });

    // Tampilkan halaman pertama saat halaman dimuat
    displayPage(currentPage);
});
