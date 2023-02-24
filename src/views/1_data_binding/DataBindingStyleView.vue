<template>
<div>
  <div :style="style1">스타일 바인딩: 글씨는 red, 폰트 크기: 30px</div>
  <div :style="style2">스타일 바인딩: 글씨는 red, 폰트 크기: 30px</div>
  <button @click="style1.color=blue">색상바꾸기</button>
</div>
</template>

<script>
export default {
  name: 'DataBindingStyleVIew',
  components: {},
  data () {
    return {
      value: 'DataBindingStyleVIew',
      style1: { color: 'red', fontSize: '30px' },
      style2: { color: 'green', fontSize: '30px' }
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

</style>
