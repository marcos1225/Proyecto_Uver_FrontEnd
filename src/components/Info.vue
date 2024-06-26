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
           <h1>Queremos saber más sobre ti!!!</h1>
           <p class="text">Si gustas puedes darle al botón de crear perfil para que añadas más información sobre ti</p>
           <p class="text desktop">¡Oh bien! Solicita un viaje de una vez por todas!</p>
           <p class="text mobile">¡Oh bien! Solicita un viaje de una vez por todas!</p>
            <div class="buttons mobile">
                <RouterLink to="/create-profile">
                <button class="button">Crear Perfil</button>
                </RouterLink>
                <RouterLink to="/take-trip">
                <button class="button">Solicitar Viaje</button>
                </RouterLink>
            </div>
           <div class="buttons desktop">
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
    height: 55rem;
    margin-top: 3rem;
}

.container-info {
    width: 90%;
    height: 100%;
    margin-left: 2.5rem;
    text-align: center;
    background-color: #ddd;
    border-radius: 3rem;
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
    transition: transform 0.3s ease-in-out;
}

.button:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.desktop {
    display: none;
}

@media (min-width: 1024px) {
    .container-global {
        flex-direction: row;
        height: 40rem;
    }
    
    .desktop {
        display: block;
    }
    
    .mobile {
        display: none;
    }
    
    .text {
        font-size: 3rem;
    }
    
    .container-info {
        margin-left: 6rem;
        margin-top: -3rem;
    }
    
    h1 {
        font-weight: 600;
    }
    
    .button {
        width: 15rem;
        font-size: 2rem;
    }
}
</style>
