<script setup>
import { RouterLink } from 'vue-router';
</script>

<template> 
 <header class="container-header">
    <div class="Header-title">
        <RouterLink to="/" class="router-style"><p class="Header-tittle-nombre">Uver</p> </RouterLink>
    </div>
    
 </header>
</template>

<style scoped>

.container-header {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    margin-right: 1rem;
}
.Header-tittle-nombre {
    font-size: 4.6rem;
    font-weight: bold;
    margin-left: 2rem; 
    color: white;
}
</style>
