
import Attendee from './Attendee.js'

export default class AttendeeGroup {
	constructor(name, children) {
		this.children = Object.keys(children).map((group) => {
			return new Attendee(group, children[group])
		});
		this.name = name;
		this.id = name;
	}
	loadChildren() {
	}
}
