<script setup>
import { RouterLink } from 'vue-router';
</script>

<template> 
 <header class="container-header">
    <div class="Header-title">
        <RouterLink to="/" class="router-style"><p class="Header-tittle-nombre">Uver</p> </RouterLink>
    </div>
    <div class="Header-Bottons">
        <div class="Header-Botton-Login">
          <RouterLink to="/login"> <button class="Botton">Iniciar sesión</button> </RouterLink>
        </div>
        <div class="Header-Botton-Register"> 
          <RouterLink to="/register"> <button class="Botton">Registrarse</button> </RouterLink>
        </div>
    </div>
 </header>
</template>

<style >
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
    height: 9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    margin-right: 1rem;
}
.Header-tittle-nombre {
    font-size: 4.6rem;
    font-weight: bold;
    margin-left: 2rem;  
}
.Header-Bottons {
    margin-right: 2rem;
    display: flex;
    gap: 2rem;
}
.Header-Botton-Register, .Header-Botton-Login {
    font-size: 2rem;
}
.Botton {
    border: none;
    padding: 1rem;
    font-size: 1.5rem;
    color: white;
    background-color: black;
    transition: transform 0.3s ease-in-out;
}
.Botton:hover {
    border-radius: 2rem;
    color: black;
    background-color: #DDD;
    cursor: pointer;
    transform: scale(1.1);
}
.router-style {
    text-decoration: none;
    color: white;
    font-weight: bold;
}
@media (min-width: 1024px) {
    .Botton {
    font-size: 2rem;
    color: white;
    background-color: black;
}
}
</style>
