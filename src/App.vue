<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <v-cump></v-cump>
  </div>
</template>

<script type="text/ecmascript-6">
import cump from './components/cump.vue'
export default {
  name: 'app',
  components: {
    'v-cump': cump
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
