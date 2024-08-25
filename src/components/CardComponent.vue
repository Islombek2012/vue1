<template>
  <div class="col">
    <img class="image" :src="product.img" :alt="product.id" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <BaseBtn>Read More...</BaseBtn>
  </div>
</template>

<script>
import BaseBtn from './BaseBtn.vue';
export default {
  props: {
    product: {
      type: Object,
      default: true,
      required: true,
    },
  },
  components: {
      BaseBtn,
  },
};
</script>

<style lang="scss" scoped>
</style>