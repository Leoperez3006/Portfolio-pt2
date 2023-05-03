<template>
  <component :is="Carousel">
    <component :is="Slide" v-for="image in images" :key="image.id">
        <img :src="image.url" />
      <!-- <div class="carousel__item">{{ slide }}</div> -->
    </component>

    <template #addons>
      <Navigation />
      <!-- <Pagination/> -->
    </template>
  </component>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const images = [
  { id: 1, url: 'https://i.pinimg.com/236x/62/7a/dd/627addc42fa20df294065eb042993efc.jpg', },
  { id: 2, url: 'https://ih1.redbubble.net/image.4037055742.7277/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',},
  { id: 3, url: 'https://ih1.redbubble.net/image.487231397.7646/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u4.jpg'},
]

</script>

<style>
.carousel__item {
  max-height: 20px;
  /* min-height: 200px; */
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
