/**
 * Created by hasee on 2017/8/11.
 */
import index from './index.vue'

import Vue from 'vue'
// import api from 'apists'
// const apis =api;
// console.log(apis);

new Vue({
    el: '#app',
    render: mod => mod(index)
})
