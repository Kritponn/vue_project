<template>
  <div>
    <h1 class="text-center">{{ course.title }}</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="course.image" :alt="course.title" height="300px" />
        </v-col>
        <v-col cols="12" md="6">
          <p><strong>Popis:</strong> {{ course.description }}</p>
          <p><strong>Obsah kurzu:</strong></p>
          <ul>
            <li v-for="topic in course.topics" :key="topic">{{ topic }}</li>
          </ul>
          <p><strong>Dĺžka:</strong> {{ course.duration }}</p>
          <p><strong>Úroveň:</strong> {{ course.level }}</p>
          <p class="price"><strong>Cena:</strong> {{ course.price }} €</p>
          <v-btn color="success" @click="addToCart">Pridať do košíka</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { useRoute } from 'vue-router';

export default {
  name: 'CourseDetail',
  setup() {
    const route = useRoute();
    const cartStore = useCartStore();

    const courseId = parseInt(route.params.id);
    const courses = [
      {
        id: 1,
        title: 'Základy JavaScriptu',
        description: 'Naučte sa základné koncepty programovania v JavaScripte.',
        topics: ['Premenné a dátové typy', 'Cykly', 'Funkcie', 'Manipulácia s DOM'],
        duration: '5 hodín',
        level: 'Začiatočník',
        price: 49.99,
        image: new URL('@/assets/course1.jpg', import.meta.url).href,
      },
      {
        id: 2,
        title: 'CSS pre pokročilých',
        description: 'Zlepšite svoje schopnosti v tvorbe moderných dizajnov s CSS.',
        topics: ['Flexbox a Grid', 'Animácie', 'Responzívny dizajn', 'CSS pre procesory'],
        duration: '4 hodiny',
        level: 'Pokročilý',
        price: 59.99,
        image: new URL('@/assets/course2.jpg', import.meta.url).href,
      },
      {
        id: 3,
        title: 'Webová bezpečnosť',
        description: 'Objavte základy ochrany webových aplikácií pred útokmi.',
        topics: ['Základy šifrovania', 'Bezpečnostné hrozby', 'Ochrana proti XSS a CSRF'],
        duration: '6 hodín',
        level: 'Stredne pokročilý',
        price: 79.99,
        image: new URL('@/assets/course3.jpg', import.meta.url).href,
      },
    ];

    const course = courses.find((c) => c.id === courseId);

    const addToCart = () => {
      cartStore.addToCart(course);
      alert(`${course.title} bol pridaný do košíka!`);
    };

    return { course, addToCart };
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
.price {
  font-weight: bold;
  color: green;
}
</style>
