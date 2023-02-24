<template>
<div>
  <select name="" id="">
    <option v-for="city in cities" :key="city.code" :value="city.code">{{city.title}}</option>
  </select>
  <br />
  <div class="table_div">
    <div class="container">
      <table>
        <tr>
          <th>선택</th>
          <th>유저키</th>
          <th>유저명</th>
          <th>아이디</th>
          <th>보유마일리지</th>
          <th>가입일</th>
        </tr>
        <tr v-for="member in members" :key="member.mbno">
          <td><input type="checkbox" :value="member.mileage" v-model="selectedMileage"/></td>
          <td>{{member.mbno}}</td>
          <td>{{member.name}}</td>
          <td>{{member.userId}}</td>
          <td>{{member.mileage}}</td>
          <td>{{member.regdt}}</td>
        </tr>
      </table>
      <div>합계 : {{selectedMileage.reduce((a, b) => a+b, 0)}}</div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DataBindingListView',
  components: {},
  data () {
    return {
      value: 'DataBindingListView',
      cities: [
        { title: '서울', code: '02' },
        { title: '광주', code: '062' },
        { title: '부산', code: '051' }
      ],
      members: [
        { mbno: 1, name: '이승준', userId: 'kyyeto9984', mileage: 1000, regdt: '2022-01-02 22:33:44' },
        { mbno: 2, name: '김승준', userId: 'zzz1234', mileage: 5000, regdt: '2019-03-02 22:33:44' },
        { mbno: 3, name: '최승준', userId: 'qqq234', mileage: 4000, regdt: '2015-01-02 22:33:44' },
        { mbno: 4, name: '신승준', userId: 'fefe2223', mileage: 1200, regdt: '2016-01-02 22:33:44' }
      ],
      selectedMileage: []
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
.table_div {
  margin: 0 auto;
  width: 100%;
  height: auto;
}
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 0;
}
.table_div table tr th {
  padding: 8px 30px;
}
.table_div table tr td {
  padding: 4px 0px;
}
</style>
