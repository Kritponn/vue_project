<template>
  <div>
    <h1 class="text-center">Pripravované udalosti</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="event in upcomingEvents" :key="event.id">
          <EventCard :event="event" @view-details="viewEventDetails" />
        </v-col>
      </v-row>
    </v-container>

    <h1 class="text-center mt-4">Ukončené podujatia</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="event in pastEvents" :key="event.id">
          <EventCard :event="event" @view-details="viewEventDetails" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'EventsView',
  components: {
    EventCard,
  },
  data() {
    return {
      upcomingEvents: [
        {
          id: 1,
          title: 'Workshop Vue.js',
          date: '20. január 2025',
          description: 'Získajte pevné základy jedného z najpopulárnejších JavaScriptových frameworkov na dnešnom trhu!',
          image: new URL('@/assets/event1.jpg', import.meta.url).href,
        },
        {
          id: 2,
          title: 'Základy Vuetify',
          date: '10. február 2025',
          description: 'Objavte silu moderného dizajnu s Vuetify, najobľúbenejšou knižnicou komponentov pre Vue.js.',
          image: new URL('@/assets/event2.jpg', import.meta.url).href,
        },
      ],
      pastEvents: [
        {
          id: 3,
          title: 'Creative Coding for Beginners',
          date: '5. máj 2024',
          description: 'Objavte svet kreatívneho programovania!',
          image: new URL('@/assets/event3.jpg', import.meta.url).href,
        },
        {
          id: 4,
          title: 'Intro to Progressive Web Apps',
          date: '20. jún 2024',
          description: 'Vstúpte do sveta progresívnych webových aplikácií (PWA) – technológie, ktorá mení spôsob, akým budujeme moderné aplikácie.',
          image: new URL('@/assets/event4.jpg', import.meta.url).href,
        },
      ],
    };
  },
  methods: {
  viewEventDetails(eventId) {
    this.$router.push(`/event/${eventId}`); // Presmeruje na stránku detailu udalosti
  },
},

};
</script>

<style>
.text-center {
  text-align: center;
}
.mt-4 {
  margin-top: 32px;
}
</style>
