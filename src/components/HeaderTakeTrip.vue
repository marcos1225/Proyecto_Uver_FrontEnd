<script setup>
import { RouterLink } from 'vue-router';
</script>

<template> 
 <header class="container-header">
    <div class="Header-title">
        <RouterLink to="/" class="router-style"><p class="Header-tittle-nombre">Uver</p> </RouterLink>
    </div>
    <div class="Header-icon">
        <div class="Header-icon-user">
            <RouterLink to="/"> 
            <button>Cerrar sesion</button>
             </RouterLink>
            <img src="../assets/img/usuario.png" alt="">
        </div>
        
    </div>
 </header>
</template>

<style scoped>
html {
   font-size: 62.5%;
   margin: 0;
   padding: 0;
}
body {
    font-family: Arial, Helvetica, sans-serif;
}
*, *:before, *:after {
    box-sizing: inherit;
}
.container-header {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ddd;
    
    margin-right: 1rem;
}
.Header-tittle-nombre {
    font-size: 4.6rem;
    font-weight: bold;
    margin-left: 2rem; 
    color: black; 
}
.Header-icon-user {
    display: flex;
    align-items: center;
    gap: 2rem;
}
.Header-icon-user button {
    border: none;
    background-color: #ddd;
    color: black;
    font-size: 1.8rem;
    border-radius: 1rem;
    padding: 1.2rem;
    transition: transform 0.3s ease-in-out; 
}
.Header-icon-user button:hover {
    background-color: black;
    color: white;
    cursor: pointer;
    transform: scale(1.1);
}
.Header-icon-user img {
    width: 6rem;
    height: 6rem;
    background-color: white;
    border-radius: 50%;
    margin-right: 1rem;
}
</style>
