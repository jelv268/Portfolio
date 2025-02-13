document.addEventListener('DOMContentLoaded', function() {
    // Target only the rotating gallery (main page)
    const rotatingGallery = document.querySelector('.rotating-gallery');

    if (rotatingGallery) {
        const galleryImages = rotatingGallery.querySelectorAll('.gallery-image');
        let currentImage = 0;

        function rotateGallery() {
            if (galleryImages.length === 0) return;

            galleryImages[currentImage].classList.remove('active');
            currentImage = (currentImage + 1) % galleryImages.length;
            galleryImages[currentImage].classList.add('active');
        }

        // Start cycling images only in the rotating gallery
        setInterval(rotateGallery, 5000); // Change image every 5 seconds
    }

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

function initProjectGallery() {
    const gallery = document.querySelector('.project-gallery');
    if (!gallery) return;

    const images = gallery.querySelectorAll('.gallery-image');
    const dotsContainer = gallery.querySelector('.gallery-dots');
    const prevBtn = gallery.querySelector('.gallery-prev');
    const nextBtn = gallery.querySelector('.gallery-next');
    let currentIndex = 0;

    // Create dots
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showImage(index));
        dotsContainer.appendChild(dot);
    });

    function showImage(index) {
        images[currentIndex].classList.remove('active');
        document.querySelectorAll('.gallery-dot')[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        images[currentIndex].classList.add('active');
        document.querySelectorAll('.gallery-dot')[currentIndex].classList.add('active');
    }

    function nextImage() {
        showImage((currentIndex + 1) % images.length);
    }

    function prevImage() {
        showImage((currentIndex - 1 + images.length) % images.length);
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
}

// Initialize project gallery when page loads
document.addEventListener('DOMContentLoaded', initProjectGallery);
