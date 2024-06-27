<template>
  
  <div class="global">
  <div class="container-map">
    <GMapMap
      ref="map"
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      style="width: 100%; height: 60rem;"
    ></GMapMap>
  </div>
  <div class="container-info">
    <div class="info">
      <h2>Información del Viaje</h2>
      <p><strong>Conductor:</strong> {{ tripInfo.numeroConductor }}</p>
      <p><strong>Pasajero:</strong> {{ tripInfo.numeroPasajero }}</p>
      <p><strong>Ubicación de Origen:</strong> {{ originName }}</p>
      <p><strong>Ubicación de Destino:</strong> {{ destinationName }}</p>
      <p><strong>Estado:</strong> {{ tripInfo.estado ? 'Activo' : 'Inactivo' }}</p>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const map = ref(null);
const directionsService = ref(null);
const directionsRenderer = ref(null);
const tripInfo = ref({});
const originName = ref('');
const destinationName = ref('');
const geocoder = new google.maps.Geocoder();

onMounted(() => {
  const tripId = localStorage.getItem('tripId'); 

  if (!tripId) {
    console.error('No hay identificador de viaje.');
    return;
  }

  const initGoogleServices = () => {
    directionsService.value = new google.maps.DirectionsService();
    directionsRenderer.value = new google.maps.DirectionsRenderer({
      map: map.value.$mapObject,
      suppressMarkers: false,
    });

    fetchTripInfo(tripId);
  };

  if (window.google) {
    initGoogleServices();
  } else {
    window.addEventListener('google-maps-loaded', initGoogleServices);
  }
});

async function fetchTripInfo(tripId) {
  try {
    console.log("Fetching trip info for ID:", tripId);

    const response = await axios.get(`http://127.0.0.1:8000/api/mostrarViaje/${tripId}`);
    console.log("API Response:", response.data);
    tripInfo.value = response.data.viaje;
    console.log('Información del viaje obtenida:', tripInfo.value);

    if (tripInfo.value && tripInfo.value.UbicacionPasajero && tripInfo.value.UbicacionDestino) {
      getPlaceName(tripInfo.value.UbicacionPasajero, originName);
      getPlaceName(tripInfo.value.UbicacionDestino, destinationName);
      drawRoute();
    } else {
      console.error('Información del viaje incompleta:', tripInfo.value);
    }
  } catch (error) {
    console.error('Error al obtener la información del viaje:', error);
  }
}

function drawRoute() {
  if (tripInfo.value.UbicacionPasajero && tripInfo.value.UbicacionDestino && directionsService.value && directionsRenderer.value) {
    console.log("Drawing route with origin:", tripInfo.value.UbicacionPasajero, "and destination:", tripInfo.value.UbicacionDestino);
    
    const originCoords = tripInfo.value.UbicacionPasajero.split(',').map(coord => parseFloat(coord.trim()));
    const destinationCoords = tripInfo.value.UbicacionDestino.split(',').map(coord => parseFloat(coord.trim()));
    
    const origin = new google.maps.LatLng(originCoords[0], originCoords[1]);
    const destination = new google.maps.LatLng(destinationCoords[0], destinationCoords[1]);

    if (!destination || isNaN(destination.lat()) || isNaN(destination.lng())) {
      console.error('Invalid latitude or longitude for destination.');
      return;
    }

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
        directionsRenderer.value.setMap(map.value.$mapObject);
      } else {
        console.error('Error al obtener la ruta: ' + status);
      }
    });
  } else {
    console.log("Waiting for origin and destination to be set.");
  }
}

function getPlaceName(latlng, placeNameRef) {
  const [lat, lng] = latlng.split(',').map(coord => parseFloat(coord.trim()));
  geocoder.geocode({ location: { lat, lng } }, (results, status) => {
    if (status === 'OK' && results[0]) {
      const addressParts = results[0].formatted_address.split(',');
      if (addressParts.length > 1) {
        placeNameRef.value = addressParts.slice(1).join(',').trim();
      } else {
        placeNameRef.value = results[0].formatted_address;
      }
    } else {
      console.error('Geocoder failed due to: ' + status);
    }
  });
}

</script>

<style scoped>

.container-map {
  border: 5px solid #AEBBFF;
  width: 98%;
  height: 60rem;
  margin-top: 3rem;
}
.container-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 60rem;

}
.info {
  border: 2px solid #000;
  border-radius: 1rem;
  padding: 2rem;
  background-color: #f9f9f9;
  width: 80%;
  height: 50rem;
  text-align: center;
}
.info h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.info p {
  font-size: 1.8rem;
  margin-top: 4rem;
  
}
@media (min-width: 1024px) {
  
  .info-travel {
    margin-left: -2rem;
  }
  .container-map {
    width: 99%;
    height: 60rem;
  }
  .container-info {
    width: 99%;
    height: 60rem;
  }
  .global {
   display: flex;
   flex-direction: row-reverse;
}
}
</style>
