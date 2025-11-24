// Noel Bingo Landing Page
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎄 Noel Bingo is coming soon!');

    // Add a simple sparkle effect on click
    document.addEventListener('click', (e) => {
        createSparkle(e.clientX, e.clientY);
    });
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = '#F8B229';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle-anim 1s forwards';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
}

// Inject sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle-anim {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
`;
document.head.appendChild(style);
