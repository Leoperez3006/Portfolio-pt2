<template>
    <div>
      <h1>About me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Letters text="Hello World!" size="1.5" color="#ff0000"></Letters>
    </div>
  </template>
  
  <script>
  import Letters from '../components/Letters.vue';
  export default {
    name: "About",
    components:{
        Letters
    }
  };
  </script>
 <style scoped>

</style>
  