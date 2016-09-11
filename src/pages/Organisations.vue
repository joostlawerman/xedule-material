<template>
    <ul>
        <item class="item"
            v-for="(id, organisation) in organisations"
            :link="'/organisations/'+ id"
            :name="organisation">

        </item>
    </ul>
</template>

<script>

import Item from './components/Item';

export default {
    data() {
        return {
            organisations: []
        }
    },
    components: {
        Item
    },
    created: function() {
        fetch('https://devlopment.space/xedule/organisations')
            .then((res) => res.json())
            .then((json) => this.organisations = json)
    }
}

</script>
