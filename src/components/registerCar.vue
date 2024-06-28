<script setup>
import { useRoute } from 'vue-router';
import BackBotton from './BackBotton.vue';
const route = useRoute();
const backLink = route.query.backLink || '/enter-password';
</script>

<template>
  <BackBotton :backLink="backLink" />
  <div class="container-form">
    <div class="form-title">
      <h1>Ingrese los datos del automóvil</h1>
    </div>
    <form action="" class="formulario">
      <div class="container-matricula">
        <div class="label-matricula">
          <label for="matricula">Matrícula</label>
        </div>
        <div class="input-matricula">
          <input type="text" id="matricula" name="matricula" required>
        </div>
      </div>
      <div class="container-marca">
        <div class="label-marca">
          <label for="marca">Marca</label>
        </div>
        <div class="input-marca">
          <input type="text" id="marca" name="marca" required>
        </div>
      </div>
      <div class="container-modelo">
        <div class="label-modelo">
          <label for="modelo">Modelo</label>
        </div>
        <div class="input-modelo">
          <input type="text" id="modelo" name="modelo" required>
        </div>
      </div>
    </form>
    <div id="button-next">
      <RouterLink to="/register-license">
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
.label-matricula, .label-marca, .label-modelo {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  color: #7f7b7b;
}
.input-matricula input, .input-marca input, .input-modelo input {
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
  margin-top: -8rem;
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
}
</style>
