<template>
  <div class="hello">
    <h1>HELLO</h1>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">我是hello</a></li>
      <br>
    </ul>
    <!-- <comn></comn> -->
  </div>
</template>

<script>
// import comn from './cump.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to  my -cli'
    }
  }
  // components: {comn}
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
