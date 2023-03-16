import { MapContainer, TileLayer, useMap, Popup, CircleMarker, Marker  } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';
// import { prisma } from '@/server/db/client'

export default function Map(props) {

    const [position, setPosition] = useState([49.28594, -123.11129]);

    //change position to user's location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setPosition([position.coords.latitude, position.coords.longitude]);
        });
    }, []);

    //change position to user's pinned location

    // Paw Map Icon
    const PawIcon = L.icon({
        iconUrl: '../map/PawPin.svg',
        iconSize:     [65, 65], // size of the icon
        shadowSize:   [70, 74], // size of the shadow
    });

    console.log(props.posts);

    return (
        
        <MapContainer className={styles.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {props.posts.map((post) => (
                <Marker position={[post.latitude, post.longitude]} icon={PawIcon} key={post.id}>
                    <Popup>
                        <h2>{post.petName}</h2>
                        <p>{post.lastLocation}</p>
                        <img src={post.petImage} className={styles.smallimage}></img>
                    </Popup>
                </Marker>
            ))}

   



        </MapContainer>
    )
}


