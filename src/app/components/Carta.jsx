

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function App() {
  return (
    <YMaps query={{ apikey: "0d853250-dd60-4ee7-a243-538bb1ae69d6", lang: "ru_RU" }}>
      <Map 
        defaultState={{ center: [50.4501, 30.5234], zoom: 10 }} 
        width="100%" 
        height="400px"
      >
        <Placemark
          geometry={[50.4501, 30.5234]}
          properties={{
            balloonContent: "Привет из Киева",
            hintContent: "Я метка"
          }}
          options={{
            preset: "islands#redIcon",
            draggable: true
          }}
        />
      </Map>
    </YMaps>
  );
}