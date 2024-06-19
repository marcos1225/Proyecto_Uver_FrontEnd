<!-- UpdateUser.vue -->
<script setup>
import { ref } from 'vue';
import { usePhoneStore } from '../stores/usePhoneStore'; 
import BackBotton from './BackBotton.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const phoneStore = usePhoneStore();

const backLink = route.query.backLink || '/enter-code';
const phoneNumber = phoneStore.getPhoneNumber;

const name = ref('');
const apellido = ref('');
const cedula = ref('');
const contrasena = ref('');

const submitCode = async () => {
  if (!name.value || !apellido.value || !cedula.value || !contrasena.value) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Debe llenar todos los campos',
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
    const response = await axios.put(`http://127.0.0.1:8000/api/actualizar-usuario/${phoneNumber}`, {
     cedula: cedula.value,
      nombre: name.value,
      apellido: apellido.value,
      clave: contrasena.value
    });

    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Usuario actualizado exitosamente',
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

    console.log('Usuario actualizado:', response.data);
    router.push('/');
  } catch (error) {
    console.error('Error al actualizar el usuario:', error.response ? error.response.data : error.message);

    let errorMessage = 'Ocurrió un error al actualizar el usuario';
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
  <div class="container-form">
    <div class="form-title">
      <h1>Ingrese sus datos personales</h1>
    </div>
    <form action="" class="formulario">
      <div class="container-nombre">
        <div class="label-nombre">
          <label for="name">Nombre</label>
        </div>
        <div class="input-nombre">
          <input type="text" id="name" name="name" v-model="name" required>
        </div>
      </div>
      <div class="container-apellido">
        <div class="label-apellido">
          <label for="apellido">Apellido</label>
        </div>
        <div class="input-apellido">
          <input type="text" id="apellido" name="apellido" v-model="apellido" required>
        </div>
      </div>
      <div class="container-cedula">
        <div class="label-cedula">
          <label for="cedula">Cedula</label>
        </div>
        <div class="input-cedula">
          <input type="text" id="cedula" name="cedula" v-model="cedula" required>
        </div>
      </div>
      <div class="container-contrasena">
        <div class="label-contrasena">
          <label for="contrasena">Contrasena</label>
        </div>
        <div class="input-contrasena">
          <input type="password" id="contrasena" name="contrasena" v-model="contrasena" required>
        </div>
      </div>
    </form>
  </div>

  <div id="button-next">
    <button class="next-button" @click="submitCode">Siguiente
      <img src="../assets/img/flecha-correcta.png" alt="" class="next-icon">
    </button>
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
.label-nombre, .label-apellido, .label-cedula, .label-contrasena {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  color: #7f7b7b;
}
.input-nombre input, .input-apellido input, .input-cedula input, .input-contrasena input {
  width: 20rem;
  border-radius: 1rem;
  height: 3rem;
  background-color: #ddd;
  border: 0;
  text-align: center;
}
#button-next {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 2rem;
  margin-top: -10rem;
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
</style>
