
'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const customIcon = L.icon({
  iconUrl: '/img/placeholder 1.png', 
  iconSize: [40, 40],
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40], 
});

export default function MyMap() {
  const position = [55.547458, 37.772559]; 

  return (
    <MapContainer center={position} className="rounded-tr-[33px] min-[1180px]:h-[100%] max-[1180px]:h-[350px] min-[1180xp]:rounded-br-[33px] max-[1180px]:rounded-[33px] overflow-hidden"
 zoom={13} style={{ height: "488px", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     
        
      />
      
      <Marker   position={position} icon={customIcon}>
        <Popup>
          <b>Пример фото-метки</b><br />
          Здесь можно описать объект.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
