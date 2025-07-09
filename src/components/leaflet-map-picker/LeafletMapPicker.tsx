'use client'

import { useState } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import L from 'leaflet'

// Optional: fix broken marker icon path
import 'leaflet/dist/leaflet.css' 
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'


// Fix Leaflet icon paths for Next.js
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src,
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
})

function LocationMarker({ setPosition }: { setPosition: (pos: [number, number]) => void }) {
    const [markerPos, setMarkerPos] = useState<[number, number] | null>(null)

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng
            setMarkerPos([lat, lng])
            setPosition([lat, lng])
        },
    })

    return markerPos ? <Marker position={markerPos} /> : null
}

export default function LeafletMapPicker() {
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([-6.2, 106.8]) // Jakarta as default

    return (
        <div>
            <MapContainer
                center={selectedPosition}
                zoom={10}
                style={{ height: '200px', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker setPosition={setSelectedPosition} />
            </MapContainer>

            <h1 className="my-2 text-white font-bold">
                {selectedPosition[0].toFixed(6)}, {selectedPosition[1].toFixed(6)}
            </h1>
        </div>
    )
}
