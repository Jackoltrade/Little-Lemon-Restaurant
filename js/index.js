// Initialize and add the map
let map;

async function initMap() {
  // The location of Toronto
  const position = { lat: 43.654, lng: -79.378 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Toronto
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Toronto
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Toronto",
  });
}

initMap();


