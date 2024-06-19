<template>
  <div class="card-available">
    <div class="info-travel">
      <h1>Disponible</h1>
      <p>a 5 minutos de tu Ubicación</p>
    </div>
    <div class="info-precio">
      <p>₡1.500</p>
    </div>
  </div>
  <div class="container-map">
    <GMapMap
      ref="map"
      :center="{ lat: placesStore.origin?.lat || 10, lng: placesStore.origin?.lng || 10 }"
      :zoom="7"
      style="width: 100%; height: 60rem;"
    ></GMapMap>
  </div>
  <div class="container-buttons">
    <button class="cancel-button button">Cancelar</button>
    <button class="confirm-button button">Aceptar</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../stores/usePlacesStore';

const placesStore = usePlacesStore();
const map = ref(null);
const directionsService = ref(null);
const directionsRenderer = ref(null);

onMounted(() => {
  const initGoogleServices = () => {
    directionsService.value = new google.maps.DirectionsService();
    directionsRenderer.value = new google.maps.DirectionsRenderer({
      map: map.value.$mapObject,
      suppressMarkers: false,
    });
    drawRoute();
  };

  if (window.google) {
    initGoogleServices();
  } else {
    window.addEventListener('google-maps-loaded', initGoogleServices);
  }
});

watch(
  () => [placesStore.origin, placesStore.destination],
  drawRoute,
  { deep: true }
);

function drawRoute() {
  if (placesStore.origin && placesStore.destination && directionsService.value && directionsRenderer.value) {
    console.log("Drawing route with origin:", placesStore.origin, "and destination:", placesStore.destination);
    const origin = new google.maps.LatLng(placesStore.origin.lat, placesStore.origin.lng);
    const destination = new google.maps.LatLng(placesStore.destination.lat, placesStore.destination.lng);

    if (!destination || isNaN(destination.lat()) || isNaN(destination.lng())) {
      console.error('Invalid latitude or longitude for destination.');
      return;
    }

    // Agregar marcadores para origen y destino
    const marker = new google.maps.Marker({
      position: origin,
      map: map.value.$mapObject,
      title: "Origen",
    });
    const marker2 = new google.maps.Marker({
      position: destination,
      map: map.value.$mapObject,
      title: "Destino",
    });

    const request = {
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.value.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log("Route result:", result);
        directionsRenderer.value.setDirections(result);
        // Forzar la actualización del mapa
        directionsRenderer.value.setMap(map.value.$mapObject);
      } else {
        console.error('Error al obtener la ruta: ' + status);
      }
    });
  } else {
    console.log("Waiting for origin and destination to be set.");
  }
}
</script>


<style scoped>
.card-available h1 {
  font-size: 3.5rem;
  font-weight: bold;
}
.card-available p {
  font-size: 2rem;
}
.info-precio p {
  font-size: 3.5rem;
  font-weight: bold;
}
.card-available {
  margin-top: 0.5rem;
  width: 97%;
  display: flex;
  margin-left: 0.2rem;
  justify-content: center;
  align-items: center;
  background-color: #e0ffc7;
  border: 2px solid black;
  border-radius: 1rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  gap: 4rem;
}
.container-map {
  border: 5px solid #AEBBFF;
  width: 98%;
  height: 60rem;
}
.container-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
.button {
  width: 15rem;
  height: 4rem;
  border-radius: 2rem;
  font-size: 2.5rem;
  border: 0;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
}
.cancel-button {
  background-color: #e34646;
  color: white;
}
.confirm-button {
  background-color: black;
  color: white;
}
.auxiliar {
  display: none;
}
@media (min-width: 1024px) {
  .card-available {
    display: none;
  }
  .auxiliar {
    display: flex;
    gap: 3rem;
    width: 45rem;
    background-color: #fff;
    margin-top: 0px;
    border: 4px solid black;
    border-top-left-radius: 0px;
  }
  .info-travel {
    margin-left: -2rem;
  }
  .container-buttons {
    gap: 14rem;
  }
  .container-map {
    width: 99%;
  }
}
</style>
