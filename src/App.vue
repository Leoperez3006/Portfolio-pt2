<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
<style scoped>
div{
    height: 100vh;
    widows: 100vw;
    background-image: url( './assets/endless-constellation.svg' );
}
</style>

