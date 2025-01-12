<template>
  <v-card>
    <v-img :src="product.image" :alt="product.title" height="200px" />
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>
      <p>{{ product.description }}</p>
      <p class="price">Cena: {{ product.price }} €</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="navigateToDetails">Viac informácií</v-btn>
      <v-btn color="success" @click="$emit('add-to-cart', product)">Kúpiť</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const navigateToDetails = () => {
      router.push(`/course/${props.product.id}`);
    };

    return { navigateToDetails };
  },
};
</script>

<style>
.price {
  font-weight: bold;
  color: green;
}
</style>
