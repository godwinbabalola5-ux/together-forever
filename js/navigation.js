// Page Navigation
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updatePage();
});

// Next button functionality
const nextButtons = document.querySelectorAll('.nextBtn');
nextButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updatePage();
            triggerRoseAnimation();
        }
    });
});

// Back button functionality
const backButtons = document.querySelectorAll('.backBtn');
backButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });
});

// Update page display
function updatePage() {
    pages.forEach((page, index) => {
        page.classList.remove('active');
        if (index === currentPage) {
            page.classList.add('active');
        }
    });
    console.log('Page ' + (currentPage + 1) + ' of ' + totalPages);
}

// Rose animation on page change
function triggerRoseAnimation() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFallingRose();
        }, i * 100);
    }
}

// Create falling rose
function createFallingRose() {
    const rose = document.createElement('div');
    rose.className = 'rose';
    rose.innerHTML = '🌹';
    rose.style.left = Math.random() * 100 + '%';
    rose.style.animationDuration = (3 + Math.random() * 2) + 's';
    document.body.appendChild(rose);
    
    setTimeout(() => {
        rose.remove();
    }, 5000);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        const nextBtn = document.querySelector('.nextBtn');
        if (nextBtn) nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
        const backBtn = document.querySelector('.backBtn');
        if (backBtn) backBtn.click();
    }
});
