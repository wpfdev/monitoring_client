import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import store from './store';

const app = new Vue({
    router,
    store,
    el: "#app",
    render: h => h("router-view")
});
