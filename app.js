//Variables
const map = L.map("map");

map.setView([33.9737, -118.363], 7);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([34.0515, -118.2225]).addTo(map);
// .bindPopup("I could be here LOL.")
// .openPopup();
