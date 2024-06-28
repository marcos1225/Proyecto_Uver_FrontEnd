<script setup>
import { useRoute } from 'vue-router';
import BackBotton from './BackBotton.vue';
const route = useRoute();
const backLink = route.query.backLink || '/register-car';
</script>

<template>
  <BackBotton :backLink="backLink" />
  <div class="container-form">
    <div class="form-title">
      <h1>Ingrese los datos de la licencia</h1>
    </div>
    <form action="" class="formulario">
      <div class="container-tipo">
        <div class="label-tipo">
          <label for="name">Tipo</label>
        </div>
        <div class="input-tipo">
          <input type="text" id="name" name="name" required>
        </div>
      </div>
      <div class="container-fecha-vencimiento">
        <div class="label-fecha-vencimiento">
          <label for="fecha-vencimiento">Fecha de vencimiento</label>
        </div>
        <div class="input-fecha-vencimiento">
          <input type="date" id="fecha-vencimiento" name="fecha-vencimiento" required>
        </div>
      </div>
    </form>
    <div id="button-next">
      <RouterLink to="/trip-management">
      <button class="next-button">Siguiente
        <img src="../assets/img/flecha-correcta.png" alt="" class="next-icon">
      </button>
    </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.form-title h1 {
  font-size: 3.5rem;
  text-align: center;
}
.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.label-tipo, .label-fecha-vencimiento {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  color: #7f7b7b;
}
.input-tipo input, .input-fecha-vencimiento input {
  width: 20rem;
  border-radius: 1rem;
  height: 3rem;
  background-color: #ddd;
  border: 0;
  text-align: center;
  font-size: 2rem;
}
#button-next {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 2rem;
  margin-top: -5rem;
  height: 20rem;
}
.next-button {
  font-size: 2.4rem;
  height: 4.5rem;
  width: 12rem;
  padding: 1rem 0;
  background-color: #ddd;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
.next-button:hover {
  background-color: #eee;
}
img.next-icon {
  margin-top: -1rem;
  width: 3.2rem;
  height: auto;
}
.container-form {
  margin-top: 2rem;
  
}
@media (min-width: 1024px) {
  .container-form {
    margin-top: -3rem;
  }
  #button-next {
    margin-top: 1rem;
  }
}
</style>
