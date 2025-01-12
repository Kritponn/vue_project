<template>
    <div>
      <h1 class="text-center">{{ event.title }}</h1>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-img :src="event.image" :alt="event.title" height="300px" />
          </v-col>
          <v-col cols="12" md="6">
            <p><strong>Dátum:</strong> {{ event.date }}</p>
            <p><strong>Popis:</strong> {{ event.description }}</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'EventDetail',
    setup() {
      const route = useRoute();
  
      const events = [
        {
          id: 1,
          title: 'Workshop Vue.js',
          date: '20. január 2025',
          description: 'Získajte pevné základy Vue.js.',
          image: new URL('@/assets/event1.jpg', import.meta.url).href,
        },
        {
          id: 2,
          title: 'Základy Vuetify',
          date: '10. február 2025',
          description: 'Objavte silu moderného dizajnu s Vuetify.',
          image: new URL('@/assets/event2.jpg', import.meta.url).href,
        },
        {
          id: 3,
          title: 'Creative Coding for Beginners',
          date: '5. máj 2024',
          description: 'Objavte svet kreatívneho programovania.',
          image: new URL('@/assets/event3.jpg', import.meta.url).href,
        },
        {
          id: 4,
          title: 'Intro to Progressive Web Apps',
          date: '20. jún 2024',
          description: 'Vstúpte do sveta progresívnych webových aplikácií.',
          image: new URL('@/assets/event4.jpg', import.meta.url).href,
        },
      ];
  
      const event = events.find((e) => e.id === parseInt(route.params.id));
  
      return { event };
    },
  };
  </script>
  
  <style>
  .text-center {
    text-align: center;
  }
  </style>
  