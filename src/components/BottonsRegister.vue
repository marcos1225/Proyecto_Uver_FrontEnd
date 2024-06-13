<!-- ButtonComponent.vue -->
<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import BackBotton from './BackBotton.vue';

const props = defineProps({
  passengerButtonText: {
    type: String,
    required: true
  },
  passengerButtonLink: {
    type: String,
    required: true
  },
  driverButtonText: {
    type: String,
    required: true
  },
  driverButtonLink: {
    type: String,
    required: true
  }
});
</script>

<template>
  <BackBotton />
  <div class="container-Bottons">
    <div class="Botton-register-passenger sombra">
      <RouterLink :to="passengerButtonLink">
        <button class="Botton-register">{{ passengerButtonText }}</button>
      <img class="img-siguiente" src="../assets/img/flecha-correcta.png" alt="imagen de siguiente pagina">
      </RouterLink>
    </div>
    <div class="Botton-register-driver sombra">
      <RouterLink :to="driverButtonLink">
        <button class="Botton-register">{{ driverButtonText }}</button>
      <img class="img-siguiente" src="../assets/img/flecha-correcta.png" alt="imagen de siguiente pagina">
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
*, *:before, *:after {
  box-sizing: inherit;
}

.img-siguiente {
  width: 4.5rem;
  margin-top: -8rem;
}

.container-Bottons {
  width: 100%;
  height: 70rem;
  text-align: center;
  margin-top: -9rem;
  display: grid;
  place-content: center;
  background-color: white;
}
.Botton-register-passenger, .Botton-register-driver {
  margin-top: 4rem;
  width: 90%;
  margin-left: 2.5rem;
}
.sombra {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
}
.Botton-register {
  height: 5rem;
  background-color: inherit;
  color: black;
  text-align: center;
  border: none;
  font-size: 3rem;
  padding: 6rem;
  cursor: pointer;
  font-weight: bold;
}
@media (min-width: 1024px) {
    .container-Bottons {
      width: 79%;
     margin: 2rem auto;
      display: flex;
      height: 25rem;
      gap: 5rem;
    }
}
</style>
