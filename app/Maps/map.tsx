"use client"

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


const DefaultIcon = L.icon({ iconUrl, shadowAnchorUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;


export default function Map(){
    return(
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg -z-1">
            <MapContainer 
                center={[-22.735621, -47.3156688]}
                zoom={13}
                scrollWheelZoom={true}
                className="w-full h-full">
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'

            />
            <Marker position={[-22.735621, -47.3156688 ]}>
                <Popup>
                    <h1>Dashboard</h1>
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}
