<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container-searchDriver">
        <div class="searchDriver-title">
        <h1>Buscando Conductor...</h1>
        <p>Esto podria tardar unos minutos...</p>
        <p>Agradecemos de antemano la espera </p>
        <div class="searchDriver-button">
            <RouterLink to="/view-trip" class="link">
            <button class="button auxiliar">Continuar</button>
        </RouterLink>
        </div>
        </div>
        <div class="searchDriver-img">
            <img src="../assets/img/conductor.jpg" alt="auto en movimiento">
            <div class="searchDriver-button">
             <RouterLink to="/view-trip" class="link">
            <button class="button">Continuar</button>
        </RouterLink>
        </div>
        </div>
         
    </div>
     
</template>

<style scoped>
.container-searchDriver {
 text-align: center;
 margin-top: 3rem;
 background-color: #fff;
 border-radius: 2rem;
 color: #000;
 display: flex;
 flex-direction: column;
 gap: 2rem;
}
.searchDriver-img img {
    width: 100%;
}

h1 {
    font-size: 3rem;
}
p {
    font-size: 2.5rem;
}

.button {
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 3rem;
    padding: 1.5rem;
    border-radius: 2rem;
    transition: transform 0.2s ease-in-out;

}
.button:hover {
    cursor: pointer;
    transform: scale(1.1);
}
.auxiliar {
    display: none;
}
.link {
    text-decoration: none;
}
@media (min-width: 1024px) {
    
    .searchDriver-button {
        margin-top: -3rem;
    }
    .container-searchDriver {
        flex-direction: row;
    }
    .searchDriver-img, .searchDriver-title {
        width: 50%;
    }
    .button {
        display: none;
    }
    .auxiliar  {
        display: block;
        margin-top: 6rem;
        margin-left: 20rem;
    }
}

</style>