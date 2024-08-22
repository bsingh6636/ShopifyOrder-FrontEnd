import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { shopifyCustomers as data } from '../pages/initialValues';

// Fix for marker icon not showing properly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const GeographicalDistribution = () => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        // Predefined city coordinates, expand this list for more cities
        const cityCoordinates = {
            'Austin': [30.2672, -97.7431],
            'New York': [40.7128, -74.0060],
            'San Francisco': [37.7749, -122.4194],
            'Chicago': [41.8781, -87.6298],
            'Los Angeles': [34.0522, -118.2437],
            'Houston': [29.7604, -95.3698],
            'Phoenix': [33.4484, -112.0740],
            'Philadelphia': [39.9526, -75.1652],
            'San Antonio': [29.4241, -98.4936],
            'San Diego': [32.7157, -117.1611],
            'Dallas': [32.7767, -96.7970],
            'San Jose': [37.3382, -121.8863],
            'Austin': [30.2672, -97.7431],
            'Jacksonville': [30.3322, -81.6557],
            'Fort Worth': [32.7555, -97.3308],
            'Columbus': [39.9612, -82.9988],
            'Indianapolis': [39.7684, -86.1581],
            'Charlotte': [35.2271, -80.8431],
            'San Francisco': [37.7749, -122.4194],
            'Seattle': [47.6062, -122.3321],
            'Denver': [39.7392, -104.9903],
            'Washington, D.C.': [38.8951, -77.0369],
            'Boston': [42.3601, -71.0589],
            'El Paso': [31.7619, -106.4850],
            'Nashville': [36.1627, -86.7816],
            'Detroit': [42.3314, -83.0458],
            'Oklahoma City': [35.4676, -97.5164],
            'Las Vegas': [36.1699, -115.1398],
            'Baltimore': [39.2904, -76.6122],
            'Milwaukee': [43.0389, -87.9065],
            'Albuquerque': [35.0844, -106.6504],
            'Tucson': [32.2226, -110.9747],
            'Fresno': [36.7378, -119.7871],
            'Sacramento': [38.58, -121.49],
            'Kansas City': [39.0997, -94.5786],
            'Atlanta': [33.7490, -84.3880],
            'Colorado Springs': [38.8339, -104.8214],
            'Raleigh': [35.7796, -78.6382],
            'Omaha': [41.2565, -95.9345],
            'Miami': [25.7617, -80.1918],
            'Cleveland': [41.4993, -81.6944],
            'Tulsa': [36.1539, -95.9928],
            'Oakland': [37.8049, -122.2711],
            'Minneapolis': [44.9778, -93.2650],
            'Wichita': [37.6872, -97.3301]
        };
        

        const customerMarkers = data.map(customer => {
            const city = customer.default_address.city;
            const coordinates = cityCoordinates[city];

            if (coordinates) {
                return {
                    position: coordinates,
                    info: `${customer.first_name} ${customer.last_name}`,
                };
            }
            return null;
        }).filter(marker => marker !== null);

        setMarkers(customerMarkers);
    }, [data]);

    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.position}>
                    <Popup>
                        {marker.info}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default GeographicalDistribution;
