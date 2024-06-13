<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  backLink: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="botton-back">
    <p>Atrás</p>
    <RouterLink :to="backLink ? backLink : '/'">
      <button class="boton-atras">
        <img class="atras" src="../assets/img/atras.png" alt="flecha atras">
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
p {
  font-size: 2rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 1rem;
}
.atras {
  width: 3.2rem;
  margin-top: -3rem;
  padding-left: 1rem;
}
.boton-atras {
  background-color: inherit;
  border: none;
}
.botton-back {
  height: 7rem;
}
.boton-atras:hover {
  cursor: pointer;
}
</style>
