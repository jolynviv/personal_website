document.addEventListener("DOMContentLoaded", () => {
    const allProjectImages = document.querySelectorAll('.image-row img, .image-right img');

    allProjectImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.05)";
            img.style.transition = "all 0.3s ease";
        });

        img.addEventListener('mouseleave', () => {
            allProjectImages.forEach(image => {
                image.style.transform = "scale(1)";
                image.style.opacity = "1";
                image.style.filter = "none";
            });
        });
    });
});