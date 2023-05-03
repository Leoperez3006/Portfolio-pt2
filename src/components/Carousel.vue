<template>
    <div class="carousel-container">
      <div class="carousel-slide" :style="`transform: translateX(-${currentIndex * 100}%)`">
        <div v-for="(image, index) in images" :key="index" class="carousel-item">
          <img :src="image" alt="carousel-item" />
        </div>
      </div>
      <div class="carousel-arrows">
        <div class="carousel-arrow carousel-arrow-left" @click="prevSlide">
          <i class="fa fa-chevron-left"></i>
        </div>
        <div class="carousel-arrow carousel-arrow-right" @click="nextSlide">
          <i class="fa fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const images = ref([
    'https://i.pinimg.com/236x/62/7a/dd/627addc42fa20df294065eb042993efc.jpg',
    'https://ih1.redbubble.net/image.4037055742.7277/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    'https://ih1.redbubble.net/image.487231397.7646/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u4.jpg'
  ]);
  
  const currentIndex = ref(0);
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  };
  
  const prevSlide = () => {
    currentIndex.value =
      currentIndex.value === 0 ? images.value.length - 1 : currentIndex.value - 1;
  };
  
  // optional - transition animation
  const transition = ref('slide-fade');
  
  </script>
  
  <style>
  .carousel-container {
    margin: none;
    padding: none;
    position: relative;
    overflow: hidden;
  }
  
  .carousel-slide {
    display: flex;
    transition: all 0.5s ease-in-out;
  }
  
  .carousel-item {
    flex: 1 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-arrows {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 2;
  }
  
  .carousel-arrow {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .carousel-arrow:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  .carousel-arrow-left {
    margin-left: 20px;
  }
  
  .carousel-arrow-right {
    margin-right: 20px;
  }
  
  .carousel-arrow i {
    color: #ffffff;
    font-size: 20px;
  }
  </style>
  