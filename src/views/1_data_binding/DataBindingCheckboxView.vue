<template>
<div>
  <div>
    <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLanguage">
    <label for="html">HTML</label>
  </div>
  <div>
    <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLanguage">
    <label for="css">CSS</label>
  </div>
  <div>
    <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLanguage">
    <label for="js">JS</label>
  </div>
  <div>선택한 지역: {{favoriteLanguage.join(', ')}}</div>
</div>
</template>

<script>
export default {
  name: 'DataBindingCheckboxView',
  components: { },
  data () {
    return {
      value: 'DataBindingCheckboxView',
      favoriteLanguage: ['JS']
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
