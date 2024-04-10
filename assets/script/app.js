'use strict'; 

mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZS1sb3R1cyIsImEiOiJjbHVyZDk5b2EwNjBhMmptOXZ0MXdzY2VpIn0.7XSn_RmvqXe_bCv-r803cQ';
    const map = new mapboxgl.Map({
        container: 'map',
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


