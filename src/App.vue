<template>
  <div class="app-vue">
    <NavComponent />
    <div class="main">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import BaseBtn from "./components/BaseBtn.vue";
import NavComponent from "./components/NavComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  components: {
    BaseBtn,
    NavComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>
  .app-vue{
    display: flex;
    flex-direction: column;
    height: 100vh;
    .main{
      flex-grow: 1;
    }
  }
</style>