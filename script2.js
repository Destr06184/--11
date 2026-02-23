document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.text');

    const specialElement = document.querySelector('.special');
    if (specialElement) {
        specialElement.classList.add('red-text');
    }

    if (textElements.length >= 3) {
        textElements[2].classList.add('bg-green');
    }

    const container = document.getElementById('container');
    if (container) {
        container.classList.add('border-container');
    }
});
