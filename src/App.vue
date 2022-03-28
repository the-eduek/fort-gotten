<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
import Home from './views/Home.vue';
import AllKidz from './views/AllKidz.vue';

export default {
  components: { Home, AllKidz },
}
</script>

<style>
</style>
