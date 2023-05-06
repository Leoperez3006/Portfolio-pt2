<template>
  <div class="background-div">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>


<script setup >
import Navbar from './components/Navbar.vue'
import { ref, onMounted } from 'vue';

const deviceType = ref("");
// const device = ref("");

onMounted(() => {
  deviceType.value = navigator?.userAgentData?.platform.toLowerCase();
  console.log(deviceType.value)

})


</script>

<style scoped>

</style>

