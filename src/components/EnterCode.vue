<script>
import BackBotton from './BackBotton.vue';

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
    this.backLink = this.$route.query.backLink || '/register-number';
    this.context = this.$route.query.context || '/';  // Lee el parámetro de consulta y almacénalo
  },
  methods: {
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
    <p>Introduce el código de cuatro dígitos que te hemos enviado al número ingresado</p>

    <div class="input-container">
      <input ref="digit1Input" type="text" v-model="digit1" @input="moveToNext(1)" class="code-input" maxlength="1" id="digit-1" required>
      <input ref="digit2Input" type="text" v-model="digit2" @input="moveToNext(2)" class="code-input" maxlength="1" id="digit-2" required>
      <input ref="digit3Input" type="text" v-model="digit3" @input="moveToNext(3)" class="code-input" maxlength="1" id="digit-3" required>
      <input ref="digit4Input" type="text" v-model="digit4" @input="moveToNext(4)" class="code-input" maxlength="1" id="digit-4" required>
    </div>
    <div class="button-code">
      <button class="button resend" @click="resendCode">Reenviar</button>
    </div>
  </div>
  
  <div id="button-next">
    <RouterLink to="/create-profile"class="link-createprofile">
    <button class="next-button button next" @click="submitCode">Siguiente
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

p {
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
}

.button {
    background-color: #ddd;
    color: black;
    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    margin: 5px;
    font-size: 2rem;
    text-align: center;
    position: relative;
}
.resend:hover {
    background-color: black;
    color: white;
    cursor: pointer;
}
.next:hover {
    background-color: #EEEEEE;
    color: black;
    cursor: pointer;
}

#button-next {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 2rem;
    margin-top: -15rem;
    height: 20rem;
}
.next-button {
    font-size: 2.4rem;
    height: 4rem;
    width: 12rem;
    padding-bottom: 2rem;
    
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
  
    p {
      text-align: center;
        font-size: 3rem;
        line-height: 1rem;
    }
    #button-next{
      margin-top: -26rem;
      margin-right: 4rem;
    }
}
</style>
