"use client"

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapDashboard } from "../Dashboards/MapDashboard"

const DefaultIcon = L.icon(
    {
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowSize: [41, 41]

    });



L.Marker.prototype.options.icon = DefaultIcon;


export default function Map() {
    return (
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
                <Marker position={[-22.735621, -47.3156688]}>
                    <Popup>
                        <MapDashboard />
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
