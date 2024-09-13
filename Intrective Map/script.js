// Initialize the map and set its view to a specific location and zoom level
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Define locations with coordinates, names, and descriptions
const locations = [
    { name: "Location 1", description: "Description for Location 1", coords: [51.505, -0.09] },
    { name: "Location 2", description: "Description for Location 2", coords: [51.515, -0.1] },
    { name: "Location 3", description: "Description for Location 3", coords: [51.525, -0.08] },
    { name: "Location 4", description: "Description for Location 4", coords: [51.535, -0.07] },
    { name: "Location 5", description: "Description for Location 5", coords: [51.545, -0.06] },
];

// Create markers for each location
locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const foundLocation = locations.find(location => location.name.toLowerCase() === searchTerm);

    if (foundLocation) {
        map.setView(foundLocation.coords, 13);
        L.marker(foundLocation.coords).addTo(map).bindPopup(`<b>${foundLocation.name}</b><br>${foundLocation.description}`).openPopup();
    } else {
        alert('Location not found!');
    }
});