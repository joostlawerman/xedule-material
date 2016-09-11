import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Schedule from './pages/Schedule';
import Organisations from './pages/Organisations';
import Locations from './pages/Locations';
import Attendees from './pages/Attendees';

const router = new VueRouter({
    history: true,
    hashbang: false
})

router.map({
    '/': {
        component: Organisations
    },
    '/organisations/:id': {
        component: Locations
    },
    '/locations/:id/attendees': {
        component: Attendees
    },
    '/schedule': {
        component: Schedule
    }
});

import App from './App';

router.start(App, '#app');
