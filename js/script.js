window.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('.nav-link');
    const navbarBrand = navbar.querySelector('.navbar-brand');
    const navbarToggler = navbar.querySelector('.navbar-toggler');
    const offcanvas = document.querySelector('.offcanvas'); // Memilih elemen offcanvas

    // Set initial state for the navbar on page load
    function setInitialNavbarState() {
        if (window.scrollY === 0) {
            navbar.classList.add('bg-transparent');
            navLinks.forEach(link => {
                link.classList.remove('text-black');
                link.classList.add('text-white'); // Set initial text color to white
            });
            navbarBrand.style.color = 'white'; // Set brand color to white
        }
    }

    // Call the function to set initial state
    setInitialNavbarState();

    // Function to handle scroll effects
    function handleScroll() {
        if (window.scrollY > 0) {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-white');
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-black'); // Change text color to black
            });
            navbarBrand.style.color = 'black';
        } else {
            navbar.classList.remove('bg-white');
            navbar.classList.add('bg-transparent', 'transition-opacity', 'duration-500');
            navLinks.forEach(link => {
                link.classList.remove('text-black');
                link.classList.add('text-white', 'transition-colors', 'duration-500'); // Change text color to white
            });
            navbarBrand.style.color = 'white'; // Set brand color to white
        }

        // Add/remove scrolled class based on scroll position
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Event listeners for scroll
    window.addEventListener('scroll', handleScroll);

    // Function to handle offcanvas behavior
    function handleOffcanvas(open) {
        if (open) {
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-black'); // Always set text to black when offcanvas is open
            });
        } else {
            handleScroll(); // Reapply scroll-based behavior when offcanvas is closed
        }
    }

    // Listen to the opening and closing of the offcanvas
    offcanvas.addEventListener('show.bs.offcanvas', function () {
        handleOffcanvas(true); // Handle open state
    });

    offcanvas.addEventListener('hide.bs.offcanvas', function () {
        handleOffcanvas(false); // Handle close state
    });
});