document.addEventListener('DOMContentLoaded', function() {
    // Gallery rotation
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentImage = 0;

    function rotateGallery() {
        galleryImages[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % galleryImages.length;
        galleryImages[currentImage].classList.add('active');
    }

    setInterval(rotateGallery, 5000); // Change image every 3 seconds

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});