<template>
    <div class="global">
      <div class="map-container">
        <GMapMap
          ref="map"
          :center="{ lat: 10, lng: -84.2927 } "
          :zoom="14"
          style="width: 100%; height: 39rem;"
        ></GMapMap>
      </div>
      <div class="drive-section">
        <h2>Conducir</h2>
        <p>Aquí aparecerán los viajes disponibles en su zona</p>
        <div class="available-trip">
          <div class="trip-info">
            <h3>Viaje disponible</h3>
            <p>De: Universidad de Costa Rica</p>
            <p>A: Parque Mario Cañas Ruiz</p>
          </div>
          <div class="trip-price">
            <p>₡ 1.500</p>
            <div class="trip-actions">
            <button class="cancel-button">
              <img src="../assets/img/eliminar.png" alt="Cancel" />
            </button>
            <button class="accept-button" @click="drawRoute">
              <img src="../assets/img/cheque.png" alt="Accept" />
            </button>
          </div>
          </div>
          
        </div>
        <div class="available-trip">
          <div class="trip-info">
            <h3>Viaje disponible</h3>
            <p>De: Universidad de Costa Rica</p>
            <p>A: Parque Mario Cañas Ruiz</p>
          </div>
          <div class="trip-price">
            <p>₡ 3.000</p>
            <div class="trip-actions">
            <button class="cancel-button">
              <img src="../assets/img/eliminar.png" alt="Cancel" />
            </button>
            <button class="accept-button" @click="drawRoute">
              <img src="../assets/img/cheque.png" alt="Accept" />
            </button>
          </div>
          </div>
          
        </div>
        <div class="available-trip">
          <div class="trip-info">
            <h3>Viaje disponible</h3>
            <p>De: Santa Cruz</p>
            <p>A: Bagaces Guancaste</p>
          </div>
          <div class="trip-price">
            <p>₡ 7.000</p>
            <div class="trip-actions">
            <button class="cancel-button">
              <img src="../assets/img/eliminar.png" alt="Cancel" />
            </button>
            <button class="accept-button" @click="drawRoute">
              <img src="../assets/img/cheque.png" alt="Accept" />
            </button>
          </div>
          </div>
          
        </div>
      </div>
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
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 1rem;
  }
  
  .logo {
    font-size: 3rem;
    font-weight: bold;
  }
  
  .profile-icon img {
    width: 3rem;
    height: 3rem;
  }
  
  .map-container {
    width: 100%;
    height: 40rem;
    border: 5px solid #AEBBFF;
    box-sizing: border-box;
    margin-top: 3rem;
  }
  
  .drive-section {
    padding: 1rem;
    background-color: #ddd;
    text-align: center;
    line-height: 1;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    margin-top: 2rem;
  }
  
  .drive-section h2 {
    font-size: 3rem;
  }
  .drive-section p {
    font-size: 1.7rem;
  }
  
  .available-trip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    margin: 3rem 0;
    background-color: #e0ffc7;
    border: 2px solid black;
    border-radius: 1rem;
    line-height: normal;
  }
  
  .trip-info h3 {
    font-size: 2rem;
  }
  
  .trip-info p {
    margin: 0.5rem 0;
    font-size: 1.6rem;
  }
  
  .trip-price p {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .trip-actions {
    display: flex;
    gap: 2rem;
    transition: transform 0.3s ease-in-out;
    margin-top: 4rem;
  }
  
  .cancel-button,
  .accept-button {
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
  }
  
  .accept-button:hover {
    transform: scale(1.1);
  }
  .cancel-button:hover {
    transform: scale(1.1)
  }
  
  .cancel-button img,
  .accept-button img {
    width: 5rem;
    height: 5rem;
  }
  @media (min-width: 1024px) {
      .global {
        width: 100%;
        height: 70rem;
        display: flex;
        gap: 2rem;
        flex-direction: row-reverse;
      }
      .map-container {
        width: 50%;
      }
      .drive-section {
        width: 50%;
      }
  }
  </style>