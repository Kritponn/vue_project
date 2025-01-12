<template>
  <v-card>
    <v-img :src="event.image" :alt="event.title" height="200px" />
    <v-card-title>{{ event.title }}</v-card-title>
    <v-card-text>
      <p>{{ event.date }}</p>
      <p>{{ event.description }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('view-details', event.id)">Viac informácií</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
