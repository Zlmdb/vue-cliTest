<template>
  <div class="hello">
	   <h2>2017/9/12修改</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">我是cump</a></li>
      <br>
    </ul>
    <router1></router1>
    <router-link to='rou1'>路由1</router-link>
  </div>
</template>

<script>
import router1 from './router1.vue'
export default {
  name: 'cump',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {router1}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
