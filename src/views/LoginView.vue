<template>
  <BottonsRegister
    passengerButtonText="Iniciar sesión como pasajero"
    passengerButtonLink="/register-number?backLink=/login"
    driverButtonText="Iniciar sesión como conductor"
    driverButtonLink="/register-number-login?backLink=/login"
  />
</template>

<script setup>
import BottonsRegister from '@/components/BottonsRegister.vue';
</script>

  

  