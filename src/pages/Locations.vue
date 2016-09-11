<template>
    <ul>
        <item class="item"
            v-for="(id, location) in locations"
            :link="'/locations/'+ id +'/attendees'"
            :name="location">

        </item>
    </ul>
</template>

<script>

import Item from './components/Item';

export default {
    data() {
        return {
            locations: []
        }
    },
    components: {
        Item
    },
    created: function() {
        fetch('https://devlopment.space/xedule/organisations/'+this.$route.params.id+'/locations')
			.then((res) => res.json())
			.then((json) => this.locations = json)
    }
}

</script>
