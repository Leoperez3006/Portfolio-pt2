<template>
    <nav>
      <ul>
        <li><router-link to="/about">About me</router-link></li>
        <li><router-link to="/projects">Major projects</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/contact">Contact me</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style lang="scss">
  nav {
    border-radius:50px;
    margin: 0;
    background-color: #42097065;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    padding-left: 5%;
    padding-right: 5%;
  }
  
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-right: 20px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  