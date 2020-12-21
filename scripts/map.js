const locations = [
    {
        city: 'Los Angeles',
        locationX: 34.052231,
        locationY: -118.243683
    },
    {
        city: 'NewYork',
        locationX: 40.714272,
        locationY: -74.005966
    },
    {
        city: 'Boston',
        locationX: 42.3584300,
        locationY: -71.0597700
    },
    {
        city: 'Detroit',
        locationX: 42.3314300,
        locationY: -83.0457500
    }
]

const choosenCity = document.getElementById('choosenCity');
let locationIndex = 0;
// let map;
function showCity(n){
    const city = locations[n];
    const myLatLng = { lat: city.locationX, lng: city.locationY };
    choosenCity.textContent = city.city;
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myLatLng,
      });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
}

function initMap() {
    const myLatLng = { lat: locations[1].locationX, lng: locations[1].locationY };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
    choosenCity.textContent = locations[1].city
  }

  window.addEventListener('load',function(){
    initMap();
  }, false);
  