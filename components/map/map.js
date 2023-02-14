import { MapContainer, TileLayer, useMap, Popup, CircleMarker  } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';

export default function Map() {


    const [position, setPosition] = useState([49.28594, -123.11129]);

    //change position to user's location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setPosition([position.coords.latitude, position.coords.longitude]);
        });
    }, []);

    return (
        
        <MapContainer className={styles.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}


