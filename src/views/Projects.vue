<template>
  <div class="page-container projects-background-color">

    <div class="project-container">
      <div v-for="project in projects" :key="project.id">
      <ProjectBox class="project" :title="project.title" :description="project.description" :link="project.link" :images="project.images" />
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectBox from "../components/ProjectBox.vue";


const projects = ref([
  {
    id: 1,
    title: "Project 1",
    description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "http://www.google.com",
    images: ['https://i.pinimg.com/236x/62/7a/dd/627addc42fa20df294065eb042993efc.jpg',

  ],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "http://www.google.com",
    images: ['https://www.mundodeportivo.com/alfabeta/hero/2020/07/evangelion-01.jpg?width=768&aspect_ratio=16:9&format=nowebp',

  ],
  },


  {
    id: 3,
    title: "Project 1",
    description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "http://www.google.com",
    images: ['https://i.pinimg.com/236x/62/7a/dd/627addc42fa20df294065eb042993efc.jpg',

  ],
  },
  {
    id: 4,
    title: "Project 2",
    description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "http://www.google.com",
    images: ['https://www.mundodeportivo.com/alfabeta/hero/2020/07/evangelion-01.jpg?width=768&aspect_ratio=16:9&format=nowebp',

  ],
  },

  {
    id: 5,
    title: "Project 1",
    description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "http://www.google.com",
    images: ['https://i.pinimg.com/236x/62/7a/dd/627addc42fa20df294065eb042993efc.jpg',

  ],
  },
  {
    id: 6,
    title: "Project 2",
    description: "Aqui es donde va toda la descripcion del proyecto, por ahora solo pondremos un  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "http://www.google.com",
    images: ['https://www.mundodeportivo.com/alfabeta/hero/2020/07/evangelion-01.jpg?width=768&aspect_ratio=16:9&format=nowebp',

  ],
  },
]);
</script>


<style scoped>
.project-container{
  display: flex;
  overflow-x: auto;
  align-items: center;

}
.project-container::-webkit-scrollbar {
  display: none;
}

.page-container {
  padding-left: 5%;
  padding-right: 5%;

}

.projects-background-color {
  background-color: #0a0018a2;
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow-y:auto;
  overflow-x: hidden;
}

</style>
