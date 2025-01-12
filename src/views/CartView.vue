<template>
  <div>
    <h1 class="text-center">Váš košík</h1>
    <v-container>
      <v-row v-if="cartItems.length">
        <v-col cols="12" md="6" lg="4" v-for="item in cartItems" :key="item.id">
          <CartItem :item="item" @remove-item="removeItem" />
        </v-col>
      </v-row>
      <v-row v-else>
        <p>Váš košík je prázdny.</p>
      </v-row>
      <h2 class="text-center">Celková cena: {{ totalPrice }} €</h2>
    </v-container>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';
import CartItem from '@/components/CartItem.vue';

export default {
  name: 'CartView',
  components: { CartItem },
  setup() {
    const cartStore = useCartStore();

    const cartItems = computed(() => cartStore.items);
    const totalPrice = computed(() => cartStore.totalPrice);

    const removeItem = (productId) => {
      cartStore.removeFromCart(productId); // Odstráni položku
    };

    return {
      cartItems,
      totalPrice,
      removeItem,
    };
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
