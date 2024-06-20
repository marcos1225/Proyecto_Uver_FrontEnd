<script setup>
import { ref, computed, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePhoneStore } from '../stores/usePhoneStore'; 
import BackBotton from './BackBotton.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const props = defineProps({
  userlink: String
});

const route = useRoute();
const router = useRouter();
const phoneStore = usePhoneStore();

const backLink = computed(() => route.query.backLink || '/register');
const phoneNumber = ref('');
const errorMessage = ref('');

const registerPhoneNumber = async () => {
  if (!phoneNumber.value) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Debe llenar los campos',
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        content: 'swal2-content-custom',
        confirmButton: 'swal2-confirm-button-custom'
      },
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
    return;
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/crear-registrar-usuario-pasajero', {
      numero: phoneNumber.value
    });
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Número registrado exitosamente',
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        content: 'swal2-content-custom',
        confirmButton: 'swal2-confirm-button-custom'
      },
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
    // Guardar el número en el store
    phoneStore.setPhoneNumber(phoneNumber.value);
    router.push(props.userlink);
  } catch (error) {
    console.error('Error al registrar el número:', error.response ? error.response.data : error.message);
    let errorMessage = 'Ups! Parece que este numero ya esta en uso';
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage,
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        content: 'swal2-content-custom',
        confirmButton: 'swal2-confirm-button-custom'
      },
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
};
</script>

<template>
  <BackBotton :backLink="backLink" />
  <div class="container-registrar-numero">
    <div class="registrar-titulo">
      <p>Ingresa tu número de teléfono</p>
    </div>
    <div class="register-input">
      <input 
        type="number" 
        placeholder="Introducir número de teléfono" 
        v-model="phoneNumber"
        required 
      >
    </div>
    <div class="register-button">
      <button class="continuar-button" @click="registerPhoneNumber">Continuar</button>
    </div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
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
