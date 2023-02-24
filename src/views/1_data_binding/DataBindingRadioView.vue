<template>
  <div>
    <div>
      <input type="radio" name="" id="html" value="HTML" v-model="favoriteLanguage">
      <label htmlFor="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS" v-model="favoriteLanguage">
      <label htmlFor="css">CSS</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="JS" v-model="favoriteLanguage">
      <label htmlFor="js">JS</label>
    </div>
    <div>선택한 지역: {{ favoriteLanguage}}</div>
  </div>
</template>

<script>
export default {
  name: 'DataBindingRadioView',
  components: {},
  data () {
    return {
      value: 'DataBindingRadioView',
      favoriteLanguage: 'CSS'
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
