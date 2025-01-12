import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EventsView from '../views/EventsView.vue';
import BlogView from '../views/BlogView.vue';
import ShopView from '../views/ShopView.vue';
import ArticleView from '../views/ArticleView.vue';
import CartView from '@/views/CartView.vue';
import CourseDetail from '@/views/CourseDetail.vue';
import EventDetail from '@/views/EventDetail.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/events', name: 'events', component: EventsView },
    { path: '/blog', name: 'blog', component: BlogView },
    { path: '/shop', name: 'shop', component: ShopView },
    { path: '/article/:id', name: 'article', component: ArticleView },
    { path: '/cart', name: 'cart', component: CartView },
    { path: '/course/:id', name: 'courseDetail', component: CourseDetail },
    { path: '/event/:id', name: 'eventDetail', component: EventDetail },
  ],
});

export default router;
