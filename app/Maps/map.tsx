"use client"

import  MapDashboard from "../Dashboards/MapDashboard"
import { Map, Marker, Popup } from "react-map-gl/maplibre"
import { useState } from "react"

export default function MapComponent() {
    const [showDashboard, setShowDashboard] = useState(false)

    return (
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <div style={{height: "500px", width:"100%"}}>
            <Map
                initialViewState={{
                    longitude: -47.3156688,
                    latitude: -22.735621,
                    zoom: 13
                }}
                style={{
                    width: "100%",
                    height: "500px",
                    borderRadius: "12px"
                }}
                mapStyle="https://tiles.stadiamaps.com/styles/alidade_smooth.json"
            >
                <Marker 
                    longitude={-47.3156688} 
                    latitude={-22.735621}
                    anchor="center"
                    offset={[0, -10]}
                    onClick={(e) => (
                        e.originalEvent.stopPropagation(),
                        setShowDashboard(!showDashboard)
                    )}
                >
                    <div className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white cursor-pointer" />
                </Marker>

                {showDashboard && (
                    <div className="absolute top-4 right-4 z-50 bg-blue-600 rounded-lg shadow-xl w-80 max-h-[400px] overflow-y-auto max-md: h-max">
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-bold text-white">Veículos</h3>
                            <button 
                                onClick={() => setShowDashboard(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ×
                            </button>
                        </div>
                        <MapDashboard />
                    </div>
                </div>
                )}


            </Map>
            </div>
        </div>
    )
}