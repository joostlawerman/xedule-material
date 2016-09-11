<style lang="scss">
	.subheader {
		height: 48px;
		width: 100%;
		float: right;
		background-color: #EDEDED;
		span {
			color: rgba(0, 0, 0, 0.38);
			line-height: 48px;
			padding-left: 16px;
		}
	}
</style>

<template>
	<div>
		<div v-for="(group, attendees) in attendeeGroups">
			<div class="subheader">
				<span>{{{ group }}}</span>
			</div>
		    <div>
		        <item class="item"
		            v-for="(id, attendee) in attendees"
		            :link="'locations/'+ id +'/attendees'"
		            :name="attendee">

		        </item>
	    	</div>
		</div>
	</div>
</template>

<script>

import Item from './components/Item';

export default {
    data() {
        return {
            attendeeGroups: {}
        }
    },
    components: {
        Item
    },
    created: function() {
        fetch('https://devlopment.space/xedule/locations/'+this.$route.params.id+'/attendees')
			.then((res) => res.json())
			.then((json) => this.attendeeGroups = json)
    }
}

</script>
