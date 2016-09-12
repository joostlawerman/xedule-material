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
			<i class="material-icons md-18" :style="'color:#' + event.color">{{ event.icon }}</i>
			<div v-if="!first" class="bar-top" :style="'background-color:#' + event.color"></div>
			<div v-if="!last" class="bar-bottom" :style="'background-color:#' + event.color"></div>
		</div>
		<div class="info">
			<span class="start">{{ event.start }}</span>
			<br>
			<span class="contents">{{{ event.contents }}}</span>
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
				icon: 'import_contacts',
				time: {}
			}
		},
		created() {
			console.log(this.event.color)
			if (this.event.end_stamp.isBefore(moment())) {
				this.event.color = '9E9E9E'
			}
		}
	}
</script>
