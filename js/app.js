// Main app initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize app
    console.log('Love Story App Loaded ❤️');

    // Add any additional functionality here
    
    // Prevent default right-click context menu (optional)
    // document.addEventListener('contextmenu', function(e) {
    //     e.preventDefault();
    // });

    // Add touch event support for mobile navigation
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - go to next page
                document.querySelector('.nextBtn')?.click();
            } else {
                // Swiped right - go to previous page
                document.querySelector('.backBtn')?.click();
            }
        }
    }
});
