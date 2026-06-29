// Music Modal and Background Music
const bgMusic = document.getElementById('bgMusic');
const musicModal = document.getElementById('musicModal');
const playMusicBtn = document.getElementById('playMusic');
const skipMusicBtn = document.getElementById('skipMusic');

// Show modal on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show modal after a short delay
    setTimeout(() => {
        musicModal.style.display = 'flex';
        console.log('Music modal displayed');
    }, 500);
});

// Play Music Button
playMusicBtn.addEventListener('click', function() {
    bgMusic.volume = 0.3; // Set volume to 30%
    bgMusic.play().catch(error => {
        console.log('Audio playback failed:', error);
    });
    musicModal.style.display = 'none';
    console.log('Music playing...');
});

// Skip Music Button
skipMusicBtn.addEventListener('click', function() {
    musicModal.style.display = 'none';
    console.log('Music skipped');
});

// Close modal if clicked outside
musicModal.addEventListener('click', function(e) {
    if (e.target === musicModal) {
        musicModal.style.display = 'none';
    }
});
