import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
    iconUrl: iconMarker,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});

const Map = () => {
  return (
    <MapContainer
      center={[56.4, 10.88]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "fill", zIndex: "0" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[56.4,10.88]} icon={icon}>
        <Popup>
            Find os her!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
