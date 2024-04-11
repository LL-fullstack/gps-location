'use strict'; 

let locationMarker;

mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZS1sb3R1cyIsImEiOiJjbHVyZDk5b2EwNjBhMmptOXZ0MXdzY2VpIn0.7XSn_RmvqXe_bCv-r803cQ';
    const map = new mapboxgl.Map({
        container: 'map-section',
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 10,
        center: [-97.143173, 49.895313]
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );

    map.addControl(new mapboxgl.NavigationControl());

    const trackButton = document.getElementById('tracker-button');
    trackButton.addEventListener('click', function() {
        locateUser();
    });

    
// The 'success' callback function
function getLocation(position) {
    let { altitude, latitude, longitude } = position.coords;

    console.log(
        `Altitude: ${altitude}
         Latitude: ${latitude}
         Longitude: ${longitude}`
    );
    centerMapWithCoordinates(latitude, longitude);
}

// The 'error/failure' callback function
function errorHandler() {
    console.log('Unable to retrieve your location');
}

function locateUser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocation, errorHandler);
    } else {
        console.log('Geolocation is not supported by your browser');
    }
}

function centerMapWithCoordinates(latitude, longitude) {
    map.flyTo({
        center: [longitude, latitude],
        zoom: 18,
    });


    if(locationMarker != undefined) {
        locationMarker.remove();
    }
    
    locationMarker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
}