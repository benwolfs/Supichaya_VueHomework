<template>
  <div id="app">
    <nav class="flex justify-end bg-black h-16 items-center font-serif">
      <div class="space-x-8 mr-8 text-white text-2xl">
        <router-link
          to="/"
          :class="{ 'text-blue-400': routes == 'profile' }"
          class="hover:text-blue-400"
          >Profile</router-link
        >
        <router-link
          to="/contact"
          :class="{ 'text-blue-400': routes == 'contact' }"
          class="hover:text-blue-400"
          >Contact</router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    routes() {
      return this.$route.name;
    },
  },
};
</script>
