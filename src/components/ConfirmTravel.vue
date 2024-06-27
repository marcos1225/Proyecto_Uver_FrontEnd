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
    <button class="confirm-button button" @click="saveTrip">Aceptar</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../stores/usePlacesStore';
import { usePhoneStore } from '../stores/usePhoneStore';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const placesStore = usePlacesStore();
const phoneStore = usePhoneStore();
const router = useRouter();
const map = ref(null);
const directionsService = ref(null);
const directionsRenderer = ref(null);

const DRIVER_PHONE_NUMBER = 63549134;

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

function saveTrip() {
  const origin = placesStore.origin ? `${placesStore.origin.lat}, ${placesStore.origin.lng}` : '';
  const destination = placesStore.destination ? `${placesStore.destination.lat}, ${placesStore.destination.lng}` : '';
  const passengerPhoneNumber = parseInt(phoneStore.getPhoneNumber) || 0;
  const driverPhoneNumber = DRIVER_PHONE_NUMBER;
  const estado = true;

  if (origin && destination) {
    const tripData = {
      numeroPasajero: passengerPhoneNumber,
      numeroConductor: driverPhoneNumber,
      UbicacionPasajero: origin,
      UbicacionDestino: destination,
      estado: estado
    };

    axios.post('http://127.0.0.1:8000/api/viajes', tripData)
      .then(response => {
        console.log('Viaje guardado exitosamente:', response.data);
        localStorage.setItem('tripId', response.data.idViaje); 
        Swal.fire({
          title: 'Éxito',
          text: 'El viaje se ha guardado exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          didOpen: () => {
            const popup = Swal.getPopup();
            popup.style.fontSize = '1.6rem';
            popup.style.padding = '2rem';

            const title = Swal.getTitle();
            title.style.fontSize = '2.4rem';

            const content = Swal.getHtmlContainer();
            content.style.fontSize = '1.8rem';

            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.fontSize = '1.6rem';
            confirmButton.style.padding = '1rem 2rem';
          }
        }).then(() => {
          router.push('/view-trip'); 
        });
      })
      .catch(error => {
        console.error('Error al guardar el viaje:', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al guardar el viaje.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          didOpen: () => {
            const popup = Swal.getPopup();
            popup.style.fontSize = '1.6rem';
            popup.style.padding = '2rem';

            const title = Swal.getTitle();
            title.style.fontSize = '2.4rem';

            const content = Swal.getHtmlContainer();
            content.style.fontSize = '1.8rem';

            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.fontSize = '1.6rem';
            confirmButton.style.padding = '1rem 2rem';
          }
        });
      });
  } else {
    console.error('Origin or destination is missing');
    Swal.fire({
      title: 'Error',
      text: 'La ubicación de origen o destino falta.',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      didOpen: () => {
        const popup = Swal.getPopup();
        popup.style.fontSize = '1.6rem';
        popup.style.padding = '2rem';

        const title = Swal.getTitle();
        title.style.fontSize = '2.4rem';

        const content = Swal.getHtmlContainer();
        content.style.fontSize = '1.8rem';

        const confirmButton = Swal.getConfirmButton();
        confirmButton.style.fontSize = '1.6rem';
        confirmButton.style.padding = '1rem 2rem';
      }
    });
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
