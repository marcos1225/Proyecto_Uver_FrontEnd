<script setup>
import { ref, onMounted } from 'vue';
import { usePlacesStore } from '../stores/usePlacesStore';
import { useRouter } from 'vue-router';

const placesStore = usePlacesStore();
const router = useRouter();
const input = ref('');

onMounted(() => {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    placesStore.setOrigin({ lat: latitude, lng: longitude });
  });
});

async function selectSuggestion(suggestion) {
  await placesStore.setDestination(suggestion.place_id);
  input.value = suggestion.description;
  placesStore.suggestions = [];
}

async function fetchSuggestions() {
  if (input.value) {
    await placesStore.fetchSuggestions(input.value);
  } else {
    placesStore.suggestions = [];
  }
}

function handleBuscar() {
  if (placesStore.destination) {
    router.push('/confirm-travel');
  } else {
    console.error('Destination not set');
  }
}
</script>

<template>
  <div class="container-global">
    <div class="container-map">
      <GMapMap
        ref="map"
        :center="{ lat: 10, lng: 10 }"
        :zoom="7"
        style="width: 100%; height: 35rem;"
      ></GMapMap>
    </div>
    <section class="container-info-travel">
      <h1>Realizar Viaje</h1>
      <div class="input-ubication">
        <img class="icon-cuadrado" src="../assets/img/blanco.png" alt="">
        <input type="text" v-model="input" @input="fetchSuggestions" placeholder="A donde quieres ir?">
        <img class="icon-navegar" src="../assets/img/navegar.png" alt="">
        <ul v-if="placesStore.suggestions.length">
          <li v-for="suggestion in placesStore.suggestions" :key="suggestion.place_id" @click="selectSuggestion(suggestion)">
            {{ suggestion.description }}
          </li>
        </ul>
      </div>
      <div class="button-buscar">
        <button @click="handleBuscar">Buscar</button>
      </div>
    </section>
  </div>
</template>


<style scoped>
h1 {
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  padding-top: 1.5rem;
}
.container-map {
  margin-top: 5rem;
  margin-left: 0.7rem;
  width: 95%;
  height: 35rem;
  border: 5px solid #AEBBFF;
}
.input-ubication {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  margin: 3rem auto;
  position: relative;
}
.input-ubication input {
  width: 100%;
  border: none;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}
.icon-navegar {
  width: 2.5rem;
  height: 2.5rem;
  background-color: inherit;
}
.icon-cuadrado {
  width: 0.5rem;
}
.input-ubication ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
  top: 4rem;
}
.input-ubication li {
  cursor: pointer;
  padding: 1rem; 
  font-size: 1.8rem; 
}
.input-ubication li:hover {
  background: #eee;
}
.container-info-travel {
  text-align: center;
  width: 100%;
  height: 40rem;
  background-color: #ddd;
  margin-top: 4rem;
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
}
.button-buscar {
  margin-top: 5rem;
}
.button-buscar button {
  width: 17rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0;
  font-size: 2.5rem;
  cursor: pointer;
  background-color: white;
}
.button-buscar button:hover {
  background-color: black;
  color: white;
}
@media (min-width: 1024px) {
  .container-global {
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
  }
  .container-map {
    margin-top: 7rem;
  
    margin-right: 0.5rem;
  }
  .container-info-travel {
    height: 45rem;
    width: 50rem;
    margin-left: 2rem;
  }
  .input-ubication {
    width: 30rem;
  }
  .input-ubication input {
    font-size: 1.5rem;
  }
  h1 {
    margin-bottom: 6rem;
  }
}
</style>
