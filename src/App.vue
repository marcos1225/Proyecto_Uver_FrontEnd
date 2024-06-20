<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import HeaderTakeTrip from './components/HeaderTakeTrip.vue';
import HeaderGlobal from './components/HeaderGlobal.vue';

const route = useRoute();

const currentHeader = computed(() => {
  if (route.path === '/take-trip' || route.path === '/confirm-travel' || route.path === '/continue-jorney') {
    return HeaderTakeTrip;
  } else if (route.path === '/enter-code' || route.path === '/enter-code-login' || route.path === '/enter-password' || route.path === '/register-number' || route.path === '/create-profile' || route.path === '/register-number-login' )  {
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
