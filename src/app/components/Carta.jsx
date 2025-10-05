import { YMaps, Map ,Placemark } from "@pbe/react-yandex-maps";

export default function MyMap() {
  return (
<YMaps query={{ apikey: "0d853250-dd60-4ee7-a243-538bb1ae69d6" }}>
  <Map
    defaultState={{
      center: [56.143151, 47.251102],
      zoom: 17,
      controls: ["zoomControl"],
    }}
    modules={["control.ZoomControl"]}
    width="100%"
    height="400px"
    options={{
      zoomControlSize: "small",
      zoomControlFloat: "left",
      zoomControlPosition: { top: 150, left: 10 },
    }}
  >
    <Placemark
      geometry={[56.143151, 47.251102]}
      properties={{
        balloonContent: "428000, г. Чебоксары, Марпосадское шоссе, 14",
        hintContent: "Марпосадское шоссе, 14",
      }}
    />
  </Map>
</YMaps>

  );
}
