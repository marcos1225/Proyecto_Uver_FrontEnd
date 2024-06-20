<script setup>
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import BackBotton from './BackBotton.vue';

const route = useRoute();
const backLink = route.query.backLink || '/register-number';
</script>
<template>  
 <BackBotton :backLink="backLink" />
    <div class="container-global">
        <div class="container-info">
           <h1>Queremos saber mas sobre ti</h1>
           <p class="text">Si gustas puedes darle al boton de crear perfil para que añadas más información sobre ti para conocerte más</p>
           <p class="text desktop">Oh bien! Solicita un viaje de una vez por todas!</p>
           <div class="buttons desktop">
                <RouterLink to="/create-profile">
                <button class="button">Crear Perfil</button>
                </RouterLink>
                <RouterLink to="/take-trip">
                <button class="button">Solicitar Viaje</button>
                </RouterLink>
            </div>
        </div>
        <div class="container-img">
            <img src="../assets/img/uver.webp" alt="Uver">
            <p class="text mobile">Oh bien! Solicita un viaje de una vez por todas!</p>
            <div class="buttons mobile">
                <RouterLink to="/create-profile">
                <button class="button">Crear Perfil</button>
                </RouterLink>
                <RouterLink to="/take-trip">
                <button class="button">Solicitar Viaje</button>
                </RouterLink>
            </div>
           
        </div>
    </div>
    
</template>


<style scoped>
.container-global {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60rem;
    margin-top: 3rem;
}
.container-info {
    width: 90%;
    margin: 0 2rem;
    text-align: center;
    background-color: #ddd;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
}

.container-info h1 {
    text-align: center;
    font-size: 3.5rem;
    padding: 1rem;
}
.text {
    font-size: 2.4rem;
    line-height: 1.2;
    padding: 1rem;
}
.buttons {
    margin-top: 2rem;
    text-align: center;
}
.container-img {
    height: 60rem;
    text-align: center;
}
.container-img img {
    width: 100%;
    height: 100%;
}
.button {
    margin-left: 2rem;
    border: none;
    background-color: black;
    color: white;
    width: 10rem;
    height: 4rem;
    font-size: 1.5rem;
    border-radius: 2rem;
    padding: 1rem;
   
}
.desktop {
    display: none;
}
.button:hover {
    cursor: pointer;
}
@media (min-width: 1024px) {
    .container-global {
        flex-direction: row;
    }
    .desktop {
        display: block;
    }
    .mobile {
        display: none;
    }
    .text {
        font-size: 2.7rem;
    }
}
</style>