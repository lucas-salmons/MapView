var map = L.map("map", {
  center: [47.608013, -122.335167],
  zoom: 13
});

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//drives navigation, input value is split from a string as leaflet panTo requires an array
function zoomTo() {
  var inputLocation = document.getElementById("latLng").value;
  var locationArray = inputLocation.split(",");
  console.log(locationArray);
  map.panTo(new L.latLng(locationArray));
}
