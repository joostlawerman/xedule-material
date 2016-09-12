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
			v-for="(index, event) in events"
			track-by="$index"
			:first="index === 0"
			:last="index == events.length - 1"
			:event="event">

		</event>
	</div>
</template>
<script>
	import Event from './Event'

	import moment from 'moment';

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
				colors: [
					'4CAF50',
					'FF9800',
					'2196F3',
					'3F51B5',
					'FFEB3B'
				],
				events: []
			}
		},
		created() {
			var events = [], loops = 0;
			for (event in this.model.events) {

				if (event in this.model.events) {
					loops++;

					event = this.model.events[event]

					event.start_stamp = this.parseTime(event.start);
					event.end_stamp = this.parseTime(event.end)

					if (events.length   > 0) {
						const last = events[events.length - 1];

						if (!event.end_stamp.isSame(last.start_stamp)) {
							events.push({
								contents: 'Break',
								start: last.end,
								end: event.start,
								end_stamp: event.start_stamp,
								color: "9E9E9E",
								icon: "access_time"
							});
						}
					}

					var icons = [
						'local_activity',
						'import_contacts',
						'layers',
						'photo_camera'
					];

					event.icon = icons[Math.round(Math.random() * (icons.length - 1))];

					event.color = this.getColor();

					events.push(event)

					if (loops == this.model.events.length) {
						events.push({
							contents: 'End of ' + event.start_stamp.format('dddd'),
							start: event.end_stamp.format('hh:mm'),
							end: event.end,
							end_stamp: event.end_stamp,
							color: "9E9E9E",
							icon: "looks"
						});
					}
				}
			}

			this.events = events;
		},
		methods: {
			parseTime(string) {
				const time = string.split(':')

 				return moment(this.model.timestamp * 1000).subtract(1, 'd').add({
					hours: time[0],
					minutes: time[1]
				});
			},
			getColor() {
				if (this.colors.length > 0) {
					return this.colors.shift()
				}

				this.colors = [
					'4CAF50',
					'FF9800',
					'2196F3',
					'3F51B5',
					'FFEB3B'
				];

				return this.getColor();
			}
		}
	}

</script>
