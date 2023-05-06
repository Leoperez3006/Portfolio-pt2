<template>
    <div :style="{ height: `${height}px` }" class="scrollable-area">
      <div class="content-scroll">
        {{ content }}
      </div>
    </div>
  </template>
  
  <script setup>
    const props = defineProps({
        content: String,
        height: String
    })
  </script>
  
  <style scoped>
    .scrollable-area::-webkit-scrollbar {
      display: none;
    }
    .scrollable-area{
      overflow-y: auto;
      margin-bottom: 20px;
      
    }
    
    .content-scroll {
      padding: 10px;
      -ms-overflow-style: none;
    }
  </style>
  