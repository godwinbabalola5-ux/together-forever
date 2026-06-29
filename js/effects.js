// Create Stars Background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Initialize stars on page load
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    console.log('Stars created ✨');
});

// Add glow effect to headings
const headings = document.querySelectorAll('h1');
headings.forEach(h1 => {
    h1.style.textShadow = '0 0 25px crimson, 0 0 50px rgba(220,20,60,0.8)';
});
