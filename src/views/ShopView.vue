<template>
  <div>
    <h1 class="text-center">Obchod – Kurzy</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="course in courses" :key="course.id">
          <ProductCard :product="course" @add-to-cart="addToCart" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { useCartStore } from '@/stores/cart';

export default {
  name: 'ShopView',
  components: { ProductCard },
  setup() {
    const cartStore = useCartStore();

    const addToCart = (product) => {
      cartStore.addToCart(product);
      alert(`${product.title} bol pridaný do košíka!`);
    };

    const courses = [
      {
        id: 1,
        title: 'Základy JavaScriptu',
        description: 'Naučte sa základné koncepty programovania v JavaScripte.',
        price: 49.99,
        image: new URL('@/assets/course1.jpg', import.meta.url).href,
      },
      {
        id: 2,
        title: 'CSS pre pokročilých',
        description: 'Zlepšite svoje schopnosti v tvorbe moderných dizajnov s CSS.',
        price: 59.99,
        image: new URL('@/assets/course2.jpg', import.meta.url).href,
      },
      {
        id: 3,
        title: 'Webová bezpečnosť',
        description: 'Objavte základy ochrany webových aplikácií pred útokmi.',
        price: 79.99,
        image: new URL('@/assets/course3.jpg', import.meta.url).href,
      },
    ];

    return { addToCart, courses };
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
