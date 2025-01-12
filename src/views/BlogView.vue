<template>
  <div>
    <h1 class="text-center">Blog</h1>
    <p class="text-center">Prečítajte si naše najnovšie články o vývoji webových aplikácií a moderných technológiách.</p>

    <v-container>
      <!-- Zoznam článkov -->
      <v-row>
        <v-col cols="12" md="6" v-for="post in blogPosts" :key="post.id">
          <BlogPost :post="post" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';

export default {
  name: 'BlogView',
  components: {
    BlogPost,
  },
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'Čo by ste mali vedieť o CSS',
          date: '15. január 2025',
          excerpt: 'CSS je základným stavebným prvkom webového dizajnu. Zistite, ako pomocou CSS vytvárať moderné a responzívne stránky.',
          image: new URL('@/assets/blog1.jpg', import.meta.url).href,
        },
        {
          id: 2,
          title: 'Najlepšie JavaScriptové frameworky v roku 2025',
          date: '22. január 2025',
          excerpt: 'Preskúmajte, ktoré JavaScriptové frameworky dominujú roku 2025 a zistite, prečo by ste ich mali zvážiť pre svoje projekty.',
          image: new URL('@/assets/blog2.jpg', import.meta.url).href,
        },
      ],
    };
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
