<template>
<div>
  <div v-html="htmlString"></div>
</div>
</template>

<script>
export default {
  name: 'DataBindingHtmlView',
  components: {},
  data () {
    return {
      value: 'DataBindingHtmlView',
      htmlString: '<p style="color:red">빨간색 문자입니다~</p>'
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
