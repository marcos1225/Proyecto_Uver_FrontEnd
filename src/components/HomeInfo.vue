<script setup>
</script>
<template>
    <div class="container-home">
    <section class="container-section">
    <div class="section-info-uver-1">
        <p>Viaja a cualquier lugar con la app de Uver</p>
    </div>
    <div class="section-info-uver-2">
        <p>Pide un viaje, subete al vehiculo y relajate</p>
    </div>
    <section class="container-input">
        <div class="input-ubication">
            <img class="icon-cuadrado" src="../assets/img/blanco.png" alt="">
            <input type="text" placeholder="Ingresar Ubicación" disabled>
            <img class="icon-navegar" src="../assets/img/icons8-location-26.png" alt="">
        </div>
        <div class="input-ubication">
            <img class="icon-cuadrado" src="../assets/img/blanco.png" alt="">
            <input type="text" placeholder="Ingresar Destino" disabled>
            <img class="icon-navegar" src="../assets/img/navegar.png" alt="">
        </div>
    </section>
 </section>
 <div class="container-image">
    <img class="image-travel" src="../assets/img/Uber.jpg" alt="">
 </div>
</div>
</template>
<style scoped>
body {
    margin: 0;
    padding: 0;
}
.container-section {
    width: 100%;
    text-align: center;
    margin-top: 3rem ;
    background-color: #DDD;
    display: grid;
    place-content: center;
}
.section-info-uver-1 {
    width: 39rem;
    font-size: 4rem;
    font-weight: bold;
    padding: 1rem;
}
.section-info-uver-2 {
    font-size: 2rem;
    width: 30rem;
    margin-left: 6rem;
    margin-top: -4rem;
    
}
.container-image {
    width: 100%;
    height: auto;
}
.image-travel {
    width: 100%;
    height: auto;
}
p {
    font-family: Verdana, Geneva, Tahoma, sans-serif
}
.container-input {
    display: none;
}
@media (min-width: 1024px) {
    .container-section {
        margin-top: 20rem;
    }
    .container-home {
        display: flex;
        background-color: #DDD;
        margin-top: 4rem;
    }
    .section-info-uver-1 {
    width: 45rem;
    font-size: 5rem;
    font-weight:200;
    padding: 1rem;
    margin-top: -20rem;
}
.section-info-uver-2 {
    font-size: 2.5rem;
    width: 35rem;
    margin-top: -4rem;
    
}
.image-travel {
    width: 100%;
    height: 100%;
}
.container-input {
    display: block;
}
.input-ubication {
    width: 40rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-radius: 1rem;
    margin: 3rem auto;
}
.input-ubication  input{
    width: 27rem;
    border: none;
    font-size: 2.5rem;
    text-align: center
}
.icon-navegar {
    width: 2.5rem;
    height: 2.5rem;
    background-color: inherit;
}
.icon-cuadrado {
    width: 0.5rem;
}
.container-input {
    text-align: center;
    width: 100%;
    height: 40rem;
    background-color: #ddd;
    margin-top: 4rem;
    border-radius: 4rem;
}
}
</style>