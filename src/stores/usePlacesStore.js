import { defineStore } from 'pinia';

export const usePlacesStore = defineStore('placesStore', {
  state: () => ({
    origin: null,
    destination: null,
    suggestions: [],
  }),
  actions: {
    async fetchSuggestions(input) {
      const service = new google.maps.places.AutocompleteService();
      service.getPlacePredictions({ input }, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.suggestions = predictions;
        } else {
          console.error('Error fetching suggestions:', status);
        }
      });
    },
    setOrigin(position) {
      this.origin = position;
    },
    async setDestination(placeId) {
      if (!placeId) {
        console.error('Invalid placeid:', placeId);
        return;
      }
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails({ placeId }, (result, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.destination = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          };
        } else {
          console.error('Error setting destination:', status);
        }
      });
    },
  },
});
