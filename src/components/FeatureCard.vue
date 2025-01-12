<template>
    <v-card outlined>
      <v-card-title>
        <v-icon :color="iconColor" class="mr-2">{{ icon }}</v-icon>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <p>{{ description }}</p>
        <slot></slot> 
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "FeatureCard",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      iconColor: {
        type: String,
        default: "primary",
      },
    },
  };
  </script>
  
  <style scoped>
  .mr-2 {
    margin-right: 8px;
  }
  </style>
  