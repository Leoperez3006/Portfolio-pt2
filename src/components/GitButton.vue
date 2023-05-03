<template>
    <div class="wrap">

        <button @click="redirect()"  class="button-git">
        <img class="git-svg"  src = "../assets/githubIcon.svg" alt="My Happy SVG"/>
        </button>
    </div>
</template>


<script setup>
import {ref} from "vue";

const redirect = () =>{
  window.open(props.link, '_blank').focus();
}
const props = defineProps({
    link: String,
})

</script>


<style scoped>
  /*THis is the border*/
  button::before {
content: '';
  border-radius: 10px;
  min-width: calc(100% );
  min-height: calc(100%);
  border: 1px solid #6800a5;
  box-shadow: 0 0 50px #2d1a3ae5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 100;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 10px;
  border: 6px solid #040411;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
/*   animation: ring 1.5s infinite; */
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

/*Here ends the ButtonGit css*/


</style>
