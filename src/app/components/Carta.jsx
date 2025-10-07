
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
    <MapContainer center={position} className="rounded-tr-[33px]  cart  min-[1180xp]:rounded-br-[33px] max-[1180px]:rounded-[33px] overflow-hidden"
 zoom={13} >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     
        
      />
      
      <Marker   position={position} icon={customIcon}>
        <Popup>
          <b>Мы тут заходи  звонок не работает нужно орать  </b><br />
         
        </Popup>
      </Marker>
    </MapContainer>
  );
}
