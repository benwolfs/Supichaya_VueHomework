<template>
  <div class="contact font-serif">
    <baseFrame class="frame shadow-md w-1/3 mx-auto space-y-6 text-xl">
      <h1 class="topic text-5xl text-center">Contact</h1>
      <p class=>Email: {{ contact.email }}</p>
      <p>Tel: {{ contact.tel }}</p>
    </baseFrame>
  </div>
</template>

<script>
import BaseFrame from '../components/BaseFrame.vue';
export default {
  name: 'Contact',
  components: {
    BaseFrame: BaseFrame,
  },
  data() {
    return {
      contact: {
        email: 'forwork.spcy@gmail.com',
        tel: '0972190935',
      },
    };
  },
};
</script>

<style>
.frame {
  margin-top: 19%;
}
</style>
