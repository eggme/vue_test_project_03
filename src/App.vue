<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding/string">String</router-link> |
    <router-link to="/dataBinding/html">Html</router-link> |
    <router-link to="/dataBinding/input">Input</router-link> |
    <router-link to="/dataBinding/select">Select</router-link> |
    <router-link to="/dataBinding/checkBox">Checkbox</router-link> |
    <router-link to="/dataBinding/radio">Radio</router-link> |
    <router-link to="/dataBinding/attribute">Attribute</router-link> |
    <router-link to="/dataBinding/list">List</router-link> |
    <router-link to="/dataBinding/class">Class</router-link> |
    <router-link to="/dataBinding/style">Style</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
