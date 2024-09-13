const artworks = [
    {
        src: 'art1.jpeg', 
        title: 'Modern Art 1', 
        description: 'A beautiful piece of modern art.'
    },
    {
        src: 'art2.jpg', 
        title: 'Modern Art 2', 
        description: 'Another stunning modern artwork.'
    },
    {
        src: 'art3.jpg', 
        title: 'Modern Art 3', 
        description: 'Vibrant colors in this modern piece.'
    }
];

let currentIndex = 0;

const artworkImg = document.getElementById('artwork');
const artworkInfo = document.getElementById('artwork-info');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateArtwork() {
    artworkImg.src = artworks[currentIndex].src;
    artworkInfo.innerHTML = `<strong>${artworks[currentIndex].title}</strong><br>${artworks[currentIndex].description}`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : artworks.length - 1;
    updateArtwork();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < artworks.length - 1) ? currentIndex + 1 : 0;
    updateArtwork();
});

// Initialize the first artwork
updateArtwork();