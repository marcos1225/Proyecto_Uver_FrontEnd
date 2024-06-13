<script setup>
import BackBotton from './BackBotton.vue';
import { useRoute } from 'vue-router';

const route = useRoute();


const backLink = route.query.backLink || '/enter-code';
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
                    <Label for="name">Nombre</Label>
                </div>
                <div class="input-nombre">
                    <input type="text" id="name" name="name" required>
                </div>
                
            </div> 
            <div class="container-apellido">
                <div class="label-apellido">
                    <Label for="apellido">Apellido</Label>
                </div>
                <div class="input-apellido">
                <input type="text" id="apellido" name="apellido" required>
                </div>
               
            </div> 
            <div class="container-cedula">
                <div class="label-cedula">
                    <Label for="cedula">Cedula</Label>
                </div>
                <div class="input-cedula">
                <input type="number" id="cedula" name="cedula" required>
                </div>
            </div> 
            <div class="container-contrasena">
                <div class="label-contrasena"> 
                <Label for="contrasena">Contrasena</Label>
                </div>
                <div class="input-contrasena">
                <input type="password" id="contrasena" name="contrasena" required>
                </div>
            </div> 
        </form>
        </div>
       
        <div id="button-next">
            <RouterLink to="/" class="router-link">
        <button class="next-button" @click="submitCode">Siguiente
        <img src="../assets/img/flecha-correcta.png" alt="" class="next-icon">
        </button>
             </RouterLink>
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
    
   .input-nombre input, .input-apellido input, .input-cedula  input, .input-contrasena input {
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
.router-link {
    text-decoration: none;
}

</style>