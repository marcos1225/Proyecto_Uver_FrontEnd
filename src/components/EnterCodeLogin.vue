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
    this.backLink = this.$route.query.backLink || '/enter-password';
    this.context = this.$route.query.context || '/';  
  },
  methods: {
    insertpassword() {
      // Implementa la lógica para la contrasena
    },
    resendCode() {
      // Implementa la lógica para reenviar el código
    },
    submitCode() {
      
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
      <input ref="digit1Input" type="text" v-model="digit1" @input="moveToNext(1)" class="code-input" maxlength="1" id="digit-1" required>
      <input ref="digit2Input" type="text" v-model="digit2" @input="moveToNext(2)" class="code-input" maxlength="1" id="digit-2" required>
      <input ref="digit3Input" type="text" v-model="digit3" @input="moveToNext(3)" class="code-input" maxlength="1" id="digit-3" required>
      <input ref="digit4Input" type="text" v-model="digit4" @input="moveToNext(4)" class="code-input" maxlength="1" id="digit-4" required>
    </div>
    <div class="button-code">
      <RouterLink to="/enter-password">
        <button class="button-action button" @click="insertpassword">Contraseña</button>
      </RouterLink>
      <button class="button-action button" @click="resendCode">Reenviar</button>
    </div>
  </div>
  
  <div id="button-next">
    <RouterLink to="/take-trip" class="link-createprofile">
    <button class="next-button button" @click="submitCode">Siguiente
      <img src="../assets/img/flecha-correcta.png" alt="" class="next-icon">
    </button>
  </RouterLink>
  </div>

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
    margin-top: 4rem;
}
.input-container input {
    background-color: #ddd;
    width: 3rem;
    border-radius: 1.5rem
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
    text-align: center;
}

.button {
    background-color: #ddd;
    color: black;
    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    margin: 1rem;
    font-size: 2rem;
    text-align: center;
    position: relative;
}
.button-action:hover {
    background-color: black;
    color: white;
}

#button-next {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 2rem;
    margin-top: -15rem;
    height: 23rem;
}
.next-button {
    font-size: 2.4rem;
    height: 4rem;
    width: 12rem;
    padding-bottom: 2rem;
}
.next-button:hover {
    background-color: #eee;
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
@media (min-width: 1024px) {
    #button-next {
      margin-top: -29rem;
      margin-right: 2rem;
    }
}
</style>
