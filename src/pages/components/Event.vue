<style lang="scss">
	.list-item {
		height: 36px;
		padding: 20px 0 20px 0;
		position: relative;

		.info {
			height: 100%;
			float: left;

			.start, .contents {
				white-space: nowrap;
			}
			.start {
				width: 100%;
				font-size: 16px;
				color: rgba(0, 0, 0, 0.87);
			}
			.contents {
				width: 100%;
				font-size: 14px;
				color: rgba(0, 0, 0, 0.54);
			}
		}
		.location {
			color: rgba(0, 0, 0, 0.38);
			position: absolute;
			right: 16px;
			top: 20px;
			font-size: 12px;
		}
	}
	.icon {
		width: 40px;
		height: 100%;
		padding: 0 16px 0 16px;
		position: relative;
		float: left;

		.bar-top, .bar-bottom {
			width: 4px;
			height: 26px;
			position: absolute;
			left: calc(50% - 2px);
		}
		.bar-top {
			top: -20px;
		}
		.bar-bottom {
			bottom: -20px;
		}
		.material-icons {
			font-size: 18px;
			position: absolute;
			top: calc(50% - 9px);
			left: calc(50% - 9px);
		}
	}
</style>
<template>
	<div class="list-item">
		<div class="icon">
			<i class="material-icons md-18" :style="'color:' + color">{{ icon }}</i>
			<div v-if="!first" class="bar-top" :style="'background-color:' + color"></div>
			<div v-if="!last" class="bar-bottom" :style="'background-color:' + color"></div>
		</div>
		<div class="info">
			<span class="start">{{ event.start }}</span>
			<br>
			<span class="contents">{{ event.contents }}</span>
		</div>
		<span class="location">{{ event.location }}</span>
	</div>
</template>
<script>
	import moment from 'moment';

	export default {
		props: {
			event: Object,
			last: Boolean,
			first: Boolean
		},
		data() {
			return {
				color: '#6200EA',
				icon: 'import_contacts',
				time: {}
			}
		},
		created() {
			var colors = [
				'4CAF50',
				'FF9800',
				'2196F3',
				'3F51B5',
				'FFEB3B'
			]

			var icons = [
				'local_activity',
				'import_contacts',
				'layers',
				'photo_camera'
			]

			this.color = '#'+colors[Math.round(Math.random() * (colors.length - 1))];
			this.icon = icons[Math.round(Math.random() * (icons.length - 1))];

			const time = this.event.end.split(':')

			this.time = moment(this.$parent.model.timestamp * 1000).subtract(1, 'd').add({
				hours: time[0],
				minutes: time[1]
			})

			if (this.time.isBefore(moment())) {
				this.color = '#9E9E9E'
			}
		}
	}
</script>
