<template>
    <v-card>
      <v-img :src="item.image" :alt="item.title" height="200px" />
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-text>
        <p>Počet: {{ item.quantity }}</p>
        <p class="price">Cena: {{ (item.price * item.quantity).toFixed(2) }} €</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click="$emit('remove-item', item.id)">Odstrániť</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'CartItem',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .price {
    font-weight: bold;
    color: green;
  }
  </style>
  