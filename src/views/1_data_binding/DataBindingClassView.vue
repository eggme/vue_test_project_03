<template>
<div>
  <div :class="{'font-red': hasError, 'active': isActive}">클래스 바인딩</div>
  <div :class="class2">클래스 바인딩2</div>
</div>
</template>

<script>
export default {
  name: 'DataBindingClassView',
  components: {},
  data () {
    return {
      value: 'DataBindingClassView',
      isActive: true,
      hasError: true,
      class2: ['active', 'hasError']
    }
  },
  setup () {
  },
  created () {
  },
  mounted () {
  },
  unmounted () {
  },
  methods: {}
}
</script>

<style scoped>
.active {
  background-color: #42b983;
  font-weight: bold;
}
.font-red {
  color: red;
}
</style>
