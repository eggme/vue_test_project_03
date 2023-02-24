<template>
<div>
  <h1>{{ message }}</h1>
  <div>
    <p>firstName: {{obj.firstName}}</p>
    <p>lastName: {{obj.lastName}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'DataBindingStringView',
  data() {
    return {
      userName: 'Seungjun Lee',
      message: 'Welcome to Seungjun Lee Page',
      arr: [],
      obj: {
        firstName: 'Seungjun',
        lastName: 'Lee'
      }
    }
  }
}
</script>

<style scoped>
div { color: darkslateblue; }
</style>
