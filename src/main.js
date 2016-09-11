import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import List from './pages/List'
import Schedule from './pages/Schedule'

const router = new VueRouter()

router.map({
    '/list': {
        component: List
    },
    '/schedule': {
        component: Schedule
    }
})

import App from './App';

router.start(App, '#app')
