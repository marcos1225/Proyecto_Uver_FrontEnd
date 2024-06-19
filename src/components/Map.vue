<script setup>
import { ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../stores/usePlacesStore';
import { GMapMap, GMapMarker } from '@fawmi/vue-google-maps';

const placesStore = usePlacesStore();
const map = ref(null);
const directionsService = ref(null);
const directionsRenderer = ref(null);

onMounted(() => {
  directionsService.value = new google.maps.DirectionsService();
  directionsRenderer.value = new google.maps.DirectionsRenderer();
});

watch(() => placesStore.origin, drawRoute);
watch(() => placesStore.destination, drawRoute);

async function drawRoute() {
  if (placesStore.origin && placesStore.destination) {
    const origin = new google.maps.LatLng(placesStore.origin.lat, placesStore.origin.lng);
    const destinationPlace = await getPlaceDetails(placesStore.destination);
    const destination = new google.maps.LatLng(destinationPlace.geometry.location.lat(), destinationPlace.geometry.location.lng());

    const request = {
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.value.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.value.setDirections(result);
        directionsRenderer.value.setMap(map.value.$mapObject);
      } else {
        console.error('Error al obtener la ruta: ' + status);
      }
    });
  }
}

async function getPlaceDetails(placeId) {
  const service = new google.maps.places.PlacesService(map.value.$mapObject);
  return new Promise((resolve, reject) => {
    service.getDetails({ placeId }, (result, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(result);
      } else {
        reject(status);
      }
    });
  });
}
</script>

<template>
  <GMapMap
    ref="map"
    :center="{ lat: 10, lng: 10 }"
    :zoom="7"
    style="width: 100%; height: 100%;"
  ></GMapMap>
</template>
