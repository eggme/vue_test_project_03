<template>
<div>
  <input type="text" v-model="inputValue">
  <p>{{inputValue}}</p>
  <button @click="buttonClick" >click~</button>
  <button @click="changeData" >change~</button>
  <br />
  <input type="text" v-model.number="num1"> + <input type="text" v-model.number="num2"> = <span>{{num1 + num2}}</span>
  <br/>
  <input type="text" v-model.number="num3"> + <input type="text" v-model.number="num4"> = <span>{{num4 + num4}}</span>
</div>
</template>

<script>
export default {
  name: 'DataBindingInputView',
  components: {},
  data () {
    return {
      value: 'DataBindingInputView',
      inputValue: 'hello',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
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
  methods: {
    buttonClick() {
      console.warn(this.inputValue)
      alert(this.inputValue)
    },
    changeData() {
      this.inputValue = 'changed!'
    }
  }
}
</script>

<style scoped>

</style>
