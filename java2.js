document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll("#image-window img");
    var index = 0;

    function fadeInImage() {
        images[index].style.opacity = "1"; // Fade in current image
        index++; // Move to next image
        if (index < images.length) {
            setTimeout(fadeInImage, 1000); // Delay before fading in next image
        }
    }

    fadeInImage(); // Start fading in images
});

document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-button');
    const projectOverlays = document.querySelectorAll('.project-overlay');

    expandButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const overlay = projectOverlays[index];
            overlay.classList.toggle('active');
        });
    });
});
