<script setup>

</script>

<template>
    <div class="container-global">
    <div class="container-map">

    </div>
    <section class="container-info-travel">
        <h1>Realizar Viaje</h1>
        <div class="input-ubication">
            <img class="icon-cuadrado" src="../assets/img/blanco.png" alt="">
            <input type="text" placeholder="Ingresar Ubicación">
            <img class="icon-navegar" src="../assets/img/icons8-location-26.png" alt="">
        </div>
        <div class="input-ubication">
            <img class="icon-cuadrado" src="../assets/img/blanco.png" alt="">
            <input type="text" placeholder="Ingresar Destino">
            <img class="icon-navegar" src="../assets/img/navegar.png" alt="">
        </div>
        <div class="button-buscar">
            <button>Buscar</button>
        </div>
    </section>
</div>
</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    padding-top: 1.5rem;
}
.container-map {
    margin-top: 5rem;
    margin-left: 0.7rem;
    width: 95%;
    height: 30rem;
    border: 5px solid #AEBBFF;
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
    font-size: 2rem;
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
.container-info-travel {
    text-align: center;
    width: 100%;
    height: 40rem;
    background-color: #ddd;
    margin-top: 4rem;
    border-radius: 4rem;
}
.button-buscar {
    margin-top: 5rem;
}
.button-buscar button{
    width: 17rem;
    height: 4rem;
    border-radius: 2rem;
    border: 0;
    font-size: 2.5rem;
    cursor: pointer;
    background-color: white;
}
.button-buscar button:active {
    background-color: black;
    color: white;
}

@media (min-width: 1024px) {
    .container-global {
        display: flex;
        flex-direction: row-reverse;
        gap: 2rem;
    }
    .container-map {
        margin-top: 2rem;
       height: 55rem;
       margin-right: 0.5rem;   
     }
     .container-info-travel {
        height: 45rem;
        width: 50rem;
        margin-left: 2rem;
     }
     .input-ubication{
        width: 30rem;
        
    }
    .input-ubication input{
        font-size: 1.5rem;
    }
    h1 {
        margin-bottom: 6rem;;
    }

}
</style>