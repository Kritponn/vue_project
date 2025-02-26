import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // Produkty v košiku
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      
      this.items = this.items.filter((item) => item.id !== productId);/*filter metoda nove pole bez id itemu*/
      
    },
  },

});
