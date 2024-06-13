<script setup>
import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';
import BackBotton from './BackBotton.vue';

const props = defineProps({
  userlink: String
});

const route = useRoute();

const backLink = computed(() => route.query.backLink || '/register');
</script>

<template>
  <BackBotton :backLink="backLink" />
  <div class="container-registrar-numero">
    <div class="registrar-titulo">
      <p>Ingresa tu número de teléfono</p>
    </div>
    <div class="register-input">
      <input type="number" placeholder="Introducir número de teléfono" required>
    </div>
    <div class="register-button">
      <RouterLink :to="props.userlink">
        <button class="continuar-button">Continuar</button>
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
.container-registrar-numero {
  text-align: center;
}
.registrar-titulo {
  margin-bottom: 5rem;
}
.registrar-titulo p {
  line-height: 4rem;
  font-size: 3.5rem;
  font-weight: normal;
}
.register-input input {
  width: 28rem;
  height: 4rem;
  border-radius: 2rem;
  padding: 1rem;
  background-color: #ddd;
  border: none;
  font-size: 2rem;
}
.register-button button {
  margin-top: 3rem;
  border: none;
  background-color: black;
  color: white;
  width: 28rem;
  height: 4rem;
  font-size: 3.5rem;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;
}
</style>

