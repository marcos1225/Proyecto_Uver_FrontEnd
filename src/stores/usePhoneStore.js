
import { defineStore } from 'pinia';

export const usePhoneStore = defineStore('phoneStore', {
  state: () => ({
    phoneNumber: ''
  }),
  actions: {
    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
    }
  },
  getters: {
    getPhoneNumber: (state) => state.phoneNumber
  }
});
