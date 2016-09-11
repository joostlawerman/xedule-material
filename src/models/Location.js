
import AttendeeGroup from './AttendeeGroup.js';

export default class Location {
	constructor(id, name) {
		this.children = [];
		this.id = id;
		this.name = name;
	}
	loadChildren() {
		fetch('https://devlopment.space/xedule/locations/'+this.id+'/attendees')
			.then((res) => res.json())
			.then((json) => {
				this.children = Object.keys(json).map((childId) => {
					return new AttendeeGroup(childId, json[childId]);
				})
			 })
	}
}
