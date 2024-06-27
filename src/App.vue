<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import HeaderTakeTrip from './components/HeaderTakeTrip.vue';
import HeaderGlobal from './components/HeaderGlobal.vue';

const route = useRoute();

const currentHeader = computed(() => {
<<<<<<< HEAD
  if (route.path === '/take-trip' || route.path === '/confirm-travel' || route.path === '/continue-jorney' || route.path === '/view-trip' || route.path === '/trip-management') {
=======
  if (route.path === '/take-trip' || route.path === '/confirm-travel' || route.path === '/continue-jorney' || route.path === '/view-trip') {
>>>>>>> 8ba9b90fd2622d5d403cfad919aff3c7df760abd
    return HeaderTakeTrip;
  } else if (route.path === '/enter-code' || route.path === '/enter-code-login' || route.path === '/enter-password' || route.path === '/register-number' || route.path === '/create-profile' || route.path === '/register-number-login' || route.path === '/register-car' || route.path === '/register-license')  {
    return HeaderGlobal;
  } else {
    return Header;
  }
});
</script>

<template>
  <component :is="currentHeader" />
  <RouterView />
</template>
