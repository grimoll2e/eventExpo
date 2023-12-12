import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const OPTIONS = {
    minZoom: 4,
    maxZoom: 17,
}

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 8.4290,
    lng: 99.9627,
};

const GoogleMapComponent = React.memo(() => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLEMAP_API,
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            options={OPTIONS}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        ></GoogleMap>
    ) : (
        <p>Loading map...</p>
    );
});

export default GoogleMapComponent;