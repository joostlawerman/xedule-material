<style lang="scss">
	@mixin card($depth) {
		@if $depth < 1 {
			box-shadow: none;
		} @else if $depth > 5 {
			@warn "Invalid $depth `#{$depth}` for mixin `card`.";
		} @else {
			box-shadow: bottom-shadow($depth), top-shadow($depth);
		}
	}

	@function top-shadow($depth) {
		$primary-offset: nth(1.5 3 10 14 19, $depth) * 1px;
		$blur: nth(1.5 3 10 14 19, $depth) * 4px;
		$color: rgba(black, nth(.12 .16 .19 .25 .30, $depth));

		@return 0 $primary-offset $blur $color;
	}

	@function bottom-shadow($depth) {
		$primary-offset: nth(1.5 3 6 10 15, $depth) * 1px;
		$blur: nth(1 3 3 5 6, $depth) * 4px;
		$color: rgba(black, nth(.24 .23 .23 .22 .22, $depth));

		@return 0 $primary-offset $blur $color;
	}

	.list {
		margin: 20px;

		padding: 4px 0 0 0;

		@include card(1);
	}
</style>
<template>
	<div class="list">
		<event
			v-for="(index, event) in model.events"
			track-by="$index"
			:first="index == 0"
			:last="index == model.events.length - 1"
			:event="event">

		</event>
	</div>
</template>
<script>
	import Event from './Event'

	// NOTE: https://material.google.com/components/subheaders.html#subheaders-list-subheaders

	export default {
		props: {
            model: Object
        },
		components: {
			Event
		},
		data() {
			return {

			}
		},
		created() {
			// props.events.reduce((event, events) => {
			//
			// })
		}
	}

</script>
