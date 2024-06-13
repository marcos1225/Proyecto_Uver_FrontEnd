<script>
import BackBotton from './BackBotton.vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    BackBotton
  },
  data() {
    return {
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      backLink: '/'
    };
  },
  created() {
    const route = useRoute();
    this.backLink = route.query.backLink || '/enter-code';
  },
  methods: {
    resendCode() {
      // Implementa la lógica para reenviar el código
    },
    submitCode() {
      // Implementa la lógica para enviar el código
    },
    moveToNext(inputNumber) {
      if (this[`digit${inputNumber}`].length === 1 && inputNumber < 4) {
        this.$refs[`digit${inputNumber + 1}Input`].focus();
      }
    }
  }
};
</script>

<template>
  <BackBotton :backLink="backLink" />
  <div class="container">
    <h1>Te damos la bienvenida</h1>
    <h2>Inicia sesion para continuar</h2>
    <div class="input-container">
        <input type="password" name="password" id="password" placeholder="Introduce la contraseña">
    </div>
    <div class="button-code">
      <button @click="resendCode">Enviar codigo</button>
    </div>
  </div>
  <RouterLink to="/enter-password" class="link-createprofile"> 
  <div id="button-next">
    <button class="next-button" @click="submitCode">Siguiente
      <img src="../assets/img/flecha-correcta.png" alt="" class="next-icon">
    </button>
  </div>
  </RouterLink>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f2f2f2;
}

.container {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    height: 45rem;
    margin-top: -1.8rem;
}
.container h1 {
    font-size: 4rem;
}
.container h2 {
    font-size: 3.5rem;
}

h2 {
    font-size: 3.4rem;
    margin-bottom: 2rem;
    font-weight: normal;
}

.input-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 6rem;
}
.input-container input {
    background-color: #ddd;
    width: 25rem;
    height: 4rem;
    font-size: 2rem;
    border-radius: 1.5rem;
    text-align: center;
    border: 0;
    padding: 0.5rem;
}

.code-input {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 24px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.button-code {
    margin-top: 3rem;
    
}

button {
    background-color: #ddd;
    color: black;
    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    margin: 5px;
    font-size: 2rem;
    text-align: center;
    position: relative;
}

#button-next {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 2rem;
    margin-top: -15rem;
    height: 28rem;
}
.next-button {
    font-size: 2.4rem;
    height: 4rem;
    width: 12rem;
    padding-bottom: 2rem;
    font-weight: bold;
    
}
img.next-icon {
    position: absolute;
    bottom: -17px; 
    right: 45px;
    margin-bottom: 5px; 
    width: 5rem;
    
}
.link-createprofile {
    text-decoration: none;
}
</style>
