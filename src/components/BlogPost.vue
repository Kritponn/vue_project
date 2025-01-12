<template>
  <v-card>
    <v-img :src="post.image" :alt="post.title" height="200px" />
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.date }}</v-card-subtitle>
    <v-card-text>
      <p>{{ post.excerpt }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text :to="`/article/${post.id}`">Čítať viac</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
