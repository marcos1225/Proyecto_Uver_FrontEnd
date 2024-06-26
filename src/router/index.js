import { createRouter, createWebHistory } from 'vue-router'
import Info from '@/components/Info.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register-number',
      name: 'register-number',
      component: () => import('../views/RegisterNumberView.vue')
    },
    ,
    {
      path: '/register-number-login',
      name: 'register-number-login',
      component: () => import('../views/LoginNumberView.vue')
    },
    {
      path: '/enter-code',
      name: 'enter-code',
      component: () => import('../views/EnterCodeRegisterView.vue')
    },
    {
      path: '/enter-code-login',
      name: 'enter-code-login',
      component: () => import('../views/EnterCodeLoginView.vue')
    },
    {
      path: '/create-profile',
      name: 'create-profile',
      component: () => import('../views/CreateProfileView.vue')
    },
    {
      path: '/enter-password',
      name: 'enter-password',
      component: () => import('../views/EnterPasswordView.vue')
    },
    {
      path: '/take-trip',
      name: 'take-trip',
      component: () => import('../views/TakeTripView.vue')
    },
    {
      path: '/confirm-travel',
      name: 'confirm-travel',
      component: () => import('../views/ConfirmTravelView.vue')
    },
    {
      path: '/continue-jorney',
      name: 'continue-jorney',
      component: () => import('../views/ContinueJorneyView.vue')
    },
     {
      path: '/info-user',
      name: 'info-user',
      component: Info
      
    },
    {
     path: '/view-trip',
     name: 'view-trip',
     component: () => import('../views/ViewTripView.vue'),
   },
   {
    path: '/register-license',
    name: 'register-license',
    component: () => import('../views/registerlicenseView.vue'),
  },
  {
   path: '/register-car',
   name: 'register-car',
   component: () => import('../views/registerCarView.vue'),
 },
 {
  path: '/trip-management',
  name: 'trip-management',
  component: () => import('../views/TripManagementView.vue'),
},
{
 path: '/search-driver',
 name: 'search-driver',
 component: () => import('../views/searchDriverView.vue'),
}

  ]
})
export default router
