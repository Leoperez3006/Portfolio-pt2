<template>
  <div class="animated-box conditional-size">
    <div class="col">
      <div class="row">
        <h2>{{ title }}</h2>
      </div>
      <div class="row">
        <img className = "photo" :src="props.images[0]" />
      </div>
      <div class="row">
        <component :is="ScrollArea" :height="definedHeight" :content="description" />
      </div>
      <component :link="props.link" :is="GitButton" />
    </div>
  </div>
</template>

<script setup>
import GitButton from "./GitButton.vue";
import Carousel2 from "./Carousel2.vue";
import Carousel from "./Carousel.vue";
import ScrollArea from "./ScrollArea.vue";
const definedHeight = "150"
// const catImage=     'https://i.pinimg.com/236x/62/7a/dd/627addc42fa20df294065eb042993efc.jpg';
;
const props = defineProps({
  title: String,
  description: String,
  link: String,
  images: Array
});
</script>

<style scoped>
.conditional-size{
  width: 300px;
  height: 600px;
}
</style>
