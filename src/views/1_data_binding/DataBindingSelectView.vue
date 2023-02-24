<template>
  <div>
    <select v-model="selectedCity">
      <option value="">선택</option>
      <option value="02">서울</option>
      <option value="062">광주</option>
      <option value="051">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DataBindingSelectView',
  components: {},
  data () {
    return {
      value: 'DataBindingSelectView',
      selectedCity: '02'
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
