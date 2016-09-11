<template>
    <div>
        <item class="item"
            v-for="child in children"
            :model="child">

        </item>
    </div>
</template>

<script>

import Item from './components/Item';

import Organisation from './../models/Organisation.js';

export default {
    data() {
        return {
            children: []
        }
    },
    components: {
        Item
    },
    created: function() {
        fetch('https://devlopment.space/xedule/organisations')
            .then((res) => res.json())
            .then((json) => {
                 this.children = Object.keys(json).map((childId) => {
                     return new Organisation(childId, json[childId]);
                 })
             })
    }
}

</script>

<style>
    body {
        font-family: Menlo, Consolas, monospace;
        color: #444;
    }
    .item {
        cursor: pointer;
    }
    .bold {
        font-weight: bold;
    }
    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
</style>
