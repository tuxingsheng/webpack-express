'use strict';

require('./index.less');

import Vue from 'vue';
import vueResource from 'vueResource';
import AppContent from './components/AppContent.vue';

//console.log(Vue);
//console.log($);

Vue.use(vueResource);
Vue.config.silent = true;

let app = new Vue({
    el: '#app',
    components: {
        AppContent
    },
    ready() {
        this.$http.get('/index/test', {
            params: {
                name: 'tuye'
            }
        }).then((res)=> {
            console.log(res);
            // success callback
        }).catch((err)=> {
            // error callback
        });

        this.$http.post('/index/test', {
            name: 'tuye'
        }).then((res)=> {
            console.log(res);
            // success callback
        }).catch((err)=> {
            // error callback
        });
    },
    data() {
        return {}
    },
    methods: {}
});

