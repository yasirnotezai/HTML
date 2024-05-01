// Preload images
const images = document.querySelectorAll('img');
images.forEach(img => {
    new Image().src = img.src;
    img.style.width='400px'
});